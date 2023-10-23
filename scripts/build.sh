#!/usr/bin/env bash

env=$(echo $ENV)

  echo "dev env build!"
  docker build -t h5web .
  docker tag h5web:latest 693541643703.dkr.ecr.cn-northwest-1.amazonaws.com.cn/h5web:latest
