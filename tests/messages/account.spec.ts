import { AuthClient } from '../../src/messages/account'
import { MockGRPCServer } from './mockgrpc'

const grpc = require('@grpc/grpc-js')
const authQueryService = require('../proto/cosmos/auth/v1beta1/query_grpc_pb.js')
const authQueryMessages = require('../proto/cosmos/auth/v1beta1/query_pb.js')

const protoServices = grpc.loadPackageDefinition(authQueryService)

function account(call, callback) {
    let meta = null
    let ret = null

    if (
        call.request.array[0] == 'evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03a'
    ) {
        // Valid Address
        ret = authQueryMessages.QueryAccountResponse.deserializeBinary(
            Buffer.from([
                10, 235, 1, 10, 30, 47, 101, 116, 104, 101, 114, 109, 105, 110,
                116, 46, 116, 121, 112, 101, 115, 46, 118, 49, 46, 69, 116, 104,
                65, 99, 99, 111, 117, 110, 116, 18, 200, 1, 10, 129, 1, 10, 44,
                101, 118, 109, 111, 115, 49, 57, 115, 50, 107, 52, 55, 114, 50,
                97, 121, 55, 56, 50, 99, 102, 115, 48, 104, 99, 101, 106, 56,
                55, 120, 109, 122, 103, 50, 53, 112, 114, 50, 97, 54, 97, 48,
                51, 97, 18, 79, 10, 40, 47, 101, 116, 104, 101, 114, 109, 105,
                110, 116, 46, 99, 114, 121, 112, 116, 111, 46, 118, 49, 46, 101,
                116, 104, 115, 101, 99, 112, 50, 53, 54, 107, 49, 46, 80, 117,
                98, 75, 101, 121, 18, 35, 10, 33, 2, 136, 177, 245, 49, 184,
                120, 113, 219, 192, 55, 41, 81, 135, 37, 92, 174, 75, 160, 196,
                188, 55, 202, 114, 97, 5, 178, 20, 10, 253, 14, 105, 23, 32, 1,
                18, 66, 48, 120, 99, 53, 100, 50, 52, 54, 48, 49, 56, 54, 102,
                55, 50, 51, 51, 99, 57, 50, 55, 101, 55, 100, 98, 50, 100, 99,
                99, 55, 48, 51, 99, 48, 101, 53, 48, 48, 98, 54, 53, 51, 99, 97,
                56, 50, 50, 55, 51, 98, 55, 98, 102, 97, 100, 56, 48, 52, 53,
                100, 56, 53, 97, 52, 55, 48,
            ])
        )
    } else if (
        call.request.array[0] == 'evmos18lw704zeyg5zs098lq7x6ypfkfjqlzzln5qh89'
    ) {
        // Wallet with no pubkey
        ret = authQueryMessages.QueryAccountResponse.deserializeBinary(
            Buffer.from([
                10, 152, 1, 10, 30, 47, 101, 116, 104, 101, 114, 109, 105, 110,
                116, 46, 116, 121, 112, 101, 115, 46, 118, 49, 46, 69, 116, 104,
                65, 99, 99, 111, 117, 110, 116, 18, 118, 10, 48, 10, 44, 101,
                118, 109, 111, 115, 49, 56, 108, 119, 55, 48, 52, 122, 101, 121,
                103, 53, 122, 115, 48, 57, 56, 108, 113, 55, 120, 54, 121, 112,
                102, 107, 102, 106, 113, 108, 122, 122, 108, 110, 53, 113, 104,
                56, 57, 24, 9, 18, 66, 48, 120, 99, 53, 100, 50, 52, 54, 48, 49,
                56, 54, 102, 55, 50, 51, 51, 99, 57, 50, 55, 101, 55, 100, 98,
                50, 100, 99, 99, 55, 48, 51, 99, 48, 101, 53, 48, 48, 98, 54,
                53, 51, 99, 97, 56, 50, 50, 55, 51, 98, 55, 98, 102, 97, 100,
                56, 48, 52, 53, 100, 56, 53, 97, 52, 55, 48,
            ])
        )
    } else {
        // Invalid Address
        meta = new grpc.Metadata()
        meta.set('error', 'Error: 2 UNKNOWN: ...')
    }

    callback(meta, ret)
}

test('test get account', async () => {
    const rules = {
        account: account,
    }
    const service = protoServices.cosmos.auth.v1beta1.Query.service

    let server = new MockGRPCServer(service, rules)
    await server.start()
    expect(server.getServer()).toBeTruthy()

    let _AuthClient = new AuthClient(`localhost:${server.getPort()}`)

    // Valid wallet
    let data = await _AuthClient.account(
        'evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03a'
    )
    expect(data).toStrictEqual({
        address: 'evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03a',
        pubkey: new Uint8Array([
            10, 33, 2, 136, 177, 245, 49, 184, 120, 113, 219, 192, 55, 41, 81,
            135, 37, 92, 174, 75, 160, 196, 188, 55, 202, 114, 97, 5, 178, 20,
            10, 253, 14, 105, 23,
        ]),
        pubkeyType: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
        accountNumber: 0,
        sequence: 1,
        error: '',
    })

    // Invalid or not found
    data = await _AuthClient.account(
        'evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03as'
    )
    expect(data.error.length).toBeGreaterThan(1)
    expect(data.error).toContain('Error')
    expect(data.address).toBe('')
    expect(data.pubkey).toStrictEqual(new Uint8Array())
    expect(data.pubkeyType).toBe('')
    expect(data.accountNumber).toBe(-1)
    expect(data.sequence).toBe(-1)

    // Wallet that didn't send any transaction has no pubkey
    data = await _AuthClient.account(
        'evmos18lw704zeyg5zs098lq7x6ypfkfjqlzzln5qh89'
    )
    expect(data).toStrictEqual({
        address: 'evmos18lw704zeyg5zs098lq7x6ypfkfjqlzzln5qh89',
        pubkey: new Uint8Array(),
        pubkeyType: '',
        accountNumber: 9,
        sequence: 0,
        error: '',
    })

    server.stop()
})
