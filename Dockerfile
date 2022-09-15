FROM node:14.17.1
USER root

WORKDIR /client
COPY . /client

RUN npm install
COPY . ./

RUN npm run build
