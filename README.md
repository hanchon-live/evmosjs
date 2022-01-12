# EvmosJS

A javascript library to interact with the evmos blockchain.

## Requirements

- Node v15.8.0

## Installation

```sh
yarn add @hanchon/evmosjs
```

## Usage

### Account

```ts
import { EvmosJS } from "@hanchon/evmosjs";
let lib = new EvmosJS('localhost:9090')
let accountResponse = await lib.getAccount(req.body.wallet.address)

/*
{
  address: 'evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03a',
  pubkey: 'CiECiLH1Mbh4cdvANylRhyVcrkugxLw3ynJhBbIUCv0OaRc=',
  pubkeyType: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
  accountNumber: 0,
  sequence: 1,
  error: '',
}
*/
```

## Build locally

```sh
yarn install
yarn test
yarn build
```

## Build Protofiles

```sh
npm install -g grpc-tools
./scripts/get_protofiles.sh
./scripts/get_proto_files.evmos.sh
./scripts/create_proto_file.sh
```

## TODOs

- Publish *npm package*

- Add more protobuf messages
