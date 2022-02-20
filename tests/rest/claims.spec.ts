import { RestInstance } from '../../src/rest/client'
import { getClaimsRecord, getTotalUnclaimed } from '../../src/rest/claims'

const mockServer = require('mockttp').getLocal()

describe('mock for claims', () => {
    let rest
    beforeEach(async () => {
        await mockServer.start()
        rest = new RestInstance(mockServer.url)
    })
    afterEach(async () => await mockServer.stop())

    describe('totalUnclaimed', () => {
        it('test empty', async () => {
            await mockServer
                .forGet('/evmos/claims/v1/total_unclaimed')
                .thenReply(200, JSON.stringify({ coins: [] }))
            const response = await getTotalUnclaimed(rest)
            expect(response.coins).toStrictEqual([])
            expect(response.error).toStrictEqual('')
        })

        it('test coins', async () => {
            const amount = '2000'
            const denom = 'aevmos'
            await mockServer
                .forGet('/evmos/claims/v1/total_unclaimed')
                .thenReply(200, JSON.stringify({ coins: [{ amount, denom }] }))
            const response = await getTotalUnclaimed(rest)
            expect(response.coins).toStrictEqual([{ amount, denom }])
            expect(response.error).toStrictEqual('')
        })

        it('test not connected', async () => {
            await mockServer
                .forGet('/evmos/claims/v1/total_unclaimed')
                .thenReply(404, 'not found')
            const response = await getTotalUnclaimed(rest)
            expect(response.coins).toStrictEqual([])
            expect(response.error).toStrictEqual(
                'Request failed with status code 404'
            )
        })
    })

    describe('getClaimsRecord', () => {
        it('valid wallet', async () => {
            const address = 'evmos1gpapf6d8v85vwsl4w36n8l5qlchhp2j2drdyxg'
            await mockServer
                .forGet(`/evmos/claims/v1/claims_records/${address}`)
                .thenReply(
                    200,
                    JSON.stringify({
                        initial_claimable_amount: '10000',
                        claims: [
                            {
                                action: 'ACTION_VOTE',
                                completed: false,
                                claimable_amount: '2500',
                            },
                            {
                                action: 'ACTION_DELEGATE',
                                completed: false,
                                claimable_amount: '2500',
                            },
                            {
                                action: 'ACTION_EVM',
                                completed: false,
                                claimable_amount: '2500',
                            },
                            {
                                action: 'ACTION_IBC_TRANSFER',
                                completed: false,
                                claimable_amount: '2500',
                            },
                        ],
                    })
                )
            const response = await getClaimsRecord(rest, address)
            expect(response).toStrictEqual({
                initial_claimable_amount: '10000',
                claims: [
                    {
                        action: 'ACTION_VOTE',
                        claimable_amount: '2500',
                        completed: false,
                    },
                    {
                        action: 'ACTION_DELEGATE',
                        claimable_amount: '2500',
                        completed: false,
                    },
                    {
                        action: 'ACTION_EVM',
                        claimable_amount: '2500',
                        completed: false,
                    },
                    {
                        action: 'ACTION_IBC_TRANSFER',
                        claimable_amount: '2500',
                        completed: false,
                    },
                ],
                address: address,
                error: '',
            })
        })

        it('invalid wallet', async () => {
            const address = 'evmos1gpapf6d8v85vwsl4w36n8l5qlchhp2j2drdyxgq'
            await mockServer
                .forGet(`/evmos/claims/v1/claims_records/${address}`)
                .thenReply(400, '')
            const response = await getClaimsRecord(rest, address)
            expect(response).toStrictEqual({
                address: 'evmos1gpapf6d8v85vwsl4w36n8l5qlchhp2j2drdyxgq',
                initial_claimable_amount: '0',
                claims: [],
                error: 'Request failed with status code 400',
            })
        })

        it('wallet with no records', async () => {
            const address = 'evmos1qc3xt7vctgwesrlfytve5yja8qcja4tcjkxemy'
            await mockServer
                .forGet(`/evmos/claims/v1/claims_records/${address}`)
                .thenReply(404, '')
            const response = await getClaimsRecord(rest, address)
            expect(response).toStrictEqual({
                address: 'evmos1qc3xt7vctgwesrlfytve5yja8qcja4tcjkxemy',
                initial_claimable_amount: '0',
                claims: [],
                error: 'Request failed with status code 404',
            })
        })
    })
})
