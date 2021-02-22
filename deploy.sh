#!/bin/bash

# pull
cd /home/hoiheart/chukduk
git reset --hard HEAD
git pull

# docker-compose
# echo $REG_TOKEN | docker login ghcr.io -u hoiheart --password-stdin
# docker image prune -f
# docker-compose pull
# docker-compose up -d
