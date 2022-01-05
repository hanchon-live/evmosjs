// GENERATED CODE -- DO NOT EDIT!

'use strict';
var ethermint_evm_v1_tx_pb = require('../../../ethermint/evm/v1/tx_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
var ethermint_evm_v1_evm_pb = require('../../../ethermint/evm/v1/evm_pb.js');

function serialize_ethermint_evm_v1_MsgEthereumTx(arg) {
  if (!(arg instanceof ethermint_evm_v1_tx_pb.MsgEthereumTx)) {
    throw new Error('Expected argument of type ethermint.evm.v1.MsgEthereumTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethermint_evm_v1_MsgEthereumTx(buffer_arg) {
  return ethermint_evm_v1_tx_pb.MsgEthereumTx.deserializeBinary(new Uint8Array(buffer_arg));
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


// Msg defines the evm Msg service.
var MsgService = exports['ethermint.evm.v1.Msg'] = {
  // EthereumTx defines a method submitting Ethereum transactions.
ethereumTx: {
    path: '/ethermint.evm.v1.Msg/EthereumTx',
    requestStream: false,
    responseStream: false,
    requestType: ethermint_evm_v1_tx_pb.MsgEthereumTx,
    responseType: ethermint_evm_v1_tx_pb.MsgEthereumTxResponse,
    requestSerialize: serialize_ethermint_evm_v1_MsgEthereumTx,
    requestDeserialize: deserialize_ethermint_evm_v1_MsgEthereumTx,
    responseSerialize: serialize_ethermint_evm_v1_MsgEthereumTxResponse,
    responseDeserialize: deserialize_ethermint_evm_v1_MsgEthereumTxResponse,
  },
};

