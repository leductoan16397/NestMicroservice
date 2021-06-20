FROM node:14-alpine

RUN mkdir -p /app/permission
WORKDIR /app/permission
ADD package.json yarn.lock /app/permission/
RUN yarn install --pure-lockfile
ADD . /app/permission