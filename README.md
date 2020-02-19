# minerva-control-center-frontend [![pipeline status](https://gitlab.prod.radar.lan/siem-dev/minerva-control-center-frontend/badges/dev/pipeline.svg)](https://gitlab.prod.radar.lan/siem-dev/minerva-control-center-frontend/commits/dev) [![coverage report](https://gitlab.prod.radar.lan/siem-dev/minerva-control-center-frontend/badges/dev/coverage.svg)](https://gitlab.prod.radar.lan/siem-dev/minerva-control-center-frontend/commits/dev) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Minerva's Web UI.

## How to run?

```
yarn install
```

## Available commands

```
lerna run start     # starts a development server in each package and runs the project locally      # when inside the package, use: yarn start 
lerna run build     # builds every package and creates bundle analyzer report                       # when inside the package, use: yarn build
lerna run lint      # runs linters in every package                                                 # when inside the package, use: yarn clean
lerna run clean     # deletes the built files and code coverage reports in every package            # when inside the package, use: yarn clean
yarn test           # runs tests in all packages and provides combined coverage                     # when inside the package, use: yarn test
```
