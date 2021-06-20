FROM node:14-alpine

RUN mkdir -p /app/language
WORKDIR /app/language
ADD package.json yarn.lock /app/language/
RUN yarn install --pure-lockfile
ADD . /app/language