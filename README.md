# EvmosJS

NOTE: repo archived, all related code moved under Tharsis org on github -> [evmosjs](https://github.com/tharsis/evmosjs)

A javascript library to interact with the evmos blockchain.

## Requirements

- Node v15.8.0

## Installation

```sh
yarn add @hanchon/evmosjs
```

## Usage

Examples at [ExamplesFolder](https://github.com/hanchon-live/evmosjs/tree/master/examples)

```sh
tsc examples/rest/account.ts && node examples/rest/account.js
```

## Grpc usage

This lib is going to be migrated to [EvmosProtoJs](https://github.com/hanchon-live/evmosprotojs), because http2 is not compatible with browsers.

## Build locally

```sh
yarn install
yarn test
yarn build
```

## TODOs

- Create mock to test the rest api
- Create tests for the rest code
- Add more rest calls
- Figure it out how to send a transactions using the rest api
