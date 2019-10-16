---
id: tutorial
title: Tutorial
keywords:
  - test
  - real
  - tutorial
description: Explain MBT Bundle by testing a real (simple) application
---

An example will help create a login form

###### Step 1: create model
Go to http://localhost/#/models/build-model and fill data

###### Step 2: create a YAML file
```
$ mkdir src/Resources/config/models/your-folder
$ cd src/Resources/config/models/your-folder
$ touch your-model-name.yaml
```

###### Step 3: copy content to YAML file, add more information if needed
```
framework:
    workflows:
        your_model_name:
            type: "state_machine"
            supports:
                - Tienvx\Bundle\MbtBundle\Subject\SubjectInterface
            metadata:
                label: "Simple Model"
                tags: ["simple", "example"]
            places:
                - homepage
                - dashboard
            initial_marking: homepage
            transitions:
                login:
                    from: homepage
                    to: dashboard
                    guard: "subject.notLoggedIn()"
                    metadata:
                        label: "Login using credentials"
```

###### Step 4: generate subject
```
$ tests/app/bin/console make:subject your_model_name YourModelName
```

###### Step 5: Update your subject class to test
```
<?php

namespace Acme\Bundle\SkeletonBundle\Subject;

use Facebook\WebDriver\Exception\NoSuchElementException;
use Facebook\WebDriver\Exception\TimeOutException;
use Tienvx\Bundle\MbtBundle\Annotation\Place;
use Tienvx\Bundle\MbtBundle\Annotation\Subject;
use Tienvx\Bundle\MbtBundle\Annotation\Transition;
use Tienvx\Bundle\MbtBundle\Subject\AbstractSubject;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\WebDriverCapabilityType;
use Facebook\WebDriver\Remote\WebDriverBrowserType;
use Facebook\WebDriver\WebDriverPlatform;
use Symfony\Component\Panther\Client;
use Facebook\WebDriver\WebDriverExpectedCondition;

/**
 * @Subject("your_model_name")
 */
class YourModelName extends AbstractSubject
{
    /**
     * @var string
     */
    protected $url = 'http://example.com';
    protected $userName = 'username';
    protected $passWord = 'password';

    /**
     * @var Client
     */
    protected $client;

    /**
     * @throws NoSuchElementException
     * @throws TimeOutException
     */
    public function setUp(bool $testing = false)
    {
        if ($testing) {
            $this->client = Client::createChromeClient();
        } else {
            $caps = new DesiredCapabilities();
            $caps->setCapability(WebDriverCapabilityType::BROWSER_NAME, WebDriverBrowserType::FIREFOX);
            $caps->setCapability('platformName', WebDriverPlatform::LINUX);
            $caps->setCapability('browserVersion', '66.0.3');
            $caps->setCapability(
                'moz:firefoxOptions',
                ['args' => ['-headless']]
            );
            $this->client = Client::createSeleniumClient('http://hub:4444/wd/hub', $caps);
        }
    }

    /**
     * @Transition("login")
     *
     * @throws NoSuchElementException
     * @throws TimeOutException
     */
    public function login()
    {
        $this->client->get($this->url);
        $this->client->waitFor('apiom-signin-form', 1);
        $this->client->findElement(WebDriverBy::cssSelector('input[type="email"]'))->sendKeys($this->userName);
        $this->client->findElement(WebDriverBy::cssSelector('input[type="password"]'))->sendKeys($this->passWord);
        $this->client->findElement(WebDriverBy::cssSelector('button'))->click();
        $this->client->wait()->until(
            WebDriverExpectedCondition::titleContains('Dashboard')
        );
    }

    /**
     * @Place("homepage")
     */
    public function homepage()
    {
    }

    /**
     * @Place("dashboard")
     */
    public function dashboard()
    {
    }

    public function notLoggedIn(): bool
    {
        return true;
    }
}

```

###### Step 6: Test your model
```
$ env PANTHER_NO_HEADLESS=1 tests/app/bin/console mbt:model:test your_model_name --generator random --generator-options '{"maxSteps": 20}'
```
