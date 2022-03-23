FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=America/New_York

RUN apt-get update
RUN apt-get install -y --no-install-recommends octave

WORKDIR /usr/src/app