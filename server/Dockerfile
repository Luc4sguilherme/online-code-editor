FROM ubuntu:20.04

RUN apt-get update -y
RUN apt install curl -y

RUN curl -fsSL https://get.docker.com/ | sh

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]

EXPOSE 3333