#!/usr/bin/env bash
FROM --platform=linux/amd64 node:16-slim
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

# switch do another user non-root privilege
ARG USERNAME=nodejs
ARG USER_UID=1010
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME 
# [Optional] Set the default user. Omit if you want to keep the default as root.
USER $USERNAME
# expose the port 80 to call the service
EXPOSE 80
# initialize node
CMD [ "node", "index.js" ]