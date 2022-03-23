FROM ubuntu:20.04

RUN apt-get update
RUN apt-get install -y libnspr4 wget unzip
RUN mkdir -p /opt/js

WORKDIR /opt/js

RUN wget -O /opt/js/js.zip https://ftp.mozilla.org/pub/firefox/releases/58.0/jsshell/jsshell-linux-x86_64.zip
RUN unzip js.zip
RUN bash -c "ln -s /opt/js/js /usr/local/bin/"

WORKDIR /usr/src/app