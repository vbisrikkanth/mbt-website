---
id: task-and-bug
title: Task and Bug
keywords:
  - task
  - bug
description: Task is created to test model, and bug are the result of that action
---

## Task

To test a model (or a business logic), you need to create a task with these information:

1. Title: a short description of the task, to tell the difference between 2 tasks
2. Model: which model you want to test
3. Generator: way to travel through the model
4. Generator Options: additional information to generator
5. Reducer: when a bug is captured, how we can reduce the reproduce steps
6. Reporters: Should we report bug to external places
7. Capture Screenshots: Should we capture screenshots for the bug we found (for testing UI only)

Created task will be listed in [tasks](http://localhost/#/tasks) page:
![tasks](/img/docs/getting-started/tasks.png)

### Generator

There are 4 built-in generators. Each generator generate test case in a different way:

1. Random: select the next transition randomly
2. Probability: select the next transition based on the probability of the transition
3. All Places: select the next transition in order to cover all places as fast as possible
4. All Transitions: select the next transition in order to cover all transitions as fast as possible

### Generator options

In additional, we can provide more information to the generator while creating tasks:

1. Max path length: how many steps (for random and probability generators) generated before we can stop generator from generate more steps while we didn't catch a bug yet
2. Transition coverage (for random generator): how many percent of transitions covered before we can stop the generator
3. Place coverage (for random generator): how many percent of places covered before we can stop the generator

### Reducer

When a bug is captured, usually the reproduce steps is so long. There are different ways to reduce it:

1. Random: choose 2 random places in the reproduce path, replace the steps between them by the shortest path, then try to reproduce the bug again, then repeat
2. Loop: choose 2 places in the reproduce path that are exactly the same, remove all steps between them, then try to reproduce the bug again, then repeat
3. Split: divide the reproduce steps by 2 parts, replace the steps between each part by the shortest path, then try to reproduce the bug again, then try again with other parts, then try to divide the reproduce steps into 4, 8, 16... parts
4. Transition: choose a transition and try to remove it from the reproduce steps. This reducer only available for `workflow` type

### Reporter

Reporter is the way to report the bug. There are 2 built-in reporters:

1. Email: report the bug to an email address
2. Slack: report the bug to a room in Slack

We need to configure before we can use them.

## Bug

Anything that prevent the `generator` to complete walking through the model can be captured and reported as a bug. When a bug is found, we can see these information:

![bug](/img/docs/getting-started/bugs.png)

1. Title: you can change the default title of the bug, so that it can tell what is the real problem
2. Status: can be
    1. New
    2. Reducing
    3. Reduced
    4. Closed
3. Path: Reproduce steps (or path)
4. Length: Number of steps in the reproduce path
5. Task: Which task this bug belong to
6. Bug Message: The real error that prevent the generator to complete its job
7. Messages count
8. Created at
9. Updated at

### Status

- New: when a bug is created, it's not reduced by a `reducer` yet
- Reducing: it's being handled by a `reducer`
- Reduced: `reducer` has finish its job
- Closed: when we think this bug is not valid any more, we can close this bug. The closed bug can be reopen again to check if it's still valid or not.

### Tips

- If you want reproduce steps to be shorter, go to bug's details page, and click `Reduce` action
- If you are not sure the bug is still valid or not, go to bug's details page, click `Close` action to close it, then wait for the page to be reload, the click `Test` action. If the bug is re-opened again, it's still valid
- If the bug is still closed, there are 2 cases:
  - The bug is not valid anymore
  - There is a new different bug at http://localhost/#/bugs
