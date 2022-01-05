// GENERATED CODE -- DO NOT EDIT!

'use strict';
var ethermint_feemarket_v1_query_pb = require('../../../ethermint/feemarket/v1/query_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var ethermint_feemarket_v1_feemarket_pb = require('../../../ethermint/feemarket/v1/feemarket_pb.js');

function serialize_ethermint_feemarket_v1_QueryBaseFeeRequest(arg) {
  if (!(arg instanceof ethermint_feemarket_v1_query_pb.QueryBaseFeeRequest)) {
    throw new Error('Expected argument of type ethermint.feemarket.v1.QueryBaseFeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_feemarket_v1_QueryBaseFeeRequest(buffer_arg) {
  return ethermint_feemarket_v1_query_pb.QueryBaseFeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_feemarket_v1_QueryBaseFeeResponse(arg) {
  if (!(arg instanceof ethermint_feemarket_v1_query_pb.QueryBaseFeeResponse)) {
    throw new Error('Expected argument of type ethermint.feemarket.v1.QueryBaseFeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_feemarket_v1_QueryBaseFeeResponse(buffer_arg) {
  return ethermint_feemarket_v1_query_pb.QueryBaseFeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_feemarket_v1_QueryBlockGasRequest(arg) {
  if (!(arg instanceof ethermint_feemarket_v1_query_pb.QueryBlockGasRequest)) {
    throw new Error('Expected argument of type ethermint.feemarket.v1.QueryBlockGasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_feemarket_v1_QueryBlockGasRequest(buffer_arg) {
  return ethermint_feemarket_v1_query_pb.QueryBlockGasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_feemarket_v1_QueryBlockGasResponse(arg) {
  if (!(arg instanceof ethermint_feemarket_v1_query_pb.QueryBlockGasResponse)) {
    throw new Error('Expected argument of type ethermint.feemarket.v1.QueryBlockGasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_feemarket_v1_QueryBlockGasResponse(buffer_arg) {
  return ethermint_feemarket_v1_query_pb.QueryBlockGasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_feemarket_v1_QueryParamsRequest(arg) {
  if (!(arg instanceof ethermint_feemarket_v1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type ethermint.feemarket.v1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_feemarket_v1_QueryParamsRequest(buffer_arg) {
  return ethermint_feemarket_v1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethermint_feemarket_v1_QueryParamsResponse(arg) {
  if (!(arg instanceof ethermint_feemarket_v1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type ethermint.feemarket.v1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_feemarket_v1_QueryParamsResponse(buffer_arg) {
  return ethermint_feemarket_v1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports['ethermint.feemarket.v1.Query'] = {
  // Params queries the parameters of x/feemarket module.
params: {
    path: '/ethermint.feemarket.v1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_feemarket_v1_query_pb.QueryParamsRequest,
    responseType: ethermint_feemarket_v1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_ethermint_feemarket_v1_QueryParamsRequest,
    requestDeserialize: deserialize_ethermint_feemarket_v1_QueryParamsRequest,
    responseSerialize: serialize_ethermint_feemarket_v1_QueryParamsResponse,
    responseDeserialize: deserialize_ethermint_feemarket_v1_QueryParamsResponse,
  },
  // BaseFee queries the base fee of the parent block of the current block.
baseFee: {
    path: '/ethermint.feemarket.v1.Query/BaseFee',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_feemarket_v1_query_pb.QueryBaseFeeRequest,
    responseType: ethermint_feemarket_v1_query_pb.QueryBaseFeeResponse,
    requestSerialize: serialize_ethermint_feemarket_v1_QueryBaseFeeRequest,
    requestDeserialize: deserialize_ethermint_feemarket_v1_QueryBaseFeeRequest,
    responseSerialize: serialize_ethermint_feemarket_v1_QueryBaseFeeResponse,
    responseDeserialize: deserialize_ethermint_feemarket_v1_QueryBaseFeeResponse,
  },
  // BlockGas queries the gas used at a given block height
blockGas: {
    path: '/ethermint.feemarket.v1.Query/BlockGas',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_feemarket_v1_query_pb.QueryBlockGasRequest,
    responseType: ethermint_feemarket_v1_query_pb.QueryBlockGasResponse,
    requestSerialize: serialize_ethermint_feemarket_v1_QueryBlockGasRequest,
    requestDeserialize: deserialize_ethermint_feemarket_v1_QueryBlockGasRequest,
    responseSerialize: serialize_ethermint_feemarket_v1_QueryBlockGasResponse,
    responseDeserialize: deserialize_ethermint_feemarket_v1_QueryBlockGasResponse,
  },
};

