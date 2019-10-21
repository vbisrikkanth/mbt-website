---
id: qa
title: Questions and Answers
keywords:
  - question
  - answer
description: Some questions and aswers about MBT Bundle
---

1. Q: Do I need programming skill to use it? A: Yes (PHP)
2. Q: Do it have drag & drop feature? A: No, but we have a tool to generate model
3. Q: How do I create my models? A: Use our tool to describe the feature you want to test. Then copy and paste in a YAML files (a user-friendly
text format)
4. Q: How do I test my models? A: You have to create tasks (and give enough information to the task so that it can know
how to execute them e.g. model, generator, reducer, reporter)
5. Q: How do I report the bug? A: The tool will automatically report the bug to 3rd party softwares (only Slack and Email for now)
6. Q: Great, I reported the bug to developer, and he said it's fixed, how do I test it? A: You have to do 2 things:
    1. Go to the bug, click 'Test' action
    2. Create bulk tasks to do exploration test (choose random generator, choose models may related to the bug that has
    been fixed)
7. Q: I have a project, with a lot of features, with many complex logic to test, where can I begin? A: Try to isolate
into small logic, each logic can be describe in multiple models. Don't worry about performance, this tool is built with
scalable in mind
8. Q: What if I reported the bug, but developer said it's not a bug? A: Try these:
    1. Make sure your code (models, subjects) work okay
    2. This tool does not know the requirements as well as your team does, make sure to check with your team whether
    it's a bug, or a feature. If it's a feature, make sure your code (models, subjects) is updated
    3. Try to replicate the bug by yourself
