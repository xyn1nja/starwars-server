# starwars-server

**Docker and Docker Compose are required to be installed on your machine to run the server and tests. If you do not have them installed, please refer to the steps in the following links to install them on your respective operating systems:**

> Install Docker: https://docs.docker.com/get-docker/
>
> Install Docker Compose: https://docs.docker.com/compose/install/

---

### Starting the server

_In the terminal, run this command:_

`docker compose up`

### Running tests with docker

_In a separate terminal, run the following commands:_

1. `docker build -t node-docker --target test .`
   <br />
2. `docker run -it --rm -p 8000:8000 node-docker`

### API endpoint

`/information`
