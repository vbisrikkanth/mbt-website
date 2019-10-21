---
id: subject
title: Subject
keywords:
  - model
  - config
  - yaml
description: Create model from YAML config file
---

## Overview

A subject will help model interact with the system under test.

This is how a subject look like:

```php
<?php

namespace App\Subject;

use Tienvx\Bundle\MbtBundle\Annotation\Place;
use Tienvx\Bundle\MbtBundle\Annotation\Subject;
use Tienvx\Bundle\MbtBundle\Annotation\Transition;

/**
 * @Subject("product")
 */
class Product extends AbstractSubject
{
    /**
     * @Transition("addToCart")
     *
     * @param Data $data
     */
    public function addToCart(Data $data)
    {
        ...
    }

    /**
     * @Place("product")
     */
    public function product()
    {
    }
}
```

> Annotation @Place, @Subject and @Transition are important. They will map the subject and its method to the correct model and its place and transition.

## Notes

Here are some useful tips:

1. Subject can be use to test any project, from api to web applications
2. Subject must implement `SubjectInterface`
3. In `setUp` method, the variable `$testing` is set to `true` only if we are testing the model
