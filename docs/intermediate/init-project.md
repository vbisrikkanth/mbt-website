---
id: init-project
title: Init Project
keywords:
  - init
  - new
  - scratch
description: Create new empty project
---

After playing around with our example project, you may want to start testing your system. There are 2 options for you:

1. Remove all examples and add your own models
2. Create new empty project from scratch

Either way works. But the later will give your more recent version of libraries.

---

Let try option #2:

1. Create a project

```bash
composer create-project tienvx/mbt-skeleton my-project
```

2. Install additional libraries if needed

```bash
cd my-project
composer require --dev phpunit friendsofphp/php-cs-fixer
```

3. Add your own models and predefined cases to `./config/packages/dev/models` and `./config/packages/dev/predefined-cases`. The last part `models` and `predefined-cases` are up to you.

4. Add code to `./src`. The most important code is subject, which is in `./src/Subject` directory. If you don't know what is subject is, please take a look at [subject](subject)

5. Now models and subjects are ready, let test it on your local machine first. Run this command to test the model:

```bash
env PANTHER_NO_HEADLESS=1 php bin/console mbt:model:test [MODEL_NAME] --generator random --generator-options '{"maxSteps": 20}'
```

`[MODEL_NAME]` is `your_model` in the file `./config/packages/dev/models/your-model.yaml`:

```yaml
framework:
    workflows:
        your_model:
            ...
```

6. Now let test your models from UI. First, copy `./docker` directory from your examples project to your project. Then, run these commands to start testing from UI:


```bash
cd docker
docker-compose up --scale worker=2
./install.sh
```

7. Deploy
Please check out [deploy](../advanced/deploy) page
