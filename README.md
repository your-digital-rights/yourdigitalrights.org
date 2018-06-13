[![CircleCI](https://circleci.com/gh/opt-out-eu/opt-out.svg?style=svg)](https://circleci.com/gh/opt-out-eu/opt-out)

# Installation

Requires Node.js >= v8

`npm install`

# Running locally

`npm run dev`

# Running tests

`npm test`

# Deployment

To deploy you must be part of the opt-out now.sh team and and have [now.sh installed](https://zeit.co/download). Ensure you are acting under the opt-out team by running `now switch`.

## Development deployment

Running `npm run deploy:dev` will deploy to a temporary url

## Staging

`npm run alias:staging` will alias the latest development deployment to http://opt-out-eu.now.sh/

## Production

`npm run alias:prod` will alias the latest development deployment to http://opt-out.eu/
