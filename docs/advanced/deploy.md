---
id: deploy
title: Deploy
keywords:
  - deploy
  - docker swarm
  - kubernetes
description: Deploy code to a cloud service
---

## Docker Swarm (to be updated)

### On manager node
```
$ docker swarm init
$ # docker swarm init --advertise-addr vboxnet0
$ docker-machine create worker-node
$ docker swarm join-token worker
$ env MBT_VERSION=v1.10.0 docker stack deploy -c docker-compose.yml mbt
$ docker service scale mbt_worker=4
```

### On worker node
```
$ docker-machine ssh worker-node
$ docker swarm join --token TOKEN IP:PORT
```

Note: The stack is not working as expected because of invalid mount config and links in worker-node.

These links may help to fix invalid mount config:
* https://blog.dahanne.net/2017/11/20/docker-swarm-and-nfs-volumes/
* https://www.reddit.com/r/docker/comments/7p069n/docker_swarm_remote_volumes_best_practices/

Useful commands:
```
$ docker stack ls
$ docker stack ps mbt
$ docker stack services mbt
$ docker service logs mbt_api
$ docker-machine ssh worker-node
$ docker stack rm mbt
$ docker swarm leave
$ docker-machine ls
$ docker-machine rm worker-node
$ docker swarm leave --force
```

## Kubernetes (to be updated)

```
$ env MBT_VERSION=v1.10.0 docker stack deploy --orchestrator=kubernetes -c docker-compose.yml mbt
```

Note: We need to install compose-on-kubernetes first
http://collabnix.com/a-first-look-at-compose-on-kubernetes-for-minikube/

Useful commands:
```
$ minikube start
$ minikube status
$ minikube delete
$ kubectl get nodes
$ kubectl create namespace compose
$ kubectl -n kube-system create serviceaccount tiller
$ kubectl -n kube-system create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount kube-system:tiller
$ helm init --service-account tiller
$ helm version
$ helm install --name etcd-operator stable/etcd-operator --namespace compose
$ kubectl api-versions| grep compose
$ minikube service list
$ docker stack ls --orchestrator=kubernetes
$ kubectl describe pod podname
$ kubectl get deployment
$ kubectl get pods
$ kubectl get services
$ docker stack rm mbt --orchestrator=kubernetes
```

Here is how to install kubectl, minikube, helm, compose-on-kubernetes:
```
$ sudo snap install kubectl --classic
$ sudo snap install kubeadm --classic
$ sudo snap install kubelet --classic

$ curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 ; chmod +x minikube ; sudo cp minikube /usr/local/bin ; rm minikube
$ minikube start

$ sudo snap install helm --classic

$ wget https://github.com/docker/compose-on-kubernetes/releases/download/v0.4.21/installer-linux
$ chmod a+x installer-linux
$ ./installer-linux -namespace=compose -uninstall
$ ./installer-linux -namespace=compose -etcd-servers=http://compose-etcd-client:2379 -tag=v0.4.21
```
