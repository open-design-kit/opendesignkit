#! /bin/bash

set -e

if ! which bundler > /dev/null; then
  gem install bundler
fi

bundle install
