FROM node:16-slim

RUN apt-get update
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN apt-get install -y libssl-dev libfontconfig1-dev
RUN npm install -g phantomjs-prebuilt

WORKDIR /usr/src/app
