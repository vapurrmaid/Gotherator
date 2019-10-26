FROM node:current-alpine
EXPOSE 80

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .
