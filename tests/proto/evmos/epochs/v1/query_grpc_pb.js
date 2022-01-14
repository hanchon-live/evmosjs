// GENERATED CODE -- DO NOT EDIT!

'use strict';
var evmos_epochs_v1_query_pb = require('../../../evmos/epochs/v1/query_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
var evmos_epochs_v1_genesis_pb = require('../../../evmos/epochs/v1/genesis_pb.js');

function serialize_evmos_epochs_v1_QueryCurrentEpochRequest(arg) {
  if (!(arg instanceof evmos_epochs_v1_query_pb.QueryCurrentEpochRequest)) {
    throw new Error('Expected argument of type evmos.epochs.v1.QueryCurrentEpochRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_epochs_v1_QueryCurrentEpochRequest(buffer_arg) {
  return evmos_epochs_v1_query_pb.QueryCurrentEpochRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_epochs_v1_QueryCurrentEpochResponse(arg) {
  if (!(arg instanceof evmos_epochs_v1_query_pb.QueryCurrentEpochResponse)) {
    throw new Error('Expected argument of type evmos.epochs.v1.QueryCurrentEpochResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_epochs_v1_QueryCurrentEpochResponse(buffer_arg) {
  return evmos_epochs_v1_query_pb.QueryCurrentEpochResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_epochs_v1_QueryEpochsInfoRequest(arg) {
  if (!(arg instanceof evmos_epochs_v1_query_pb.QueryEpochsInfoRequest)) {
    throw new Error('Expected argument of type evmos.epochs.v1.QueryEpochsInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_epochs_v1_QueryEpochsInfoRequest(buffer_arg) {
  return evmos_epochs_v1_query_pb.QueryEpochsInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_epochs_v1_QueryEpochsInfoResponse(arg) {
  if (!(arg instanceof evmos_epochs_v1_query_pb.QueryEpochsInfoResponse)) {
    throw new Error('Expected argument of type evmos.epochs.v1.QueryEpochsInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_epochs_v1_QueryEpochsInfoResponse(buffer_arg) {
  return evmos_epochs_v1_query_pb.QueryEpochsInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports['evmos.epochs.v1.Query'] = {
  // EpochInfos provide running epochInfos
epochInfos: {
    path: '/evmos.epochs.v1.Query/EpochInfos',
    requestStream: false,
    responseStream: false,
    requestType: evmos_epochs_v1_query_pb.QueryEpochsInfoRequest,
    responseType: evmos_epochs_v1_query_pb.QueryEpochsInfoResponse,
    requestSerialize: serialize_evmos_epochs_v1_QueryEpochsInfoRequest,
    requestDeserialize: deserialize_evmos_epochs_v1_QueryEpochsInfoRequest,
    responseSerialize: serialize_evmos_epochs_v1_QueryEpochsInfoResponse,
    responseDeserialize: deserialize_evmos_epochs_v1_QueryEpochsInfoResponse,
  },
  // CurrentEpoch provide current epoch of specified identifier
currentEpoch: {
    path: '/evmos.epochs.v1.Query/CurrentEpoch',
    requestStream: false,
    responseStream: false,
    requestType: evmos_epochs_v1_query_pb.QueryCurrentEpochRequest,
    responseType: evmos_epochs_v1_query_pb.QueryCurrentEpochResponse,
    requestSerialize: serialize_evmos_epochs_v1_QueryCurrentEpochRequest,
    requestDeserialize: deserialize_evmos_epochs_v1_QueryCurrentEpochRequest,
    responseSerialize: serialize_evmos_epochs_v1_QueryCurrentEpochResponse,
    responseDeserialize: deserialize_evmos_epochs_v1_QueryCurrentEpochResponse,
  },
};

