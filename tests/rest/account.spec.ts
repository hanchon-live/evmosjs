import { RestInstance } from '../../src/rest/client'
import { getAccount } from '../../src/rest/account'

const mockServer = require('mockttp').getLocal()

describe('mock for account', () => {
    let rest
    beforeEach(async () => {
        await mockServer.start()
        rest = new RestInstance(mockServer.url)
    })
    afterEach(async () => await mockServer.stop())

    it('test api not enabled', async () => {
        const address = 'evmos1pulrtwckw2ryyj0wesr7fyf34vm2kj3menjzqe'
        await mockServer
            .forGet(`/cosmos/auth/v1beta1/accounts/${address}`)
            .thenReply(502, '')
        const response = await getAccount(rest, address)
        expect(response).toStrictEqual({
            address: '',
            pubkey: '',
            pubkeyType: '',
            accountNumber: -1,
            sequence: -1,
            error: 'Request failed with status code 502',
        })
    })

    it('test invalid account', async () => {
        const address = 'evmos1pulrtwckw2ryyj0wesr7fyf34vm2kj3menj'
        await mockServer
            .forGet(`/cosmos/auth/v1beta1/accounts/${address}`)
            .thenReply(400, '')
        const response = await getAccount(rest, address)
        expect(response).toStrictEqual({
            address: '',
            pubkey: '',
            pubkeyType: '',
            accountNumber: -1,
            sequence: -1,
            error: 'Request failed with status code 400',
        })
    })

    it('test wallet not found', async () => {
        const address = 'evmos1tkr6cnewe67u6jnlk0nekgpc62exps0n2lqqyf'
        await mockServer
            .forGet(`/cosmos/auth/v1beta1/accounts/${address}`)
            .thenReply(404, '')
        const response = await getAccount(rest, address)
        expect(response).toStrictEqual({
            address: '',
            pubkey: '',
            pubkeyType: '',
            accountNumber: -1,
            sequence: -1,
            error: 'Request failed with status code 404',
        })
    })
    it('test valid account', async () => {
        const address = 'evmos1pulrtwckw2ryyj0wesr7fyf34vm2kj3menjzqe'
        await mockServer
            .forGet(`/cosmos/auth/v1beta1/accounts/${address}`)
            .thenReply(
                200,
                JSON.stringify({
                    account: {
                        '@type': '/ethermint.types.v1.EthAccount',
                        base_account: {
                            address:
                                'evmos1gpapf6d8v85vwsl4w36n8l5qlchhp2j2drdyxg',
                            pub_key: {
                                '@type':
                                    '/ethermint.crypto.v1.ethsecp256k1.PubKey',
                                key: 'A8OEW8+mLrTd/9Wdd8Fr9DdCfdTFWqYBHzAjICW7g23I',
                            },
                            account_number: '0',
                            sequence: '1',
                        },
                        code_hash:
                            '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
                    },
                })
            )
        const response = await getAccount(rest, address)
        expect(response).toStrictEqual({
            address: 'evmos1gpapf6d8v85vwsl4w36n8l5qlchhp2j2drdyxg',
            pubkey: 'A8OEW8+mLrTd/9Wdd8Fr9DdCfdTFWqYBHzAjICW7g23I',
            pubkeyType: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
            accountNumber: '0',
            sequence: '1',
            error: '',
        })
    })
})
