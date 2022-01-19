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

### Message Send

```ts
import { EvmosJS } from "@hanchon/evmosjs";

let lib = new EvmosJS('localhost:9090')
let accountResponse = await lib.getAccount(req.body.wallet.address)

let msgSend = lib.messages.CreateMsgSend(req.body.wallet.address,
    req.body.destination,
    req.body.amount,
    req.body.denom)

let transaction = lib.messages.CreateTransaction(
    msgSend,
    '',
    '20',
    'aphoton',
    200000,
    'ethsecp256k1',
    req.body.wallet.pubkey,
    accountResponse.sequence,
    accountResponse.accountNumber,
    'evmos_9000-1',
)
```

### Claiming module

```ts
import { EvmosJS } from "@hanchon/evmosjs";
let lib = new EvmosJS('localhost:9090')
let claims = await lib.getClaimRecords('evmos18453r3pzazr0da0nz6hxnp5qyh9a689lwm7z7e')
/*
{
    initial_claimable_amount: '10000',
    claims: [
        { action: 1, claimable_amount: '1471', completed: false },
        { action: 2, claimable_amount: '0', completed: true },
        { action: 3, claimable_amount: '1471', completed: false },
        { action: 4, claimable_amount: '1471', completed: false }
    ],
    address: 'evmos18453r3pzazr0da0nz6hxnp5qyh9a689lwm7z7e',
    error: ''
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

- Add more protobuf messages
