import { createMsgSend } from './messages/msgSend'
import {
    createAuthInfo,
    createBody,
    createFee,
    createSigDoc,
    createSignerInfo,
} from './transaction/transaction'
import { Keccak } from 'sha3'

export class MessagesHelper {
    constructor() {}

    CreateTransaction(
        message: any,
        memo: string,
        fee: string,
        denom: string,
        gasLimit: number,
        algo: string,
        pubKey: string,
        sequence: number,
        accountNumber: number,
        chainId: string
    ) {
        let body = createBody(message, memo)
        let feeMessage = createFee(fee, denom, gasLimit)
        let pubKeyDecoded = Buffer.from(pubKey, 'base64')

        let signInfo = createSignerInfo(
            algo,
            new Uint8Array(pubKeyDecoded),
            sequence
        )

        let authInfo = createAuthInfo(signInfo, feeMessage)

        let signDoc = createSigDoc(
            body.serializeBinary(),
            authInfo.serializeBinary(),
            chainId,
            accountNumber
        )
        const hash = new Keccak(256)
        hash.update(Buffer.from(signDoc.serializeBinary()))
        const toSign = hash.digest('binary')

        const res = {
            bodyBytes: Buffer.from(body.serializeBinary()).toString('base64'),
            authInfoBytes: Buffer.from(authInfo.serializeBinary()).toString(
                'base64'
            ),
            chainId: chainId,
            accountNumber: accountNumber,
            signBytes: toSign.toString('base64'),
        }
        return res
    }

    CreateMsgSend(
        fromAddress: string,
        toAddress: string,
        amount: string,
        denom: string
    ) {
        return createMsgSend(fromAddress, toAddress, amount, denom)
    }
}
