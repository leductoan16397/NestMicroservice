FROM node:14-alpine

RUN mkdir -p /app/search
WORKDIR /app/search
ADD package.json yarn.lock /app/search/
RUN yarn install --pure-lockfile
ADD . /app/search