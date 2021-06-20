FROM node:14-alpine

RUN mkdir -p /app/auth
WORKDIR /app/auth
ADD package.json yarn.lock /app/auth/
RUN yarn install --pure-lockfile
ADD . /app/auth