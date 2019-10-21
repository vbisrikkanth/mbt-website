---
id: model
title: Model
keywords:
  - model
  - config
  - yaml
description: Create model from YAML config file
---

## Build model

A model is a yaml file that describe your business logic
Here are some example models:
![models](/img/docs/getting-started/models.png)

To create a model, we built UI for it http://localhost/#/models/build-model
![build-model](/img/docs/model/build-model.png)

After filling data for UI, we will have content to put into a YAML file.
The file will have these information:

1. type: can be workflow or state_machine
    1. workflow: can be in more than one place simultaneously
    2. state_machine: cannot be in more than one place simultaneously
2. supports
4. places: list all places in this model
5. initial_marking: the first places for **generator** to walk through the model
6. transitions: list all transitions in this model
    1. from: the start place
    2. to: the end place

## Compare workflow and state machine (again)

In [model](../beginner/model) page, we compared workflow and state machine in a table. But there is one more different between them. It's number of places in `from` and `to` in a transition.

This is an example of a transition of a model with type state machine:

```yaml
transitions:
    openCart:
        from: home
        to: cart
```

And here is workflow:

```yaml
transitions:
    confirmOrder:
        from:
            - accountAdded
            - billingAddressAdded
            - deliveryAddressAdded
            - deliveryMethodAdded
            - paymentMethodAdded
            - awaitingOrderConfirm
        to: orderPlaced
```

In state machine, there must be 1 place in `from`, and 1 place in `to`. In workflow, there is no such that restriction. That different will lead to 4 terminologies:

* And-Split: ![and-split](/img/docs/workflow-state-machine/and-split.png)
* And-Join: ![and-join](/img/docs/workflow-state-machine/and-join.png)
* Or-Split: ![or-split](/img/docs/workflow-state-machine/or-split.png)
* Or-Join: ![or-join](/img/docs/workflow-state-machine/or-join.png)

Workflow can contains And-Split, And-Join, Or-Split and Or-Join. While state machine can only contains Or-Split and Or-Join


So the final table to compare between workflow and state machine will be:

| Types                               | Workflow                               | State Machine      |
| ----------------------------------- | :-------------------------:            | :----------------: |
| Can be in > 1 places simultaneously | Yes                                    | No                 |
| Complexity                          | Complex                                | Simple             |
| Image                               | Arrows, circles and squares            | Arrows and circles |
| From                                | >= 1 places                            | = 1 place          |
| To                                  | >= 1 places                            | = 1 place          |
| Contains                            | And-Split, And-Join, Or-Split, Or-Join | Or-Split, Or-Join  |

## Notes

Here are some useful tips:

1. Try to make your model simple
2. Try to split your business logic into small models
3. Try to use directories to manage your models
4. Workflow and state machine are in [Worflow-Net](http://mlwiki.org/index.php/Workflow_Nets/Workflow_Patterns), a sub-class of Petri-Net
