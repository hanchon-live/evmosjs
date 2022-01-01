var grpc = require('@grpc/grpc-js')

const authQueryMessages = require('../evmosproto/cosmos/auth/v1beta1/query_pb.js')
const authQueryService = require('../evmosproto/cosmos/auth/v1beta1/query_grpc_pb.js')
const ethTypes = require('../evmosproto/ethermint/types/v1/account_pb.js')
const protoServices = grpc.loadPackageDefinition(authQueryService)

const meta = new grpc.Metadata()

interface Account {
    address: string
    pubkey: string
    pubkeyType: string
    accountNumber: Number
    sequence: Number
    error: string
}

export class authClient {
    client: any
    pathToService: string
    constructor(pathToService: string) {
        this.pathToService = pathToService
        this.client = new protoServices.cosmos.auth.v1beta1.Query(
            pathToService,
            grpc.credentials.createInsecure()
        )
    }

    async createRequestMessage(request: any, type: any) {
        let message

        switch (type) {
            case 'account':
                message = new authQueryMessages.QueryAccountRequest()
                message.setAddress(request)
        }
        return message
    }

    async account(address: any): Promise<Account> {
        meta.set('Account', address)
        const message = await this.createRequestMessage(address, 'account')
        const promise = new Promise((resolve, reject) => {
            this.client.account(message, meta, (err: any, res: any) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })

        return promise
            .then((value: any) => {
                // console.dir(value.serializeBinary(), { 'maxArrayLength': null })
                const ethAccount = value.toObject()
                const buff = Buffer.from(ethAccount.account.value, 'base64')
                const account =
                    ethTypes.EthAccount.deserializeBinary(buff).toObject()

                return {
                    address: account.baseAccount.address,
                    pubkey: account.baseAccount.pubKey
                        ? account.baseAccount.pubKey.value
                        : '',
                    pubkeyType: account.baseAccount.pubKey
                        ? account.baseAccount.pubKey.typeUrl
                        : '',
                    accountNumber: account.baseAccount.accountNumber,
                    sequence: account.baseAccount.sequence,
                    error: '',
                }
            })
            .catch((e: any) => {
                return {
                    address: '',
                    pubkey: '',
                    pubkeyType: '',
                    accountNumber: -1,
                    sequence: -1,
                    error: e.message,
                }
            })
    }
}
