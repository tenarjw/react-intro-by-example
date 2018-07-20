1. Instalacja yarn - zob. skrypt init
2. Konfiguracja  package.json - zob. package.txt
3. konfiguracja webpack.config.js
4. konfiguracja tsconfig.json

w miejsce:

import React from 'react';

ma być:

import * as  React from 'react'; 



webpack: ts_loader
do package.json:

 "scripts": {
    "build": "webpack -p",
    "start": "webpack-dev-server -d --content-base ./public"
  },
yarn add typescript
yarn add webpack
yarn add webpack-dev-server
yarn add webpack-cli -D
yarn add ts-loader

