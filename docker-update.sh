#! /bin/bash

set -e

docker-compose build
docker-compose run --rm app bash update.sh
