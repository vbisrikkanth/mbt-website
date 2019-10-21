---
id: mbt-bundle
title: Introduce to MBT Bundle
keywords:
  - mbt bundle
  - model-based testing tool
  - symfony
  - reactjs
  - api platform
description: Explain what is MBT Bundle in what/why/how format
---

## What/why/how

### What

1. It's set of tools to help testers test a software
2. It use Model-Based Testing technique
3. It's built on top of: Symfony, API Platform, ReactJS

### Why

1. Allow to test early (test specification)
2. Save test case maintenance cost
3. Focus on business logic instead of writing test cases (writing models instead)
4. Allow to retest (when a bug is fixed)
5. Allow to regression test (when a new version of system under test is released)
6. Allow to exploration test (to find new bugs)
7. Platform independent (can test UI, REST API, mobile)

### How

1. Tester create **model** in YAML format
2. Tester create **subject** in PHP to interact with system under test
3. Tester create **task** to tell MBT Bundle to start testing a model
4. MBT Bundle will use **generator** to generate test case (and execute it)
5. When a **bug** is found, MBT Bundle will use **reducer** to reduce the reproduce steps
6. When the reproduce steps of the bug is reduced, MBT Bundle will use **reporter** to report the bug to the notification system

### Who

1. Tester with programing skill, ony PHP is required

---

## Compare

| Testing                      | Traditional automation | MBT Bundle  |
| ---------------------------- | :--------------------: | :---------: |
| Define test case             | step by step           | model       |
| Maintain test case           | more effort            | less effort |
| Able to find new bugs        | no                     | yes         |
| Reduce bug's reproduce steps | not available          | yes         |
| Report bug                   | depend on tool         | yes         |
| Need programming skill       | depend on tool         | yes         |

## References

MBT Bundle is inspired by these 2 slides:
- [Model-Based Testing](http://testoptimal.com/ref/starwest-2006-mbt-tutorial.pdf)
- [Graph Theory Techniques in Model-Based Testing](http://testoptimal.com/ref/GraphTheory%20Techniques%20In%20Model-Based%20Testing.pdf)
