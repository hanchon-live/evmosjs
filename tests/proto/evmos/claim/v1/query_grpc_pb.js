// GENERATED CODE -- DO NOT EDIT!

'use strict';
var evmos_claim_v1_query_pb = require('../../../evmos/claim/v1/query_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
var evmos_claim_v1_claim_pb = require('../../../evmos/claim/v1/claim_pb.js');
var evmos_claim_v1_genesis_pb = require('../../../evmos/claim/v1/genesis_pb.js');

function serialize_evmos_claim_v1_QueryClaimRecordsRequest(arg) {
  if (!(arg instanceof evmos_claim_v1_query_pb.QueryClaimRecordsRequest)) {
    throw new Error('Expected argument of type evmos.claim.v1.QueryClaimRecordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_claim_v1_QueryClaimRecordsRequest(buffer_arg) {
  return evmos_claim_v1_query_pb.QueryClaimRecordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_claim_v1_QueryClaimRecordsResponse(arg) {
  if (!(arg instanceof evmos_claim_v1_query_pb.QueryClaimRecordsResponse)) {
    throw new Error('Expected argument of type evmos.claim.v1.QueryClaimRecordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_claim_v1_QueryClaimRecordsResponse(buffer_arg) {
  return evmos_claim_v1_query_pb.QueryClaimRecordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_claim_v1_QueryParamsRequest(arg) {
  if (!(arg instanceof evmos_claim_v1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type evmos.claim.v1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_claim_v1_QueryParamsRequest(buffer_arg) {
  return evmos_claim_v1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_claim_v1_QueryParamsResponse(arg) {
  if (!(arg instanceof evmos_claim_v1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type evmos.claim.v1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_claim_v1_QueryParamsResponse(buffer_arg) {
  return evmos_claim_v1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_claim_v1_QueryTotalUnclaimedRequest(arg) {
  if (!(arg instanceof evmos_claim_v1_query_pb.QueryTotalUnclaimedRequest)) {
    throw new Error('Expected argument of type evmos.claim.v1.QueryTotalUnclaimedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_claim_v1_QueryTotalUnclaimedRequest(buffer_arg) {
  return evmos_claim_v1_query_pb.QueryTotalUnclaimedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_claim_v1_QueryTotalUnclaimedResponse(arg) {
  if (!(arg instanceof evmos_claim_v1_query_pb.QueryTotalUnclaimedResponse)) {
    throw new Error('Expected argument of type evmos.claim.v1.QueryTotalUnclaimedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_claim_v1_QueryTotalUnclaimedResponse(buffer_arg) {
  return evmos_claim_v1_query_pb.QueryTotalUnclaimedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports['evmos.claim.v1.Query'] = {
  // TotalUnclaimed queries the total unclaimed tokens from the airdrop
totalUnclaimed: {
    path: '/evmos.claim.v1.Query/TotalUnclaimed',
    requestStream: false,
    responseStream: false,
    requestType: evmos_claim_v1_query_pb.QueryTotalUnclaimedRequest,
    responseType: evmos_claim_v1_query_pb.QueryTotalUnclaimedResponse,
    requestSerialize: serialize_evmos_claim_v1_QueryTotalUnclaimedRequest,
    requestDeserialize: deserialize_evmos_claim_v1_QueryTotalUnclaimedRequest,
    responseSerialize: serialize_evmos_claim_v1_QueryTotalUnclaimedResponse,
    responseDeserialize: deserialize_evmos_claim_v1_QueryTotalUnclaimedResponse,
  },
  // Params returns the claim module parameters
params: {
    path: '/evmos.claim.v1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: evmos_claim_v1_query_pb.QueryParamsRequest,
    responseType: evmos_claim_v1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_evmos_claim_v1_QueryParamsRequest,
    requestDeserialize: deserialize_evmos_claim_v1_QueryParamsRequest,
    responseSerialize: serialize_evmos_claim_v1_QueryParamsResponse,
    responseDeserialize: deserialize_evmos_claim_v1_QueryParamsResponse,
  },
  // ClaimRecords returns the claims records for a given address
claimRecords: {
    path: '/evmos.claim.v1.Query/ClaimRecords',
    requestStream: false,
    responseStream: false,
    requestType: evmos_claim_v1_query_pb.QueryClaimRecordsRequest,
    responseType: evmos_claim_v1_query_pb.QueryClaimRecordsResponse,
    requestSerialize: serialize_evmos_claim_v1_QueryClaimRecordsRequest,
    requestDeserialize: deserialize_evmos_claim_v1_QueryClaimRecordsRequest,
    responseSerialize: serialize_evmos_claim_v1_QueryClaimRecordsResponse,
    responseDeserialize: deserialize_evmos_claim_v1_QueryClaimRecordsResponse,
  },
};

