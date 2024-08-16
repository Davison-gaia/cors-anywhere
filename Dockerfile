FROM node:20

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]
