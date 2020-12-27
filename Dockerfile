FROM node:lts-alpine

WORKDIR src/app/

COPY package*.json ./

RUN npm install

COPY . .
