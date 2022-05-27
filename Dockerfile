FROM node:18.2.0

WORKDIR /starwars-server

COPY package.json /starwars-server

COPY package-lock.json /starwars-server

RUN npm install

COPY . /starwars-server

EXPOSE 5000

CMD ["npm", "start"]