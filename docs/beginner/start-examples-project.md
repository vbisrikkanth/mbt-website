---
id: start-examples-project
title: Start Examples Project
keywords:
  - examples
  - demo
  - docker
  - docker compose
description: Download examples project and start to see how it works
---

There are 3 ways to run the example project. You can find all of them in the
home page of the [project](https://github.com/tienvx/mbt-examples). I will not
repeat all of them here, but will show you the easiest way - through docker
compose:

## Dependencies

There are 3 dependencies need to be install:
* [git](https://git-scm.com/downloads)
* [docker](https://docs.docker.com/install/)
* [docker-compose](https://docs.docker.com/compose/install/)

## Start

Then run these commands:
```bash
git clone git@github.com:tienvx/mbt-examples.git
cd mbt-examples
docker-compose up --scale worker=2
# Then open another terminal, run this command once:
./docker/install.sh
```

That's it. You can open browser and navigate to http://localhost/ then register
new user. The first user will have role admin. Other users are normal users.

## Next Steps

- Create [tasks](http://localhost/#/tasks)
- Manage [bugs](http://localhost/#/bugs)
- View [dashboard](http://localhost/#/)
