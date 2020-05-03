#!/bin/bash

mkdir ../src
mkdir ../build
mkdir ../public
mkdir ../api
cp index0.html ../public/index.html
cp index0.tsx ../src/index.tsx
cp tsconfig0.json ../tsconfig.json

cd ..
echo "answer for question -  entry point: index.tsx"
yarn init

yarn add react react-dom redux react-redux redux-logger redux-thunk redux-compact \
         typescript @types/react @types/react-dom @types/react-redux @material-ui/core axios
yarn add --dev react-app-rewired react-app-rewire-alias react-scripts swagger-axios-codegen


yarn start

exit 0

