# starwars-server

### Starting the server

_In the terminal, run this command:_

`docker compose up`

### Running tests with docker

_In a separate terminal, run the following commands:_

`docker build -t node-docker --target test .`
`docker run -it --rm -p 8000:8000 node-docker`
