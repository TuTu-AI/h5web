#!/usr/bin/env bash

echo Logging in to Amazon ECR...

aws --version

aws ecr get-login-password --region cn-northwest-1 | docker login --username AWS --password-stdin 693541643703.dkr.ecr.cn-northwest-1.amazonaws.com.cn
