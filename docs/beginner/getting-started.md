---
id: getting-started
title: Getting Started
keywords:
  - ui
  - examples
description: Get familiar with UI of MBT Bundle
---

## Login

![login](/img/docs/getting-started/login.png)

You can navigate to http://localhost and fill with default credentials (admin/admin). You can also register new user, but new user will not have permissions like:
- Manage users
- Manage failed messages

---

## Model

We create some example models for you to play around. Feel free to go to http://localhost/#/models to see them.

![models](/img/docs/getting-started/models.png)

If you click on a model's image, you can see the diagram like this:

![mobile_home](/img/docs/getting-started/mobile_home.png)

Don't worry if you don't understand it. We will describe it in [Model](model). Keep in mind that each model describe business logic one way or another.

---

## Task

Since we define some models for you, you don't have to create it for now. Insteads, let start testing it. To test a model, we have to create a task. Let go to http://localhost/#/tasks/create to create a new task.

![create](/img/docs/getting-started/create.png)

After fill all required fields and click `Save`, you will be redirect to [tasks](http://localhost/#/tasks)

You can create multiple tasks at a time, by navigate to [bulk create](http://localhost/#/tasks/bulk-create-by-models) and fill all required fields. The different is you can select multiple models. After click `Save`, multiple tasks will be created.

![bulk-create-by-models](/img/docs/getting-started/bulk-create-by-models.png)

A task can take some time to be `completed`. While it is being processed, the status will be `in-progress`.

![tasks](/img/docs/getting-started/tasks.png)

## Bug

Bug is result after processing a task. A bug can have bug message, steps and screenshots so you can verify the bug. It have title so you can change it to make it distinct from other bug. All bugs will be listed at http://localhost/#/bugs

![bugs](/img/docs/getting-started/bugs.png)

## Dashboard

[Dashboard](http://localhost/#/) is where you can manage status of the system. From here you can quickly know how many tasks, bugs, models, how many tasks are in progress, how many bugs closed... There are 2 charts for number of tasks and bugs in the last 7 days.

![dashboard](/img/docs/getting-started/dashboard.png)

## User

If you are admin (first user), you will have permission to manage users in the system. To create a new user, simply provide user name, password to the form below:

![user](/img/docs/getting-started/user.png)

All users will be listed in http://localhost/#/users

![users](/img/docs/getting-started/users.png)

## Failed Message

As the same with [users](http://localhost/#/users), you will need admin permission to access [failed messages](http://localhost/#/failed_messages). Every software have bugs, and this tool will not be exception. While processing tasks, there will be something to stop it from completed. All of those things will be listed in [failed messages](http://localhost/#/failed_messages).

![failed messages](/img/docs/getting-started/failed-messages.png)

You can either retry it, or remove it. But keep in mind that, if you remove it, any `in-progress` tasks will be affected.

![failed message](/img/docs/getting-started/failed-message.png)
