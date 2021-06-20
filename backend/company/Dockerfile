FROM node:14-alpine

RUN mkdir -p /app/company
WORKDIR /app/company
ADD package.json yarn.lock /app/company/
RUN yarn install --pure-lockfile
ADD . /app/company