---
id: tutorial
title: Tutorial
keywords:
  - test
  - real
  - tutorial
description: Explain MBT Bundle by testing a real (simple) application
---

## Overview

In this tutorial, we will test a simple web application using MBT Bundle: http://react-compare-app.surge.sh/

![compare](/img/docs/tutorial/compare.png)

An application is very simple. It has these features:
* Compare product
* Remove product
* Product list is only displayed if there are 2 products to compare

## Initiate project

### Dependencies

Before starting new project, make sure you installed these dependencies

* [PHP](https://www.php.net/manual/en/install.php)
* [Composer](https://getcomposer.org/download/)
* [Docker](https://docs.docker.com/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Create blank project

Let create new project using this command

```bash
composer create-project tienvx/mbt-skeleton mbt-tutorial
```

## Update code

### Create model

The first steps is creating a model to describe the react compare app. This app is so simple, so we only need 1 model for it. Let create a new file in `mbt-tutorial/config/packages/dev/models/compare-app.yaml` with the content below:

```
framework:
    workflows:
        compare_app:
            type: "state_machine"
            supports:
                - Tienvx\Bundle\MbtBundle\Subject\SubjectInterface
            metadata:
                model: true
                label: "React Compare App"
                tags: ["react", "compare"]
            places:
                - comparisonTableHidden
                - comparisonTableVisible
            initial_marking: comparisonTableHidden
            transitions:
                compare1Product:
                    from: comparisonTableHidden
                    to: comparisonTableHidden
                    guard: "!subject.comparedProducts()"
                compare2Products:
                    from: comparisonTableHidden
                    to: comparisonTableVisible
                    guard: "subject.compared1Product()"
                compareMoreThan2Products:
                    from: comparisonTableVisible
                    to: comparisonTableVisible
                    guard: "subject.comparedMoreThan1Product() && subject.hasAvailableProducts()"
                removeSingleProduct:
                    from: comparisonTableVisible
                    to: comparisonTableVisible
                    guard: "subject.comparedMoreThan2Products()"
                removeNextToLastProduct:
                    from: comparisonTableVisible
                    to: comparisonTableHidden
                    guard: "subject.compared2Products()"
                removeLastProducts:
                    from: comparisonTableHidden
                    to: comparisonTableHidden
                    guard: "subject.compared1Product()"
```

The model we created only have 2 places:
* comparisonTableHidden: the state when we have product list, but without the product comparison table. In another word, we didn't add more than 1 product in order to make the product comparison table to display.
* comparisonTableVisible: the state when we have product list along with the product comparison table. In another word, we added 2 or more products in order to make the product comparison table to display.

The `initial_marking` is the initial state the app will be when we first load the website.

We have 6 transitions:
* compare1Product: click `Compare` button on a product when we didn't compare any product yet. This action does not make the product comparison table display
* compare2Products: click `Compare` button on the second product to compare 2 products. This action will make the product comparison table display
* compareMoreThan2Products: click `Compare` button on any product left. The product comparison table is always displayed
* removeSingleProduct: click `Remove` button on a product when we've already compared more than 2 products. This action will not make the product comparison table disappear
* removeNextToLastProduct: click `Remove` button on a product when we are comparing 2 products. This action will make the product comparison table disappear
* removeLastProducts: click `Remove` button on the last product. The product comparison table is disappeared already

The type of the model is `state_machine`, because the compare app can be only one state only: with, or without the comparison table. The compare app can't be in 2 states at the same time.

### Generate subject

Before generating subject, we need to clear the cache. The reason is our model is new and is not picked up by MBT Bundle.

```bash
php bin/console cache:clear
```

Note that that everytime we **change** the model, we need to **clear** the cache too. Then run this command to generate the subject:

```
php bin/console make:subject compare_app CompareApp
```

The subject will be available in `mbt-tutorial/src/Subject/CompareApp.php`. Its content is below:

```php
<?php

namespace App\Subject;

use Tienvx\Bundle\MbtBundle\Annotation\Subject;
use Tienvx\Bundle\MbtBundle\Annotation\Transition;
use Tienvx\Bundle\MbtBundle\Annotation\Place;
use Tienvx\Bundle\MbtBundle\Steps\Data;
use Tienvx\Bundle\MbtBundle\Steps\DataHelper;
use Tienvx\Bundle\MbtBundle\Subject\AbstractSubject;

/**
* @Subject("compare_app")
*/
class CompareApp extends AbstractSubject
{
    public function aGuard(): bool
    {
        return true;
    }

    /**
     * @Place("comparisonTableHidden")
     */
    public function comparisonTableHidden()
    {
    }

    /**
     * @Place("comparisonTableVisible")
     */
    public function comparisonTableVisible()
    {
    }

    /**
     * @Transition("compare1Product")
     */
    public function compare1Product(Data $data)
    {
        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
    }

    /**
     * @Transition("compare2Products")
     */
    public function compare2Products(Data $data)
    {
        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
    }

    /**
     * @Transition("compareMoreThan2Products")
     */
    public function compareMoreThan2Products(Data $data)
    {
        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
    }

    /**
     * @Transition("removeSingleProduct")
     */
    public function removeSingleProduct(Data $data)
    {
        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
    }

    /**
     * @Transition("removeNextToLastProduct")
     */
    public function removeNextToLastProduct(Data $data)
    {
        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
    }

    /**
     * @Transition("removeLastProducts")
     */
    public function removeLastProducts(Data $data)
    {
        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
    }
}
```

Subject is the way for our model to interact with the compare app. The generated class contains just minimal code, it does not know how to do that. We need to modify methods in that class:

```diff
diff --git a/src/Subject/CompareApp.php b/src/Subject/CompareApp.php
index 1489aa4..9cb0abb 100644
--- a/src/Subject/CompareApp.php
+++ b/src/Subject/CompareApp.php
@@ -2,6 +2,14 @@
 
 namespace App\Subject;
 
+use App\PageObjects\HomePage;
+use Exception;
+use Facebook\WebDriver\Remote\DesiredCapabilities;
+use Facebook\WebDriver\Remote\WebDriverBrowserType;
+use Facebook\WebDriver\Remote\WebDriverCapabilityType;
+use Facebook\WebDriver\WebDriverBy;
+use Facebook\WebDriver\WebDriverExpectedCondition;
+use Symfony\Component\Panther\Client;
 use Tienvx\Bundle\MbtBundle\Annotation\Subject;
 use Tienvx\Bundle\MbtBundle\Annotation\Transition;
 use Tienvx\Bundle\MbtBundle\Annotation\Place;
@@ -13,9 +21,79 @@ use Tienvx\Bundle\MbtBundle\Subject\AbstractSubject;
 */
 class CompareApp extends AbstractSubject
 {
-    public function aGuard(): bool
+    /**
+     * @var string
+     */
+    protected $url = 'http://react-compare-app.surge.sh/';
+
+    protected $availableProducts = [
+        'Cherry',
+        'Orange',
+        'Nuts',
+        'Strawberry',
+    ];
+
+    protected $comparedProducts = [];
+
+    public function setUp(bool $testing = false): void
+    {
+        if ($testing) {
+            $this->client = Client::createChromeClient();
+            $this->client->manage()->window()->maximize();
+        } else {
+            $caps = new DesiredCapabilities();
+            $caps->setCapability(WebDriverCapabilityType::BROWSER_NAME, WebDriverBrowserType::CHROME);
+            $caps->setCapability(WebDriverCapabilityType::VERSION, '77.0');
+            // These capabilities are for Selenoid only
+            $caps->setCapability('enableVNC', true);
+            $caps->setCapability('enableLog', false);
+            $caps->setCapability('enableVideo', false);
+            $this->client = Client::createSeleniumClient('http://hub:4444/wd/hub', $caps);
+        }
+        $this->navigateToHomePage();
+    }
+
+    protected function navigateToHomePage()
+    {
+        $this->client->get($this->url);
+        $this->client->wait()->until(
+            WebDriverExpectedCondition::visibilityOfElementLocated(WebDriverBy::cssSelector('.product'))
+        );
+    }
+
+    public function tearDown(): void
+    {
+        $this->client->quit();
+    }
+
+    public function comparedProducts(): bool
+    {
+        return !empty($this->comparedProducts);
+    }
+
+    public function compared1Product(): bool
+    {
+        return 1 === count($this->comparedProducts);
+    }
+
+    public function comparedMoreThan1Product(): bool
     {
-        return true;
+        return count($this->comparedProducts) > 1;
+    }
+
+    public function comparedMoreThan2Products(): bool
+    {
+        return count($this->comparedProducts) > 2;
+    }
+
+    public function compared2Products(): bool
+    {
+        return 2 === count($this->comparedProducts);
+    }
+
+    public function hasAvailableProducts()
+    {
+        return !empty($this->availableProducts);
     }
 
     /**
@@ -23,6 +101,13 @@ class CompareApp extends AbstractSubject
      */
     public function comparisonTableHidden()
     {
+        $this->client->wait()->until(
+            function () {
+                $elements = $this->client->findElements(WebDriverBy::cssSelector('.row.compare'));
+
+                return count($elements) === 0;
+            }
+        );
     }
 
     /**
@@ -30,6 +115,9 @@ class CompareApp extends AbstractSubject
      */
     public function comparisonTableVisible()
     {
+        $this->client->wait()->until(
+            WebDriverExpectedCondition::visibilityOfElementLocated(WebDriverBy::cssSelector('.row.compare'))
+        );
     }
 
     /**
@@ -37,6 +125,7 @@ class CompareApp extends AbstractSubject
      */
     public function compare1Product(Data $data)
     {
-        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
+        $this->compare($data);
     }
 
     /**
@@ -44,6 +133,7 @@ class CompareApp extends AbstractSubject
      */
     public function compare2Products(Data $data)
     {
-        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
+        $this->compare($data);
     }
 
     /**
@@ -51,6 +141,7 @@ class CompareApp extends AbstractSubject
      */
     public function compareMoreThan2Products(Data $data)
     {
-        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
+        $this->compare($data);
     }
 
     /**
@@ -58,6 +149,7 @@ class CompareApp extends AbstractSubject
      */
     public function removeSingleProduct(Data $data)
     {
-        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
+        $this->remove($data);
     }
 
     /**
@@ -65,6 +157,7 @@ class CompareApp extends AbstractSubject
      */
     public function removeNextToLastProduct(Data $data)
     {
-        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
+        $this->remove($data);
     }
 
     /**
@@ -72,5 +165,57 @@ class CompareApp extends AbstractSubject
      */
     public function removeLastProducts(Data $data)
     {
-        $value = DataHelper::get($data, 'key', $missCallback, $validateCallback);
+        $this->remove($data);
+    }
+
+    private function compare(Data $data)
+    {
+        if ($data->has('product')) {
+            $product = $data->get('product');
+            if (!in_array($product, $this->availableProducts)) {
+                throw new Exception('Selected product is invalid');
+            }
+        } else {
+            $key = array_rand($this->availableProducts);
+            $product = $this->availableProducts[$key];
+            $data->set('product', $product);
+        }
+        // Compare product (in memory)
+        unset($this->availableProducts[$key]);
+        $this->comparedProducts[] = $product;
+        // Compare product (on UI)
+        $this->compareOrRemove($product);
+    }
+
+    private function remove(Data $data)
+    {
+        if ($data->has('product')) {
+            $product = $data->get('product');
+            if (!in_array($product, $this->comparedProducts)) {
+                throw new Exception('Selected product is invalid');
+            }
+        } else {
+            $key = array_rand($this->comparedProducts);
+            $product = $this->comparedProducts[$key];
+            $data->set('product', $product);
+        }
+        // Remove product (in memory)
+        unset($this->comparedProducts[$key]);
+        $this->availableProducts[] = $product;
+        // Remove product (on UI)
+        $this->compareOrRemove($product);
+    }
+
+    private function compareOrRemove(string $product)
+    {
+        $image = $this->client->findElement(WebDriverBy::xpath(HomePage::image($product)));
+        $this->client->wait()->until(
+            WebDriverExpectedCondition::visibilityOf($image)
+        );
+        $by = WebDriverBy::xpath(HomePage::button($product));
+        $button = $this->client->findElement($by);
+        $action = $this->client->getWebDriver()->action();
+        $action->moveToElement($button)->perform();
+        $button->click();
     }
 }
```

### Add page object model

It's a best practice to add page object model to handle selectors for each page. In this case, we only have 1 page: home page. So we create 1 page object model:

```php
<?php

namespace App\PageObjects;

class HomePage
{
    public function button(string $product)
    {
        return "//span[@class='product_name' and .='{$product}']/ancestor::div[contains(@class, 'product')]/div[@class='view_details']";
    }

    public function image(string $product)
    {
        return "//span[@class='product_name' and .='{$product}']/ancestor::div[contains(@class, 'product')]/img";
    }
}
```

### Test your model

Now it's time to test your model on your local machine to make sure it works as expected. Run this command to test it:

```bash
env PANTHER_NO_HEADLESS=1 bin/console mbt:model:test compare_app --generator random --generator-options '{"maxSteps": 20}'
```

![result](/img/docs/tutorial/test.gif)

### Test your model with UI

After testing your model on your command line, next step is testing it with UI.

We will build docker images and put our code in. To do that, run these commands:

```bash
docker build -t tutorial-worker -f docker/build/Dockerfile.worker .
docker build -t tutorial-api -f docker/build/Dockerfile.api .
docker build -t tutorial-api-nginx -f docker/build/Dockerfile.api-nginx .
```

Then we update docker images that we built:
```
diff --git a/docker-compose.yml b/docker-compose.yml
index 85fa244..64eb283 100644
--- a/docker-compose.yml
+++ b/docker-compose.yml
@@ -13,20 +13,20 @@ services:
         ports:
             - 83:9000
     api-nginx:
-        image: "tienvx/mbt-examples-api-nginx:v1.15.1"
+        image: "tutorial-api-nginx"
         depends_on:
             - api
         ports:
             - 82:80
     api:
-        image: "tienvx/mbt-examples-api:v1.15.1"
+        image: "tutorial-api"
         depends_on:
             - db
             - minio
         env_file:
             - docker/.env
     worker:
-        image: "tienvx/mbt-examples-worker:v1.15.1"
+        image: "tutorial-worker"
         depends_on:
             - db
             - minio
```

Finally we will start UI:
```
docker-compose up --scale worker=2
./docker/install.sh
```

Then navigate to http://localhost and login with admin/admin. You can create your first task to test your model:

![create-task](/img/docs/tutorial/create-task.gif)

Of course, this compare app is simple so you can't find bug from it. But on more complex app, with lot of models, you can create more tasks with higher `Max Steps` number, then the chance for you to see a bug in http://localhost/#/bugs is higher.

## Summarize

That's it, we learned the basic of MBT Bundle. If you want to access the full source code, please check out https://github.com/tienvx/mbt-tutorial

Next steps:
* Learn more about model and the different between `State Machine` and `Workflow` at [beginner](beginner/model) and [intermediate](intermediate/model)
* Learn more about [task and bug](beginner/task-and-bug)
* Create your own project at [init project](intermediate/init-project) and write models for your system
* [Deploy](advanced/deploy) your project
