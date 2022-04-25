FROM node:16
WORKDIR /usr/src/app
COPY * ../application
RUN npm install express
COPY . .
EXPOSE 80
CMD [ "node", "outro.js" ]