#!/bin/bash

set -e

if [ ! -d "$1" ] ; then
  echo "first arg should be path to exercice, for example ./run.sh ./src/1-hello-world"
  exit 1
fi

yarn run tsc -p "$1"
yarn run eslint --ext .ts,.tsx --quiet "$1"
yarn run jest --testMatch "<rootDir>/$1/**/*.test.ts?(x)"
