---
id: ci
title: CI Integration
keywords:
  - ci
  - api
  - token
description: Integrate to CI service
---

## API

We support 3 endpoints so that we can integrate it with CI:

1. Create bulk tasks for all models

```bash
curl 'http://localhost/api/tasks/bulk-create-all' -H 'Content-Type: application/json' -H 'PHP_AUTH_USER: [TOKEN]' --data '{"title":"Bulk Tasks For All Models","generator":"random","generatorOptions":{"maxPathLength":300,"transitionCoverage":100,"placeCoverage":100},"reducer":"loop","takeScreenshots":true,"reporters":[]}'
```

2. Create bulk tasks by model tag(s)

```bash
curl 'http://localhost/api/tasks/bulk-create-by-tags' -H 'Content-Type: application/json' -H 'PHP_AUTH_USER: [TOKEN]' --data '{"title":"Bulk Tasks By Model's Tags","_tags":["shopping cart","checkout","product"],"generator":"random","generatorOptions":{"maxPathLength":300,"transitionCoverage":100,"placeCoverage":100},"reducer":"loop","takeScreenshots":true,"reporters":[]}'
```

3. Create bulk tasks by models

```bash
curl 'http://localhost/api/tasks/bulk-create-by-models' -H 'Content-Type: application/json' -H 'PHP_AUTH_USER: [TOKEN]' --data '{"title":"Bulk Tasks By Models","_models":["/api/models/article","/api/models/pull_request"],"generator":"random","generatorOptions":{"maxPathLength":300,"transitionCoverage":100,"placeCoverage":100},"reducer":"loop","takeScreenshots":true,"reporters":[]}'
```

## Token

* Login to get token

```bash
curl 'http://localhost/mbt-api/login' -H 'Content-Type: application/json' --data '{"username":"admin","password":"admin"}'
```

* By default, token last for 1 hour
