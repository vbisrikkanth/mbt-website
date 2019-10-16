---
id: customize-model
title: Customize Model
keywords:
  - customize model
  - weight
  - probability
  - guard
description: Make model even more flexible
---

When creating a model, we can add a few additional attribute to make it more flexible

## Weight and probability

### Weight

How much effort to do a transition

* For Random and Binary reducers (that use [Dijkstra](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) algorithm
* Min: 0
* Default: 1
* Not necessary integer
* The re-produce steps will contains transitions that have lower weight

### Probability

How often a transition appear in the path

* For Probability generator
* Min: 1
* Default: 1
* Must be positive integer
* The number is relative to each other. Not necessary percentage
* More information [here](https://stackoverflow.com/a/11872928)

## Guard

In real world, not always a transition will be walk through. There will be conditions that prevent that happen. Those conditions are called guard.

Here is an example of a guard on a transition:

```yaml
transitions:
    remove:
      guard: "subject.cartIsOpen() && subject.cartHasProducts()"
```

> `subject.` is required here

## Model label

Just additional info to model. It's not required.

## Transition label

Just additional info to transition. It's not required.
