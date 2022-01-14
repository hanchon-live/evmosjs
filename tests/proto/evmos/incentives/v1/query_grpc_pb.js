// GENERATED CODE -- DO NOT EDIT!

'use strict';
var evmos_incentives_v1_query_pb = require('../../../evmos/incentives/v1/query_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
var evmos_incentives_v1_genesis_pb = require('../../../evmos/incentives/v1/genesis_pb.js');
var evmos_incentives_v1_incentives_pb = require('../../../evmos/incentives/v1/incentives_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');

function serialize_evmos_incentives_v1_QueryGasMeterRequest(arg) {
  if (!(arg instanceof evmos_incentives_v1_query_pb.QueryGasMeterRequest)) {
    throw new Error('Expected argument of type evmos.incentives.v1.QueryGasMeterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_incentives_v1_QueryGasMeterRequest(buffer_arg) {
  return evmos_incentives_v1_query_pb.QueryGasMeterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_incentives_v1_QueryGasMeterResponse(arg) {
  if (!(arg instanceof evmos_incentives_v1_query_pb.QueryGasMeterResponse)) {
    throw new Error('Expected argument of type evmos.incentives.v1.QueryGasMeterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_incentives_v1_QueryGasMeterResponse(buffer_arg) {
  return evmos_incentives_v1_query_pb.QueryGasMeterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_incentives_v1_QueryGasMetersRequest(arg) {
  if (!(arg instanceof evmos_incentives_v1_query_pb.QueryGasMetersRequest)) {
    throw new Error('Expected argument of type evmos.incentives.v1.QueryGasMetersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_incentives_v1_QueryGasMetersRequest(buffer_arg) {
  return evmos_incentives_v1_query_pb.QueryGasMetersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_incentives_v1_QueryGasMetersResponse(arg) {
  if (!(arg instanceof evmos_incentives_v1_query_pb.QueryGasMetersResponse)) {
    throw new Error('Expected argument of type evmos.incentives.v1.QueryGasMetersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_incentives_v1_QueryGasMetersResponse(buffer_arg) {
  return evmos_incentives_v1_query_pb.QueryGasMetersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_incentives_v1_QueryIncentiveRequest(arg) {
  if (!(arg instanceof evmos_incentives_v1_query_pb.QueryIncentiveRequest)) {
    throw new Error('Expected argument of type evmos.incentives.v1.QueryIncentiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_incentives_v1_QueryIncentiveRequest(buffer_arg) {
  return evmos_incentives_v1_query_pb.QueryIncentiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_incentives_v1_QueryIncentiveResponse(arg) {
  if (!(arg instanceof evmos_incentives_v1_query_pb.QueryIncentiveResponse)) {
    throw new Error('Expected argument of type evmos.incentives.v1.QueryIncentiveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_incentives_v1_QueryIncentiveResponse(buffer_arg) {
  return evmos_incentives_v1_query_pb.QueryIncentiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_incentives_v1_QueryIncentivesRequest(arg) {
  if (!(arg instanceof evmos_incentives_v1_query_pb.QueryIncentivesRequest)) {
    throw new Error('Expected argument of type evmos.incentives.v1.QueryIncentivesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_incentives_v1_QueryIncentivesRequest(buffer_arg) {
  return evmos_incentives_v1_query_pb.QueryIncentivesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_incentives_v1_QueryIncentivesResponse(arg) {
  if (!(arg instanceof evmos_incentives_v1_query_pb.QueryIncentivesResponse)) {
    throw new Error('Expected argument of type evmos.incentives.v1.QueryIncentivesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_incentives_v1_QueryIncentivesResponse(buffer_arg) {
  return evmos_incentives_v1_query_pb.QueryIncentivesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_incentives_v1_QueryParamsRequest(arg) {
  if (!(arg instanceof evmos_incentives_v1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type evmos.incentives.v1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_incentives_v1_QueryParamsRequest(buffer_arg) {
  return evmos_incentives_v1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_incentives_v1_QueryParamsResponse(arg) {
  if (!(arg instanceof evmos_incentives_v1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type evmos.incentives.v1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_incentives_v1_QueryParamsResponse(buffer_arg) {
  return evmos_incentives_v1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports['evmos.incentives.v1.Query'] = {
  // Incentives retrieves registered incentives
incentives: {
    path: '/evmos.incentives.v1.Query/Incentives',
    requestStream: false,
    responseStream: false,
    requestType: evmos_incentives_v1_query_pb.QueryIncentivesRequest,
    responseType: evmos_incentives_v1_query_pb.QueryIncentivesResponse,
    requestSerialize: serialize_evmos_incentives_v1_QueryIncentivesRequest,
    requestDeserialize: deserialize_evmos_incentives_v1_QueryIncentivesRequest,
    responseSerialize: serialize_evmos_incentives_v1_QueryIncentivesResponse,
    responseDeserialize: deserialize_evmos_incentives_v1_QueryIncentivesResponse,
  },
  // Incentive retrieves a registered incentive
incentive: {
    path: '/evmos.incentives.v1.Query/Incentive',
    requestStream: false,
    responseStream: false,
    requestType: evmos_incentives_v1_query_pb.QueryIncentiveRequest,
    responseType: evmos_incentives_v1_query_pb.QueryIncentiveResponse,
    requestSerialize: serialize_evmos_incentives_v1_QueryIncentiveRequest,
    requestDeserialize: deserialize_evmos_incentives_v1_QueryIncentiveRequest,
    responseSerialize: serialize_evmos_incentives_v1_QueryIncentiveResponse,
    responseDeserialize: deserialize_evmos_incentives_v1_QueryIncentiveResponse,
  },
  // GasMeters retrieves active gas meters
gasMeters: {
    path: '/evmos.incentives.v1.Query/GasMeters',
    requestStream: false,
    responseStream: false,
    requestType: evmos_incentives_v1_query_pb.QueryGasMetersRequest,
    responseType: evmos_incentives_v1_query_pb.QueryGasMetersResponse,
    requestSerialize: serialize_evmos_incentives_v1_QueryGasMetersRequest,
    requestDeserialize: deserialize_evmos_incentives_v1_QueryGasMetersRequest,
    responseSerialize: serialize_evmos_incentives_v1_QueryGasMetersResponse,
    responseDeserialize: deserialize_evmos_incentives_v1_QueryGasMetersResponse,
  },
  // GasMeter Rretrieves a active gas meter
gasMeter: {
    path: '/evmos.incentives.v1.Query/GasMeter',
    requestStream: false,
    responseStream: false,
    requestType: evmos_incentives_v1_query_pb.QueryGasMeterRequest,
    responseType: evmos_incentives_v1_query_pb.QueryGasMeterResponse,
    requestSerialize: serialize_evmos_incentives_v1_QueryGasMeterRequest,
    requestDeserialize: deserialize_evmos_incentives_v1_QueryGasMeterRequest,
    responseSerialize: serialize_evmos_incentives_v1_QueryGasMeterResponse,
    responseDeserialize: deserialize_evmos_incentives_v1_QueryGasMeterResponse,
  },
  // Params retrieves the incentives module params
params: {
    path: '/evmos.incentives.v1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: evmos_incentives_v1_query_pb.QueryParamsRequest,
    responseType: evmos_incentives_v1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_evmos_incentives_v1_QueryParamsRequest,
    requestDeserialize: deserialize_evmos_incentives_v1_QueryParamsRequest,
    responseSerialize: serialize_evmos_incentives_v1_QueryParamsResponse,
    responseDeserialize: deserialize_evmos_incentives_v1_QueryParamsResponse,
  },
};

