# Adobe Express Add-On Testing (TypeScript, React, Jest)

## About

This is a minimal example of an Adobe Express add-on built with TypeScript and React. It uses Jest for unit testing. It
is intended to demonstrate the difficulties with testing Adobe Express add-ons of this nature. It also includes the
necessary setup for Testing Library and MSW.

## Tools

- HTML
- CSS
- React
- TypeScript
- Jest

## Setup

1. To install the dependencies, run `npm install`.
2. To build the application, run `npm run build`.
3. To start the application, run `npm run start`.
4. To run the tests, run `npm run test`.

## Issues

When running the tests, the following error is thrown:

```
Test suite failed to run

    Cannot find module 'https://new.express.adobe.com/static/add-on-sdk/sdk.js' from 'src/lib/example.ts'

    Require stack:
      src/lib/example.ts
      src/lib/example.test.ts

    > 1 | import { RenditionFormat } from 'https://new.express.adobe.com/static/add-on-sdk/sdk.js';
        | ^
      2 |
      3 | export function getExtensionForFormat(
      4 |   format: RenditionFormat

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:427:11)
      at Object.<anonymous> (src/lib/example.ts:1:1)
      at Object.<anonymous> (src/lib/example.test.ts:1:1)

```
