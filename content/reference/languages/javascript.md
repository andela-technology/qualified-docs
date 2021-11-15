---
title: JavaScript
summary: "JavaScript Environment, Node Packages, and Testing Frameworks"
tags:
  - javascript
  - js
  - language
---

# JavaScript

## Environment

Qualified supports Node 6, 8, 10, and 12.

## Timeout

The sandbox environment will timeout the code within 12 seconds.

## Node Packages

The following packages have been installed:

<!-- TODO organize by type/categories -->

### Node 6

- `axios`: `0.15.3`
- `babel-core`: `6.26.0`
- `babel-preset-env`: `1.6.0`
- `babel-preset-react`: `6.24.1`
- `babel-preset-stage-3`: `6.24.1`
- `bignumber.js`: `4.0.4`
- `bluebird`: `3.5.1`
- `brain`: `0.7.0`
- `canvas`: `1.6.7`
- `chai`: `3.5.0`
- `chai-http`: `3.0.0`
- `chai-spies`: `0.7.1`
- `cheerio`: `0.22.0`
- `enzyme`: `2.9.1`
- `escape-html`: `1.0.3`
- `espower-loader`: `1.2.2`
- `expect`: `1.20.2`
- `express`: `4.16.1`
- `faker`: `3.1.0`
- `ganache-core`: `2.1.0`
- `jsdom`: `10.1.0`
- `lodash`: `4.17.4`
- `mocha`: `3.5.3`
- `moment`: `2.18.1`
- `mongodb`: `2.2.33`
- `mongoose`: `4.10.8`
- `pg`: `7.4.0`
- `power-assert`: `1.5.0`
- `q`: `1.5.0`
- `ramda`: `0.23.0`
- `react`: `15.6.2`
- `react-addons-test-utils`: `15.6.2`
- `react-dom`: `15.6.2`
- `react-redux`: `4.4.8`
- `react-test-renderer`: `15.6.2`
- `redis`: `2.8.0`
- `redux`: `3.7.2`
- `should`: `8.4.0`
- `sinon`: `1.17.7`
- `sqlite3`: `3.1.13`
- `underscore`: `1.8.3`
- `web3`: `1.0.0-beta.34`

### Node 8

- `axios`: `0.15.3`
- `babel-core`: `6.26.0`
- `babel-preset-env`: `1.6.0`
- `babel-preset-react`: `6.24.1`
- `babel-preset-stage-3`: `6.24.1`
- `bignumber.js`: `4.0.4`
- `bluebird`: `3.5.1`
- `brain`: `0.7.0`
- `canvas`: `1.6.7`
- `chai`: `3.5.0`
- `chai-http`: `3.0.0`
- `chai-spies`: `0.7.1`
- `cheerio`: `0.22.0`
- `crypto-js`: `3.1.9-1`
- `enzyme`: `2.9.1`
- `escape-html`: `1.0.3`
- `espower-loader`: `1.2.2`
- `expect`: `1.20.2`
- `express`: `4.16.1`
- `faker`: `3.1.0`
- `jsdom`: `10.1.0`
- `lodash`: `4.17.4`
- `mocha`: `3.5.3`
- `moment`: `2.18.1`
- `mongodb`: `2.2.33`
- `mongoose`: `4.10.8`
- `pg`: `7.4.0`
- `power-assert`: `1.5.0`
- `ramda`: `0.23.0`
- `react`: `15.6.2`
- `react-addons-test-utils`: `15.6.2`
- `react-dom`: `15.6.2`
- `react-redux`: `4.4.8`
- `react-test-renderer`: `15.6.2`
- `redis`: `2.8.0`
- `redux`: `3.7.2`
- `should`: `8.4.0`
- `sinon`: `1.17.7`
- `sqlite3`: `3.1.13`

### Node 10

Since Node 10, we have multiple presets for different kinds of challenges.

#### Default (no preset)

- `@babel/core`: `^7.2.2`
- `@babel/preset-env`: `^7.3.1`
- `@babel/register`: `^7.0.0`
- `@babel/runtime`: `^7.3.1`
- `axios`: `^0.18.0`
- `babel-jest`: `^24.7.1`
- `bcrypt`: `^3.0.7`
- `bignumber.js`: `^8.0.1`
- `body-parser`: `^1.19.0`
- `chai`: `^4.2.0`
- `chai-http`: `^4.2.1`
- `cheerio`: `^1.0.0-rc.2`
- `cookie-parser`: `^1.4.4`
- `escape-html`: `^1.0.3`
- `esm`: `^3.1.3`
- `espower-loader`: `^1.2.2`
- `express`: `^4.16.4`
- `faker`: `^4.1.0`
- `fast-check`: `^1.8.1`
- `jest`: `^24.7.1`
- `jsdom`: `^13.0.0`
- `knex`: `^0.16.3`
- `lodash`: `^4.17.11`
- `mocha`: `^5.2.0`
- `mongodb`: `^3.1.10`
- `mongoose`: `^5.3.14`
- `pg`: `^7.7.1`
- `pg-hstore`: `^2.3.2`
- `power-assert`: `^1.6.1`
- `query-string`: `^6.10.1`
- `ramda`: `^0.26.1`
- `redis`: `^2.8.0`
- `sequelize`: `^4.42.0`
- `sinon`: `^7.1.1`
- `sinon-chai`: `^3.3.0`
- `socket.io`: `^2.2.0`
- `socket.io-client`: `^2.2.0`
- `sqlite3`: `^4.0.4`

#### React (`react` preset)

- `@babel/core`: `7.4.3`
- `@babel/plugin-proposal-class-properties`: `7.4.4`
- `@babel/preset-env`: `7.4.3`
- `@babel/preset-react`: `7.0.0`
- `@babel/runtime`: `7.4.3`
- `@testing-library/dom`: `5.2.1`
- `@testing-library/react`: `8.0.1`
- `@testing-library/react-hooks`: `1.0.2`
- `@testing-library/user-event`: `4.1.0`
- `axios`: `0.18.0`
- `babel-jest`: `24.7.1`
- `classnames`: `2.2.6`
- `cross-fetch`: `3.0.4`
- `enzyme`: `3.10.0`
- `enzyme-adapter-react-16`: `1.15.1`
- `enzyme-to-json`: `3.4.3`
- `escape-html`: `1.0.3`
- `immer`: `3.1.3`
- `jest`: `24.9.0`
- `jest-dom`: `3.5.0`
- `jest-environment-jsdom`: `24.9.0`
- `jest-fetch-mock`: `2.1.2`
- `jest-snapshot`: `24.9.0`
- `marked`: `0.8.0`
- `mobx`: `5.9.4`
- `mobx-react`: `5.4.3`
- `prop-types`: `15.7.2`
- `react`: `16.12.0`
- `react-cookie`: `4.0.3`
- `react-dom`: `16.12.0`
- `react-redux`: `7.0.3`
- `react-router-dom`: `5.1.2`
- `react-test-renderer`: `16.12.0`
- `rebass`: `3.1.2`
- `recompose`: `0.30.0`
- `redux`: `4.0.1`
- `reselect`: `4.0.0`
- `sinon`: `7.3.1`
- `styled-components`: `4.3.2`
- `styled-system`: `5.0.16`
- `use-immer`: `0.3.3`

#### Vue (`vue` preset)

> Only available in [Project Code Challenges](/reference/features/challenges/multi-file-code).

- `@babel/core`: `7.4.4`
- `@babel/plugin-transform-runtime`: `7.4.4`
- `@babel/preset-env`: `7.4.4`
- `@babel/runtime`: `7.4.4`
- `@testing-library/dom`: `5.2.1`
- `@testing-library/vue`: `1.0.3`
- `@vue/test-utils`: `1.0.0-beta.29`
- `axios`: `0.18.0`
- `babel-jest`: `24.8.0`
- `babel-plugin-dynamic-import-node`: `2.2.0`
- `cross-fetch`: `3.0.4`
- `jest`: `24.8.0`
- `jest-dom`: `3.5.0`
- `jest-fetch-mock`: `2.1.2`
- `jest-serializer-vue`: `2.0.2`
- `jest-transform-stub`: `2.0.0`
- `sinon`: `7.3.2`
- `vue`: `2.6.10`
- `vue-jest`: `vuejs/vue-jest#abcaaf2f0cc580d84f36c125110c7320d3f4a6b6`
- `vue-template-compiler`: `2.6.10`
- `vuex`: `3.1.1`

### Node 12

#### Default (no preset)

- `@babel/core`: `7.10.5`
- `@babel/preset-env`: `7.10.4`
- `@babel/register`: `7.10.5`
- `@babel/runtime`: `7.10.5`
- `@codewars/test-compat`: `1.1.0`
- `axios`: `0.19.2`
- `babel-jest`: `26.1.0`
- `bcrypt`: `5.0.0`
- `bignumber.js`: `9.0.0`
- `body-parser`: `1.19.0`
- `chai`: `4.3.4`
- `chai-http`: `4.3.0`
- `cheerio`: `1.0.0-rc.3`
- `cookie-parser`: `1.4.5`
- `cors`: `^2.8.5`
- `dotenv`: `^8.2.0`
- `escape-html`: `1.0.3`
- `esm`: `3.2.25`
- `espower-loader`: `1.2.2`
- `express`: `4.17.1`
- `faker`: `4.1.0`
- `fast-check`: `1.26.0`
- `jest`: `26.1.0`
- `jsdom`: `16.3.0`
- `knex`: `0.21.6`
- `lodash`: `4.17.19`
- `mocha`: `8.3.0`
- `mongodb`: `3.5.9`
- `mongoose`: `5.9.24`
- `nanoid`: `^3.1.20`
- `node-fetch`: `^2.6.1`
- `objection`: `2.2.1`
- `pg`: `8.3.0`
- `pg-hstore`: `2.3.3`
- `pino`: `^6.11.0`
- `pino-http`: `^5.3.0`
- `power-assert`: `1.6.1`
- `query-string`: `6.13.1`
- `ramda`: `0.27.0`
- `redis`: `3.0.2`
- `sequelize`: `6.3.3`
- `sinon`: `9.0.2`
- `sinon-chai`: `3.5.0`
- `socket.io`: `2.3.0`
- `socket.io-client`: `2.3.0`
- `sqlite3`: `5.0.0`
- `supertest`: `^4.0.2`

#### React (`react` preset)

- `@babel/core`: `7.10.5`
- `@babel/plugin-proposal-class-properties`: `7.10.4`
- `@babel/preset-env`: `7.10.4`
- `@babel/preset-react`: `7.10.4`
- `@babel/runtime`: `7.10.5`
- `@testing-library/dom`: `7.21.0`
- `@testing-library/jest-dom`: `^5.11.1`
- `@testing-library/react`: `10.4.7`
- `@testing-library/react-hooks`: `3.3.0`
- `@testing-library/user-event`: `12.0.11`
- `axios`: `0.19.2`
- `babel-jest`: `26.1.0`
- `classnames`: `2.2.6`
- `cross-fetch`: `3.0.5`
- `enzyme`: `3.11.0`
- `enzyme-adapter-react-16`: `1.15.2`
- `enzyme-to-json`: `3.5.0`
- `escape-html`: `1.0.3`
- `immer`: `7.0.5`
- `jest`: `26.1.0`
- `jest-environment-jsdom`: `26.1.0`
- `jest-fetch-mock`: `3.0.3`
- `jest-snapshot`: `26.1.0`
- `marked`: `1.1.1`
- `mobx`: `5.15.4`
- `mobx-react`: `6.2.2`
- `prop-types`: `15.7.2`
- `react`: `16.13.1`
- `react-cookie`: `4.0.3`
- `react-dom`: `16.13.1`
- `react-is`: `^16.13.1`
- `react-redux`: `7.2.0`
- `react-router-dom`: `5.2.0`
- `react-test-renderer`: `16.13.1`
- `rebass`: `4.0.7`
- `recompose`: `0.30.0`
- `redux`: `4.0.5`
- `reselect`: `4.0.0`
- `sinon`: `9.0.2`
- `styled-components`: `5.1.1`
- `styled-system`: `5.1.5`
- `use-immer`: `0.4.0`

#### Vue (`vue` preset)

> Only available in [Project Code Challenges](/reference/features/challenges/multi-file-code).

- `@babel/core`: `7.10.5`
- `@babel/plugin-transform-runtime`: `7.10.5`
- `@babel/preset-env`: `7.10.4`
- `@babel/runtime`: `7.10.5`
- `@testing-library/dom`: `7.21.0`
- `@testing-library/jest-dom`: `^5.11.1`
- `@testing-library/vue`: `5.0.4`
- `@vue/test-utils`: `1.0.3`
- `axios`: `0.19.2`
- `babel-core`: `^7.0.0-bridge.0`
- `babel-jest`: `26.1.0`
- `babel-plugin-dynamic-import-node`: `2.3.3`
- `cross-fetch`: `3.0.5`
- `jest`: `26.1.0`
- `jest-fetch-mock`: `3.0.3`
- `jest-serializer-vue`: `2.0.2`
- `jest-transform-stub`: `2.0.0`
- `sinon`: `9.0.2`
- `vue`: `2.6.11`
- `vue-jest`: `^3.0.6`
- `vue-template-compiler`: `2.6.11`
- `vuex`: `3.5.1`

## Testing

Our JavaScript environment supports the following testing frameworks:

- [javascript/mocha-bdd](/reference/languages/javascript/mocha-bdd)
- [javascript/mocha-tdd](/reference/languages/javascript/mocha-tdd)
- [javascript/karma-bdd](/reference/languages/javascript/karma-bdd)
- [javascript/karma-tdd](/reference/languages/javascript/karma-tdd)
- [javascript/cw-2](/reference/languages/javascript/cw-2)
- [javascript/jest](/reference/languages/javascript/jest)
