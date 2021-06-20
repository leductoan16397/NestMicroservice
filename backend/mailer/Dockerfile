FROM node:14-alpine

RUN mkdir -p /app/mailer
WORKDIR /app/mailer
ADD package.json yarn.lock /app/mailer/
RUN yarn install --pure-lockfile
ADD . /app/mailer