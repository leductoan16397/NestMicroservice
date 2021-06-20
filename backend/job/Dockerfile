FROM node:14-alpine

RUN mkdir -p /app/job
WORKDIR /app/job
ADD package.json yarn.lock /app/job/
RUN yarn install --pure-lockfile
ADD . /app/job