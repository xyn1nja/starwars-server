FROM node:18.2.0 as base

WORKDIR /starwars-server

COPY package.json /starwars-server

COPY package-lock.json /starwars-server

FROM base as test
RUN npm install
COPY . /starwars-server
CMD ["npm", "test"]

FROM base as dev
RUN npm install
COPY . /starwars-server
CMD ["npm", "start"]