// GENERATED CODE -- DO NOT EDIT!

'use strict';
var evmos_erc20_v1_query_pb = require('../../../evmos/erc20/v1/query_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
var evmos_erc20_v1_genesis_pb = require('../../../evmos/erc20/v1/genesis_pb.js');
var evmos_erc20_v1_erc20_pb = require('../../../evmos/erc20/v1/erc20_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');

function serialize_evmos_erc20_v1_QueryParamsRequest(arg) {
  if (!(arg instanceof evmos_erc20_v1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type evmos.erc20.v1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_erc20_v1_QueryParamsRequest(buffer_arg) {
  return evmos_erc20_v1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_erc20_v1_QueryParamsResponse(arg) {
  if (!(arg instanceof evmos_erc20_v1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type evmos.erc20.v1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_erc20_v1_QueryParamsResponse(buffer_arg) {
  return evmos_erc20_v1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_erc20_v1_QueryTokenPairRequest(arg) {
  if (!(arg instanceof evmos_erc20_v1_query_pb.QueryTokenPairRequest)) {
    throw new Error('Expected argument of type evmos.erc20.v1.QueryTokenPairRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_erc20_v1_QueryTokenPairRequest(buffer_arg) {
  return evmos_erc20_v1_query_pb.QueryTokenPairRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_erc20_v1_QueryTokenPairResponse(arg) {
  if (!(arg instanceof evmos_erc20_v1_query_pb.QueryTokenPairResponse)) {
    throw new Error('Expected argument of type evmos.erc20.v1.QueryTokenPairResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_erc20_v1_QueryTokenPairResponse(buffer_arg) {
  return evmos_erc20_v1_query_pb.QueryTokenPairResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_erc20_v1_QueryTokenPairsRequest(arg) {
  if (!(arg instanceof evmos_erc20_v1_query_pb.QueryTokenPairsRequest)) {
    throw new Error('Expected argument of type evmos.erc20.v1.QueryTokenPairsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_erc20_v1_QueryTokenPairsRequest(buffer_arg) {
  return evmos_erc20_v1_query_pb.QueryTokenPairsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_erc20_v1_QueryTokenPairsResponse(arg) {
  if (!(arg instanceof evmos_erc20_v1_query_pb.QueryTokenPairsResponse)) {
    throw new Error('Expected argument of type evmos.erc20.v1.QueryTokenPairsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_erc20_v1_QueryTokenPairsResponse(buffer_arg) {
  return evmos_erc20_v1_query_pb.QueryTokenPairsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports['evmos.erc20.v1.Query'] = {
  // Retrieves registered token pairs
tokenPairs: {
    path: '/evmos.erc20.v1.Query/TokenPairs',
    requestStream: false,
    responseStream: false,
    requestType: evmos_erc20_v1_query_pb.QueryTokenPairsRequest,
    responseType: evmos_erc20_v1_query_pb.QueryTokenPairsResponse,
    requestSerialize: serialize_evmos_erc20_v1_QueryTokenPairsRequest,
    requestDeserialize: deserialize_evmos_erc20_v1_QueryTokenPairsRequest,
    responseSerialize: serialize_evmos_erc20_v1_QueryTokenPairsResponse,
    responseDeserialize: deserialize_evmos_erc20_v1_QueryTokenPairsResponse,
  },
  // Retrieves a registered token pair
tokenPair: {
    path: '/evmos.erc20.v1.Query/TokenPair',
    requestStream: false,
    responseStream: false,
    requestType: evmos_erc20_v1_query_pb.QueryTokenPairRequest,
    responseType: evmos_erc20_v1_query_pb.QueryTokenPairResponse,
    requestSerialize: serialize_evmos_erc20_v1_QueryTokenPairRequest,
    requestDeserialize: deserialize_evmos_erc20_v1_QueryTokenPairRequest,
    responseSerialize: serialize_evmos_erc20_v1_QueryTokenPairResponse,
    responseDeserialize: deserialize_evmos_erc20_v1_QueryTokenPairResponse,
  },
  // Params retrieves the erc20 module params
params: {
    path: '/evmos.erc20.v1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: evmos_erc20_v1_query_pb.QueryParamsRequest,
    responseType: evmos_erc20_v1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_evmos_erc20_v1_QueryParamsRequest,
    requestDeserialize: deserialize_evmos_erc20_v1_QueryParamsRequest,
    responseSerialize: serialize_evmos_erc20_v1_QueryParamsResponse,
    responseDeserialize: deserialize_evmos_erc20_v1_QueryParamsResponse,
  },
};

