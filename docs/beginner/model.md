---
id: model
title: Model
keywords:
  - model
  - workflow
  - state machine
description: Take a deep look about model
---

## State & Transition

There are 2 important terminologies we have to know before take a look at model: `place` & `transition`.

Place, is a particular condition that your system under test is in at a specific time. If your system under test is a website, we can define each page as a `place`. For example, home page is a `place`, profile page is a `place`.

Transition, is the process or a period of changing from one state (or `place`) to another. Similar to above, let take a look at a website. A transition can be an action of clicking a button, click on a link, or type a text box.

## What is model

Model is just a combination of states and conditions in order to describe a business logic. Depend on the type, a `model` can be used to describe simple or very complex logic.

## Type

There are 2 types of model: workflow & state machine.

- State machine: the system under test cannot be in more than one place simultaneously.
- Workflow: the system under test can be in more than one places simultaneously.

If the system under test is a website, we can define a model with type `state machine` with places are pages, and transitions are actions (click button, fill text box). We can't simply at 2 pages (e.g. home page and profile page) at the same time.

Still a website, but this time we will create a model for a contact form with 4 fields: name, email, subject and message. At the same time, we can have more than 1 field is filled. For example, we can fill name and email because they are required, but leave subject and message empty because they are not required. That model will have type `workflow`.

---

Back to the examples we started early. [mobile_home](http://localhost/#/models/%2Fapi%2Fmodels%2Fmobile_home/show) is an example of a model with type `state machine`.

![mobile_home](/img/docs/getting-started/mobile_home.png)

In this image, there are only arrows and circles. Arrows (with name) are transitions, and circles are places.

[checkout](http://localhost/#/models/%2Fapi%2Fmodels%2Fcheckout/show) is an example of a model with type `workflow`.

![checkout](/img/docs/getting-started/checkout.png)

In this image, there are arrows, circles and squares. We can ignore arrows. Squares are transitions, and circles are places.

---

To summarize, let take a look at this table:

| Types                                         | Workflow                    | State Machine      |
| --------------------------------------------- | :-------------------------: | :----------------: |
| Can be in more than one places simultaneously | Yes                         | No                 |
| Complexity                                    | Complex                     | Simple             |
| Image                                         | Arrows, circles and squares | Arrows and circles |
