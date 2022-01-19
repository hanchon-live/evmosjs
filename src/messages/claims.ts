var grpc = require('@grpc/grpc-js')

import * as query from '../proto/evmos/claim/v1/query'
// import * as eth from '../proto/ethermint/types/v1/account'

const meta = new grpc.Metadata()

export interface Claim {
    action: number
    claimable_amount: string
    completed: boolean
}
export interface ClaimRecord {
    initial_claimable_amount: string
    claims: Claim[]
    address: string
    error: string
}

export class ClaimClient {
    client: any
    pathToService: string
    constructor(pathToService: string) {
        this.pathToService = pathToService
        this.client = new query.evmos.claim.v1.QueryClient(
            pathToService,
            grpc.credentials.createInsecure()
        )
    }

    async createRequestMessage(request: any, type: any) {
        let message

        switch (type) {
            case 'claim-records':
                message = new query.evmos.claim.v1.QueryClaimRecordsRequest({
                    address: request,
                })
        }
        return message
    }

    async claimRecords(address: any): Promise<any> {
        const message = await this.createRequestMessage(
            address,
            'claim-records'
        )
        const promise =
            new Promise<query.evmos.claim.v1.QueryClaimRecordsResponse>(
                (resolve, reject) => {
                    this.client.ClaimRecords(
                        message,
                        meta,
                        (
                            err: any,
                            res: query.evmos.claim.v1.QueryClaimRecordsResponse
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
            .then((value: query.evmos.claim.v1.QueryClaimRecordsResponse) => {
                // console.dir(value.serializeBinary(), { 'maxArrayLength': null })
                const response = value.toObject()
                let claims: Claim[] = []

                if (response.claims) {
                    response.claims.forEach((e) => {
                        claims.push({
                            action: e.action ? e.action.valueOf() : -1,
                            claimable_amount: e.claimable_amount
                                ? e.claimable_amount
                                : '0',
                            completed: e.completed ? e.completed : false,
                        })
                    })
                }
                return {
                    initial_claimable_amount: response.initial_claimable_amount
                        ? response.initial_claimable_amount
                        : '0',
                    claims: claims,
                    address: address,
                    error: '',
                }
            })
            .catch((e: any) => {
                return {
                    address: address,
                    initial_claimable_amount: '0',
                    claims: [],
                    error: e.message,
                }
            })
    }
}
