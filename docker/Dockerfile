# docker build . -t eduardods/challenge-ms-plan-tech:latest
# docker push eduardods/challenge-ms-plan-tech:latest
FROM node:16
WORKDIR /usr/src/app
COPY * ../application
RUN npm install express
RUN npm install ip
COPY . .
EXPOSE 80
CMD [ "node", "outro.js" ]