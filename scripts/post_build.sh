#!/usr/bin/env bash

env=$(echo $ENV)

echo Build completed on `date`

echo Uploading artifact...

if [ "$env" = "dev" ]; then

  echo "dev env post_build!"
	docker push 693541643703.dkr.ecr.cn-northwest-1.amazonaws.com.cn/h5web:latest
fi

if [ "$env" = "prod" ]; then
  echo "prod env post_build!"
	docker push 693541643703.dkr.ecr.cn-northwest-1.amazonaws.com.cn/tutu-backend-bff-prod:latest
fi
