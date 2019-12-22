---
id: deploy
title: Deploy
keywords:
  - deploy
  - docker swarm
  - kubernetes
description: Deploy code to a cloud service
---

## Kubernetes

In this [page](https://github.com/tienvx/mbt-examples#with-kubernetes) I already
show the step by step deploy example project to a Kubernetes cluster. In short,
on a configured Kubernetes cluster, we can run these commands:

```
$ git clone git@github.com:tienvx/mbt-examples.git
$ cd mbt-examples
$ kubectl apply -f ./kubernetes/moon.yaml
$ kubectl create namespace mbt
$ kubectl apply -f ./kubernetes/ingress.yaml
$ kubectl apply -f ./kubernetes/hub.yaml
$ kubectl apply -f ./kubernetes/services
$ ./kubernetes/install.sh
```

## Docker Swarm (to be updated)

There are 2 options:
* With Selenoid: Selenoid does not support Docker Swarm, so we can't deploy to it
* Without Selenoid: We can deploy to Docker Swarm. To do that, we can run a simple
command `docker stack deploy -c docker-compose.yml mbt`
