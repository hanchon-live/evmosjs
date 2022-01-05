// GENERATED CODE -- DO NOT EDIT!

'use strict';
var evmos_erc20_v1_tx_pb = require('../../../evmos/erc20/v1/tx_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');

function serialize_evmos_erc20_v1_MsgConvertCoin(arg) {
  if (!(arg instanceof evmos_erc20_v1_tx_pb.MsgConvertCoin)) {
    throw new Error('Expected argument of type evmos.erc20.v1.MsgConvertCoin');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_erc20_v1_MsgConvertCoin(buffer_arg) {
  return evmos_erc20_v1_tx_pb.MsgConvertCoin.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_erc20_v1_MsgConvertCoinResponse(arg) {
  if (!(arg instanceof evmos_erc20_v1_tx_pb.MsgConvertCoinResponse)) {
    throw new Error('Expected argument of type evmos.erc20.v1.MsgConvertCoinResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_erc20_v1_MsgConvertCoinResponse(buffer_arg) {
  return evmos_erc20_v1_tx_pb.MsgConvertCoinResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_erc20_v1_MsgConvertERC20(arg) {
  if (!(arg instanceof evmos_erc20_v1_tx_pb.MsgConvertERC20)) {
    throw new Error('Expected argument of type evmos.erc20.v1.MsgConvertERC20');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_erc20_v1_MsgConvertERC20(buffer_arg) {
  return evmos_erc20_v1_tx_pb.MsgConvertERC20.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_evmos_erc20_v1_MsgConvertERC20Response(arg) {
  if (!(arg instanceof evmos_erc20_v1_tx_pb.MsgConvertERC20Response)) {
    throw new Error('Expected argument of type evmos.erc20.v1.MsgConvertERC20Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_evmos_erc20_v1_MsgConvertERC20Response(buffer_arg) {
  return evmos_erc20_v1_tx_pb.MsgConvertERC20Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the erc20 Msg service.
var MsgService = exports['evmos.erc20.v1.Msg'] = {
  // ConvertCoin mints a ERC20 representation of the SDK Coin denom that is registered on the token mapping.
convertCoin: {
    path: '/evmos.erc20.v1.Msg/ConvertCoin',
    requestStream: false,
    responseStream: false,
    requestType: evmos_erc20_v1_tx_pb.MsgConvertCoin,
    responseType: evmos_erc20_v1_tx_pb.MsgConvertCoinResponse,
    requestSerialize: serialize_evmos_erc20_v1_MsgConvertCoin,
    requestDeserialize: deserialize_evmos_erc20_v1_MsgConvertCoin,
    responseSerialize: serialize_evmos_erc20_v1_MsgConvertCoinResponse,
    responseDeserialize: deserialize_evmos_erc20_v1_MsgConvertCoinResponse,
  },
  // ConvertERC20 mints a Cosmos coin representation of the ERC20 token contract that is registered on the token mapping.
convertERC20: {
    path: '/evmos.erc20.v1.Msg/ConvertERC20',
    requestStream: false,
    responseStream: false,
    requestType: evmos_erc20_v1_tx_pb.MsgConvertERC20,
    responseType: evmos_erc20_v1_tx_pb.MsgConvertERC20Response,
    requestSerialize: serialize_evmos_erc20_v1_MsgConvertERC20,
    requestDeserialize: deserialize_evmos_erc20_v1_MsgConvertERC20,
    responseSerialize: serialize_evmos_erc20_v1_MsgConvertERC20Response,
    responseDeserialize: deserialize_evmos_erc20_v1_MsgConvertERC20Response,
  },
};

