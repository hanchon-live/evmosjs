var grpc = require('@grpc/grpc-js')

import * as query from '../proto/cosmos/auth/v1beta1/query'
import * as eth from '../proto/ethermint/types/v1/account'

const meta = new grpc.Metadata()
export interface Account {
    address: string
    pubkey: Uint8Array
    pubkeyType: string
    accountNumber: number
    sequence: number
    error: string
}

export class AuthClient {
    client: any
    pathToService: string
    constructor(pathToService: string) {
        this.pathToService = pathToService
        this.client = new query.cosmos.auth.v1beta1.QueryClient(
            pathToService,
            grpc.credentials.createInsecure()
        )
    }

    async createRequestMessage(request: any, type: any) {
        let message

        switch (type) {
            case 'account':
                message = new query.cosmos.auth.v1beta1.QueryAccountRequest({
                    address: request,
                })
        }
        return message
    }

    async account(address: any): Promise<Account> {
        meta.set('Account', address)
        const message = await this.createRequestMessage(address, 'account')
        const promise =
            new Promise<query.cosmos.auth.v1beta1.QueryAccountResponse>(
                (resolve, reject) => {
                    this.client.Account(
                        message,
                        meta,
                        (
                            err: any,
                            res: query.cosmos.auth.v1beta1.QueryAccountResponse
                        ) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(res)
                            }
                        }
                    )
                }
            )

        return promise
            .then((value: query.cosmos.auth.v1beta1.QueryAccountResponse) => {
                // console.dir(value.serializeBinary(), { 'maxArrayLength': null })
                const ethAccount = value.toObject()
                if (ethAccount.account && ethAccount.account.value) {
                    let account = eth.ethermint.types.v1.EthAccount.deserialize(
                        ethAccount.account.value
                    ).toObject()
                    if (account.base_account) {
                        return {
                            address: account.base_account.address
                                ? account.base_account.address
                                : '',
                            pubkey: account.base_account.pub_key
                                ? account.base_account.pub_key.value
                                    ? account.base_account.pub_key.value
                                    : new Uint8Array()
                                : new Uint8Array(),
                            pubkeyType: account.base_account.pub_key
                                ? account.base_account.pub_key.type_url
                                    ? account.base_account.pub_key.type_url
                                    : ''
                                : '',
                            accountNumber: account.base_account.account_number
                                ? account.base_account.account_number
                                : 0,
                            sequence: account.base_account.sequence
                                ? account.base_account.sequence
                                : 0,
                            error: '',
                        }
                    }
                }
                throw 'Account response has no base/eth account.'
            })
            .catch((e: any) => {
                return {
                    address: '',
                    pubkey: new Uint8Array(),
                    pubkeyType: '',
                    accountNumber: -1,
                    sequence: -1,
                    error: e.message,
                }
            })
    }
}
