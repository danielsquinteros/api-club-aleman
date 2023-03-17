FROM node:18-alpine

RUN mkdir -p /usr/src/app/production

WORKDIR /usr/src/app/production

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . ./

EXPOSE 3000

CMD [ "node", "index.js" ]