FROM node:14-alpine

RUN mkdir -p /app/source
WORKDIR /app/source
ADD package.json yarn.lock /app/source/
RUN yarn install --pure-lockfile
ADD . /app/source