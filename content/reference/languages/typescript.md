---
title: TypeScript
summary: "TypeScript Environment, Packages, and Testing Frameworks"
tags:
  - typescript
  - ts
  - language
---

# TypeScript

## Environment

Qualified supports the following TypeScript environments:

- TypeScript 2.4 with Node 8 (Mocha)
- TypeScript 2.4 with headless Chrome (Karma+Mocha)
- TypeScript 3.3 with Node 10 (Mocha, Jest)
- TypeScript 3.8 with Node 12 (Mocha, Jest)

### How different TypeScript code sections are treated

For TypeScript 2.4, the solution and optional setup/preloaded code are combined into one "solution" file. The test fixture is its own file.

For TypeScript 3.3/3.8, the optional setup/preloaded code is written to a separate file that can be imported with path: "./preloaded".

## Timeout

The sandbox environment will timeout the code within 12 seconds.


## Packages

### TypeScript 2.4

TypeScript 2.4 supports two environments: Node 8 with Mocha and headless Chrome with Karma+Mocha.

#### Node 8

<!-- lodash is installed, but reported not to work for some reason -->

- `chai`: `3.5.0`
- `mocha`: `3.5.3`
- `typescript`: `2.4.2`

#### Headless Chrome

Mainly used for Angular 4 challenges.

- `@angular/common`: `4.4.6`
- `@angular/compiler`: `4.4.6`
- `@angular/core`: `4.4.6`
- `@angular/forms`: `4.4.6`
- `@angular/http`: `4.4.6`
- `@angular/platform-browser`: `4.4.6`
- `@angular/platform-browser-dynamic`: `4.4.6`
- `@angular/router`: `4.4.6`
- `chai`: `3.5.0`
- `core-js`: `2.5.1`
- `karma`: `1.7.1`
- `karma-chai`: `0.1.0`
- `karma-mocha`: `1.3.0`
- `karma-typescript`: `3.0.8`
- `karma-typescript-angular2-transform`: `1.0.2`
- `mocha`: `3.5.3`
- `puppeteer`: `0.12.0`
- `rxjs`: `5.4.3`
- `typescript`: `2.4.2`
- `zone.js`: `0.8.18`

### TypeScript 3.3

TypeScript 3.3 (Node 10) has multiple presets for different kinds of challenges.

#### Default (no preset)

- `axios`: `0.18.0`
- `chai`: `4.2.0`
- `fast-check`: `1.10.1`
- `jest`: `24.7.1`
- `lodash`: `4.17.11`
- `mocha`: `5.2.0`
- `ts-jest`: `24.0.2`
- `ts-node`: `8.0.2`
- `typescript`: `3.3.3`

#### React (`react` preset)

- `@testing-library/dom`: `5.2.1`
- `@testing-library/react-hooks`: `1.0.2`
- `@testing-library/react`: `8.0.1`
- `@testing-library/user-event`: `4.1.0`
- `axios`: `0.18.0`
- `enzyme-adapter-react-16`: `1.12.1`
- `enzyme-to-json`: `3.3.5`
- `enzyme`: `3.9.0`
- `escape-html`: `1.0.3`
- `immer`: `3.1.3`
- `jest-dom`: `3.5.0`
- `jest-environment-jsdom`: `24.7.1`
- `jest-snapshot`: `24.7.1`
- `jest`: `24.7.1`
- `lodash`: `4.17.11`
- `mobx`: `5.9.4`
- `prop-types`: `15.7.2`
- `ramda`: `0.26.1`
- `react-dom`: `16.8.6`
- `react-mobx`: `0.0.4`
- `react-redux`: `7.0.3`
- `react-test-renderer`: `16.8.6`
- `react`: `16.8.6`
- `rebass`: `3.1.2`
- `redux`: `4.0.1`
- `sinon`: `7.3.2`
- `styled-components`: `4.3.2`
- `styled-system`: `5.0.16`
- `ts-jest`: `24.0.2`
- `typescript`: `3.3.4000`
- `use-immer`: `0.3.3`

#### Angular (`angular` preset)

> Only available in [Project Code Challenges](/reference/features/challenges/multi-file-code).

- `@angular-builders/jest`: `8.0.4`
- `@angular/animations`: `8.1.3`
- `@angular/common`: `8.1.3`
- `@angular/compiler`: `8.1.3`
- `@angular/core`: `8.1.3`
- `@angular/forms`: `8.1.3`
- `@angular/platform-browser-dynamic`: `8.1.3`
- `@angular/platform-browser`: `8.1.3`
- `@angular/router`: `8.1.3`
- `core-js`: `3.1.4`
- `jest-environment-jsdom-thirteen`: `1.0.1`
- `jest-preset-angular`: `7.1.1`
- `jest`: `24.8.0`
- `rxjs`: `6.4.0`
- `ts-jest`: `24.0.2`
- `ts-node`: `7.0.1`
- `tslib`: `1.10.0`
- `typescript`: `3.3.4000`
- `zone.js`: `0.9.1`

### TypeScript 3.8

TypeScript 3.8 (Node 12) has multiple presets for different kinds of challenges.

#### Default (no preset)

- `axios`: `0.19.2`
- `chai`: `4.2.0`
- `fast-check`: `1.23.0`
- `jest`: `25.2.3`
- `lodash`: `4.17.15`
- `mocha`: `7.1.1`
- `rxjs`: `6.5.5`
- `ts-jest`: `25.2.1`
- `ts-node`: `8.8.1`
- `typescript`: `3.8.3`

#### React (`react` preset)

- `@testing-library/dom`: `7.1.1`
- `@testing-library/jest-dom`: `5.3.0`
- `@testing-library/react`: `10.0.1`
- `@testing-library/react-hooks`: `3.2.1`
- `@testing-library/user-event`: `10.0.0`
- `axios`: `0.19.2`
- `enzyme`: `3.11.0`
- `enzyme-adapter-react-16`: `1.15.2`
- `enzyme-to-json`: `3.4.4`
- `escape-html`: `1.0.3`
- `immer`: `6.0.2`
- `jest`: `25.2.3`
- `jest-environment-jsdom`: `25.2.3`
- `jest-snapshot`: `25.2.3`
- `lodash`: `4.17.15`
- `mobx`: `5.15.4`
- `mobx-react`: `6.1.8`
- `prop-types`: `15.7.2`
- `ramda`: `0.27.0`
- `react`: `16.13.1`
- `react-dom`: `16.13.1`
- `react-is`: `16.13.1`
- `react-redux`: `7.2.0`
- `react-test-renderer`: `16.13.1`
- `rebass`: `4.0.7`
- `redux`: `4.0.5`
- `rxjs`: `6.5.5`
- `sinon`: `9.0.1`
- `styled-components`: `5.0.1`
- `styled-system`: `5.1.5`
- `ts-jest`: `25.2.1`
- `typescript`: `3.8.3`
- `use-immer`: `0.3.5`

#### Angular (`angular` preset)

> Only available in [Project Code Challenges](/reference/features/challenges/multi-file-code).

- `@angular-builders/jest`: `9.0.0`
- `@angular/animations`: `8.1.3`
- `@angular/common`: `8.1.3`
- `@angular/compiler`: `8.1.3`
- `@angular/core`: `8.1.3`
- `@angular/forms`: `8.1.3`
- `@angular/platform-browser`: `8.1.3`
- `@angular/platform-browser-dynamic`: `8.1.3`
- `@angular/router`: `8.1.3`
- `core-js`: `3.6.4`
- `jest`: `25.2.3`
- `jest-environment-jsdom-thirteen`: `1.0.1`
- `jest-preset-angular`: `8.1.2`
- `rxjs`: `6.5.5`
- `ts-jest`: `25.2.1`
- `ts-node`: `8.8.1`
- `tslib`: `1.11.1`
- `typescript`: `3.8.3`
- `zone.js`: `0.9.1`


## Testing

Our TypeScript environment supports the following testing frameworks:

- [typescript/mocha-bdd](/reference/languages/typescript/mocha-bdd)
- [typescript/mocha-tdd](/reference/languages/typescript/mocha-tdd)
- [typescript/karma-bdd](/reference/languages/typescript/karma-bdd)
- [typescript/karma-tdd](/reference/languages/typescript/karma-tdd)
- [typescript/jest](/reference/languages/typescript/jest)
