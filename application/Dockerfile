# the notation above is about to use the base image from node
FROM --platform=linux/amd64 node:lts-buster-slim

# install curl tool
RUN apt update \ 
    && apt install sudo -y \
    && apt install curl -y \
    && sudo apt install libcap2-bin -y \
    && sudo setcap cap_net_bind_service=+ep /usr/local/bin/node \
    && sudo npm install pm2 -g

# main directory from NodeJs
WORKDIR /usr/src/app
RUN chmod 777 -R /usr/src/app

# copy all files from main directory 
COPY * ./

# switch do another user non-root privilege
ARG USERNAME=nodejs
ARG USER_UID=1010
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME 

# change the permission of folder
RUN chown -R nodejs:nodejs /usr/src/app

# [Optional] Set the default user. Omit if you want to keep the default as root.
USER $USERNAME

# install express from node - https://www.npmjs.com/package/express
RUN npm install express
# install ip from node - https://www.npmjs.com/package/ip
RUN npm install ip
COPY . .

# expose the port 80 to call the service
EXPOSE 3000
# initialize node
CMD [ "node", "index.js" ]