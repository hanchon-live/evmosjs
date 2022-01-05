import * as tx from '../proto/cosmos/tx/v1beta1/tx'
import * as signing from '../proto/cosmos/tx/signing/v1beta1/signing'
import * as coin from '../proto/cosmos/base/v1beta1/coin'
import * as eth from '../proto/ethermint/crypto/v1/ethsecp256k1/keys'
import * as secp from '../proto/cosmos/crypto/secp256k1/keys'

import { createAnyMessage, MessageGenerated } from '../messages/utils'

export function createBodyBytes(message: any, memo: string) {
    let msg = new tx.cosmos.tx.v1beta1.TxBody({
        messages: [createAnyMessage(message)],
        memo: memo,
    })
    return msg
}

export function createFee(fee: string, denom: string, gasLimit: number) {
    return new tx.cosmos.tx.v1beta1.Fee({
        amount: [
            new coin.cosmos.base.v1beta1.Coin({
                denom: denom,
                amount: fee,
            }),
        ],
        gas_limit: gasLimit,
    })
}

export function createSignerInfo(
    algo: string,
    publicKey: Uint8Array,
    sequence: number
) {
    let pubkey: MessageGenerated

    // NOTE: secp256k1 is going to be removed from evmos
    if (algo == 'secp256k1') {
        pubkey = {
            message: new secp.cosmos.crypto.secp256k1.PubKey({
                key: publicKey,
            }),
            path: 'cosmos.crypto.secp256k1.PubKey',
        }
    } else {
        // NOTE: assume ethsecp256k1 by default because after mainnet is the only one that is going to be supported
        pubkey = {
            message: new eth.ethermint.crypto.v1.ethsecp256k1.PubKey({
                key: publicKey,
            }),
            path: 'ethermint.crypto.v1.ethsecp256k1.PubKey',
        }
    }

    let signerInfo = new tx.cosmos.tx.v1beta1.SignerInfo({
        public_key: createAnyMessage(pubkey),
        mode_info: new tx.cosmos.tx.v1beta1.ModeInfo({
            single: new tx.cosmos.tx.v1beta1.ModeInfo.Single({
                mode: signing.cosmos.tx.signing.v1beta1.SignMode
                    .SIGN_MODE_DIRECT,
            }),
        }),
        sequence: sequence,
    })

    return signerInfo
}

export function createAuthInfoBytes(
    signerInfo: tx.cosmos.tx.v1beta1.SignerInfo,
    fee: tx.cosmos.tx.v1beta1.Fee
) {
    return new tx.cosmos.tx.v1beta1.AuthInfo({
        signer_infos: [signerInfo],
        fee: fee,
    })
}

export function createSigDoc(
    bodyBytes: Uint8Array,
    authInfoBytes: Uint8Array,
    chainId: string,
    accountNumber: number
) {
    return new tx.cosmos.tx.v1beta1.SignDoc({
        body_bytes: bodyBytes,
        auth_info_bytes: authInfoBytes,
        chain_id: chainId,
        account_number: accountNumber,
    })
}
