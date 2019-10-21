---
id: start-examples-project
title: Start Examples Project
keywords:
  - examples
  - demo
  - docker
description: Download examples project and start to see how it works
---

## Dependencies

There are 3 dependencies need to be install:
* [git](https://git-scm.com/downloads)
* [docker](https://docs.docker.com/install/)
* [docker-compose](https://docs.docker.com/compose/install/)

## Start

Then run these commands:
```bash
git clone git@github.com:tienvx/mbt-examples.git
cd mbt-examples/docker
docker-compose up --scale worker=2
# Then open another terminal, run this command once:
./install.sh
```

## Next Steps

- Create [tasks](http://localhost/#/tasks)
- Manage [bugs](http://localhost/#/bugs)
- View [dashboard](http://localhost/#/)
