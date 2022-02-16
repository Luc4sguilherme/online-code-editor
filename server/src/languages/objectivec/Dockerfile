FROM ubuntu:20.04

WORKDIR /usr/src/app

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=America/New_York

RUN apt-get update -y
RUN apt-get install build-essential -y
RUN apt-get install gnustep gnustep-devel -y
RUN chmod +wx /usr/share/GNUstep/Makefiles/GNUstep.sh
RUN /usr/share/GNUstep/Makefiles/GNUstep.sh