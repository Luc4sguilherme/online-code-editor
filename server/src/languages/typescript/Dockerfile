FROM node:16

WORKDIR /usr/src/app

RUN chown -R node /usr/src/app
RUN npm init -y
RUN npm install
RUN npm install typescript -g
RUN npm install ts-node -g

USER node
