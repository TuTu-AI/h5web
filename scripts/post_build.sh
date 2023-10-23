#!/usr/bin/env bash

env=$(echo $ENV)

echo Build completed on `date`

echo Uploading artifact...

echo "dev env post_build!"
docker push 693541643703.dkr.ecr.cn-northwest-1.amazonaws.com.cn/h5web:latest
