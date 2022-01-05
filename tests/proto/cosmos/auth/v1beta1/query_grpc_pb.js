// GENERATED CODE -- DO NOT EDIT!

'use strict';
var cosmos_auth_v1beta1_query_pb = require('../../../cosmos/auth/v1beta1/query_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var cosmos_auth_v1beta1_auth_pb = require('../../../cosmos/auth/v1beta1/auth_pb.js');
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');

function serialize_cosmos_auth_v1beta1_QueryAccountRequest(arg) {
  if (!(arg instanceof cosmos_auth_v1beta1_query_pb.QueryAccountRequest)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryAccountRequest(buffer_arg) {
  return cosmos_auth_v1beta1_query_pb.QueryAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_auth_v1beta1_QueryAccountResponse(arg) {
  if (!(arg instanceof cosmos_auth_v1beta1_query_pb.QueryAccountResponse)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryAccountResponse(buffer_arg) {
  return cosmos_auth_v1beta1_query_pb.QueryAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_auth_v1beta1_QueryAccountsRequest(arg) {
  if (!(arg instanceof cosmos_auth_v1beta1_query_pb.QueryAccountsRequest)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryAccountsRequest(buffer_arg) {
  return cosmos_auth_v1beta1_query_pb.QueryAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_auth_v1beta1_QueryAccountsResponse(arg) {
  if (!(arg instanceof cosmos_auth_v1beta1_query_pb.QueryAccountsResponse)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryAccountsResponse(buffer_arg) {
  return cosmos_auth_v1beta1_query_pb.QueryAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_auth_v1beta1_QueryParamsRequest(arg) {
  if (!(arg instanceof cosmos_auth_v1beta1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryParamsRequest(buffer_arg) {
  return cosmos_auth_v1beta1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_auth_v1beta1_QueryParamsResponse(arg) {
  if (!(arg instanceof cosmos_auth_v1beta1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type cosmos.auth.v1beta1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_auth_v1beta1_QueryParamsResponse(buffer_arg) {
  return cosmos_auth_v1beta1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports['cosmos.auth.v1beta1.Query'] = {
  // Accounts returns all the existing accounts
accounts: {
    path: '/cosmos.auth.v1beta1.Query/Accounts',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    responseType: cosmos_auth_v1beta1_query_pb.QueryAccountsResponse,
    requestSerialize: serialize_cosmos_auth_v1beta1_QueryAccountsRequest,
    requestDeserialize: deserialize_cosmos_auth_v1beta1_QueryAccountsRequest,
    responseSerialize: serialize_cosmos_auth_v1beta1_QueryAccountsResponse,
    responseDeserialize: deserialize_cosmos_auth_v1beta1_QueryAccountsResponse,
  },
  // Account returns account details based on address.
account: {
    path: '/cosmos.auth.v1beta1.Query/Account',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    responseType: cosmos_auth_v1beta1_query_pb.QueryAccountResponse,
    requestSerialize: serialize_cosmos_auth_v1beta1_QueryAccountRequest,
    requestDeserialize: deserialize_cosmos_auth_v1beta1_QueryAccountRequest,
    responseSerialize: serialize_cosmos_auth_v1beta1_QueryAccountResponse,
    responseDeserialize: deserialize_cosmos_auth_v1beta1_QueryAccountResponse,
  },
  // Params queries all parameters.
params: {
    path: '/cosmos.auth.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    responseType: cosmos_auth_v1beta1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_cosmos_auth_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_cosmos_auth_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_cosmos_auth_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_cosmos_auth_v1beta1_QueryParamsResponse,
  },
};

