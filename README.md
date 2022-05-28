# starwars-server

### Starting the server

_In the terminal, run this command:_

`docker compose up`

### Running tests with docker

_In a separate terminal, run the following commands:_

1. `docker build -t node-docker --target test .`
   <br />
2. `docker run -it --rm -p 8000:8000 node-docker`
