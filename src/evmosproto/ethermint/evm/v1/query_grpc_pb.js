// GENERATED CODE -- DO NOT EDIT!

'use strict';
var ethermint_evm_v1_query_pb = require('../../../ethermint/evm/v1/query_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var ethermint_evm_v1_evm_pb = require('../../../ethermint/evm/v1/evm_pb.js');
var ethermint_evm_v1_tx_pb = require('../../../ethermint/evm/v1/tx_pb.js');

function serialize_ethermint_evm_v1_EstimateGasResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.EstimateGasResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.EstimateGasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_EstimateGasResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.EstimateGasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_EthCallRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.EthCallRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.EthCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_EthCallRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.EthCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_MsgEthereumTxResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_tx_pb.MsgEthereumTxResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.MsgEthereumTxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_MsgEthereumTxResponse(buffer_arg) {
  return ethermint_evm_v1_tx_pb.MsgEthereumTxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryAccountRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryAccountRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryAccountRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryAccountResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryAccountResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryAccountResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryBalanceRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryBalanceRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryBalanceRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryBalanceResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryBalanceResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryBalanceResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryBlockBloomRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryBlockBloomRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryBlockBloomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryBlockBloomRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryBlockBloomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryBlockBloomResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryBlockBloomResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryBlockBloomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryBlockBloomResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryBlockBloomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryBlockLogsRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryBlockLogsRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryBlockLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryBlockLogsRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryBlockLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryBlockLogsResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryBlockLogsResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryBlockLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryBlockLogsResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryBlockLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryCodeRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryCodeRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryCodeRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryCodeResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryCodeResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryCodeResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryCosmosAccountRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryCosmosAccountRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryCosmosAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryCosmosAccountRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryCosmosAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryCosmosAccountResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryCosmosAccountResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryCosmosAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryCosmosAccountResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryCosmosAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryParamsRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryParamsRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryParamsResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryParamsResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryStorageRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryStorageRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryStorageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryStorageRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryStorageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryStorageResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryStorageResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryStorageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryStorageResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryStorageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryTxLogsRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryTxLogsRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryTxLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryTxLogsRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryTxLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryTxLogsResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryTxLogsResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryTxLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryTxLogsResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryTxLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryValidatorAccountRequest(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryValidatorAccountRequest)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryValidatorAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryValidatorAccountRequest(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryValidatorAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_evm_v1_QueryValidatorAccountResponse(arg) {
  if (!(arg instanceof ethermint_evm_v1_query_pb.QueryValidatorAccountResponse)) {
    throw new Error('Expected argument of type ethermint.evm.v1.QueryValidatorAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_QueryValidatorAccountResponse(buffer_arg) {
  return ethermint_evm_v1_query_pb.QueryValidatorAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports['ethermint.evm.v1.Query'] = {
  // Account queries an Ethereum account.
account: {
    path: '/ethermint.evm.v1.Query/Account',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.QueryAccountRequest,
    responseType: ethermint_evm_v1_query_pb.QueryAccountResponse,
    requestSerialize: serialize_ethermint_evm_v1_QueryAccountRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_QueryAccountRequest,
    responseSerialize: serialize_ethermint_evm_v1_QueryAccountResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_QueryAccountResponse,
  },
  // CosmosAccount queries an Ethereum account's Cosmos Address.
cosmosAccount: {
    path: '/ethermint.evm.v1.Query/CosmosAccount',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.QueryCosmosAccountRequest,
    responseType: ethermint_evm_v1_query_pb.QueryCosmosAccountResponse,
    requestSerialize: serialize_ethermint_evm_v1_QueryCosmosAccountRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_QueryCosmosAccountRequest,
    responseSerialize: serialize_ethermint_evm_v1_QueryCosmosAccountResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_QueryCosmosAccountResponse,
  },
  // ValidatorAccount queries an Ethereum account's from a validator consensus
// Address.
validatorAccount: {
    path: '/ethermint.evm.v1.Query/ValidatorAccount',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.QueryValidatorAccountRequest,
    responseType: ethermint_evm_v1_query_pb.QueryValidatorAccountResponse,
    requestSerialize: serialize_ethermint_evm_v1_QueryValidatorAccountRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_QueryValidatorAccountRequest,
    responseSerialize: serialize_ethermint_evm_v1_QueryValidatorAccountResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_QueryValidatorAccountResponse,
  },
  // Balance queries the balance of a the EVM denomination for a single
// EthAccount.
balance: {
    path: '/ethermint.evm.v1.Query/Balance',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.QueryBalanceRequest,
    responseType: ethermint_evm_v1_query_pb.QueryBalanceResponse,
    requestSerialize: serialize_ethermint_evm_v1_QueryBalanceRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_QueryBalanceRequest,
    responseSerialize: serialize_ethermint_evm_v1_QueryBalanceResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_QueryBalanceResponse,
  },
  // Storage queries the balance of all coins for a single account.
storage: {
    path: '/ethermint.evm.v1.Query/Storage',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.QueryStorageRequest,
    responseType: ethermint_evm_v1_query_pb.QueryStorageResponse,
    requestSerialize: serialize_ethermint_evm_v1_QueryStorageRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_QueryStorageRequest,
    responseSerialize: serialize_ethermint_evm_v1_QueryStorageResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_QueryStorageResponse,
  },
  // Code queries the balance of all coins for a single account.
code: {
    path: '/ethermint.evm.v1.Query/Code',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.QueryCodeRequest,
    responseType: ethermint_evm_v1_query_pb.QueryCodeResponse,
    requestSerialize: serialize_ethermint_evm_v1_QueryCodeRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_QueryCodeRequest,
    responseSerialize: serialize_ethermint_evm_v1_QueryCodeResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_QueryCodeResponse,
  },
  // TxLogs queries ethereum logs from a transaction.
txLogs: {
    path: '/ethermint.evm.v1.Query/TxLogs',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.QueryTxLogsRequest,
    responseType: ethermint_evm_v1_query_pb.QueryTxLogsResponse,
    requestSerialize: serialize_ethermint_evm_v1_QueryTxLogsRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_QueryTxLogsRequest,
    responseSerialize: serialize_ethermint_evm_v1_QueryTxLogsResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_QueryTxLogsResponse,
  },
  // BlockLogs queries all the ethereum logs for a given block hash.
blockLogs: {
    path: '/ethermint.evm.v1.Query/BlockLogs',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.QueryBlockLogsRequest,
    responseType: ethermint_evm_v1_query_pb.QueryBlockLogsResponse,
    requestSerialize: serialize_ethermint_evm_v1_QueryBlockLogsRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_QueryBlockLogsRequest,
    responseSerialize: serialize_ethermint_evm_v1_QueryBlockLogsResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_QueryBlockLogsResponse,
  },
  // BlockBloom queries the block bloom filter bytes at a given height.
blockBloom: {
    path: '/ethermint.evm.v1.Query/BlockBloom',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.QueryBlockBloomRequest,
    responseType: ethermint_evm_v1_query_pb.QueryBlockBloomResponse,
    requestSerialize: serialize_ethermint_evm_v1_QueryBlockBloomRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_QueryBlockBloomRequest,
    responseSerialize: serialize_ethermint_evm_v1_QueryBlockBloomResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_QueryBlockBloomResponse,
  },
  // Params queries the parameters of x/evm module.
params: {
    path: '/ethermint.evm.v1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.QueryParamsRequest,
    responseType: ethermint_evm_v1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_ethermint_evm_v1_QueryParamsRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_QueryParamsRequest,
    responseSerialize: serialize_ethermint_evm_v1_QueryParamsResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_QueryParamsResponse,
  },
  // EthCall implements the `eth_call` rpc api
ethCall: {
    path: '/ethermint.evm.v1.Query/EthCall',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.EthCallRequest,
    responseType: ethermint_evm_v1_tx_pb.MsgEthereumTxResponse,
    requestSerialize: serialize_ethermint_evm_v1_EthCallRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_EthCallRequest,
    responseSerialize: serialize_ethermint_evm_v1_MsgEthereumTxResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_MsgEthereumTxResponse,
  },
  // EstimateGas implements the `eth_estimateGas` rpc api
estimateGas: {
    path: '/ethermint.evm.v1.Query/EstimateGas',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_query_pb.EthCallRequest,
    responseType: ethermint_evm_v1_query_pb.EstimateGasResponse,
    requestSerialize: serialize_ethermint_evm_v1_EthCallRequest,
    requestDeserialize: deserialize_ethermint_evm_v1_EthCallRequest,
    responseSerialize: serialize_ethermint_evm_v1_EstimateGasResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_EstimateGasResponse,
  },
};

