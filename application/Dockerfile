#!/usr/bin/env bash
FROM --platform=linux/amd64 node:16
# the notation above is about to use the base image from node
# main directory from NodeJs
WORKDIR /usr/src/app
# copy all files from main directory 
COPY * ./
# install express from node - https://www.npmjs.com/package/express
RUN npm install express
# install ip from node - https://www.npmjs.com/package/ip
RUN npm install ip
COPY . .
# expose the port 80 to call the service
EXPOSE 80
CMD [ "node", "index.js" ]