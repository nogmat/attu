#!/bin/sh

# login docker hub
source scripts/login.sh

# prepare environment
source scripts/prepare.sh

command docker buildx build \
  --platform linux/amd64 \
  --tag nogmat/attu:dev \
  --build-arg VERSION=dev \
  --file Dockerfile --push .

command docker buildx rm multiarch
