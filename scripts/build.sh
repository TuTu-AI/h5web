#!/usr/bin/env bash

env=$(echo $ENV)

if [ "$env" = "dev" ]; then
    echo "dev env build!"
    docker build -t h5web .
    docker tag h5web:latest 693541643703.dkr.ecr.cn-northwest-1.amazonaws.com.cn/h5web:latest
fi

if [ "$env" = "prod" ]; then
    echo "prod env build!"
    docker build -t tutu-backend-bff-prod .
    docker tag tutu-backend-bff-prod:latest 693541643703.dkr.ecr.cn-northwest-1.amazonaws.com.cn/tutu-backend-bff-prod:latest
fi
