import { ClaimClient } from '../../src/messages/claims'
import { MockGRPCServer } from './mockgrpc'

const grpc = require('@grpc/grpc-js')
const claimQueryService = require('../proto/evmos/claim/v1/query_grpc_pb.js')
const claimQueryMessages = require('../proto/evmos/claim/v1/query_pb.js')

const protoServices = grpc.loadPackageDefinition(claimQueryService)

function mockClaimRecords(call, callback) {
    let meta = null
    let ret = null

    if (
        call.request.array[0] == 'evmos18453r3pzazr0da0nz6hxnp5qyh9a689lwm7z7e'
    ) {
        // Valid Address
        ret = claimQueryMessages.QueryClaimRecordsResponse.deserializeBinary(
            Buffer.from([
                10, 5, 49, 48, 48, 48, 48, 18, 8, 8, 1, 26, 4, 49, 52, 55, 49,
                18, 7, 8, 2, 16, 1, 26, 1, 48, 18, 8, 8, 3, 26, 4, 49, 52, 55,
                49, 18, 8, 8, 4, 26, 4, 49, 52, 55, 49,
            ])
        )
    } else if (
        call.request.array[0] == 'evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03a'
    ) {
        // Invalid Address
        meta = new grpc.Metadata()
        meta.set(
            'error',
            'Error: 5 NOT_FOUND: claim record for address "evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03a"'
        )
    } else {
        // Invalid Address
        meta = new grpc.Metadata()
        meta.set(
            'error',
            '3 INVALID_ARGUMENT: decoding bech32 failed: invalid checksum (expected a03uqp got a03aqw)'
        )
    }

    callback(meta, ret)
}

test('test claims', async () => {
    const rules = {
        claimRecords: mockClaimRecords,
    }
    const service = protoServices.evmos.claim.v1.Query.service

    let server = new MockGRPCServer(service, rules)
    await server.start()
    expect(server.getServer()).toBeTruthy()

    let claimClient = new ClaimClient(`localhost:${server.getPort()}`)

    // Valid Request
    let data = await claimClient.claimRecords(
        'evmos18453r3pzazr0da0nz6hxnp5qyh9a689lwm7z7e'
    )
    expect(data).toStrictEqual({
        initial_claimable_amount: '10000',
        claims: [
            { action: 1, claimable_amount: '1471', completed: false },
            { action: 2, claimable_amount: '0', completed: true },
            { action: 3, claimable_amount: '1471', completed: false },
            { action: 4, claimable_amount: '1471', completed: false },
        ],
        address: 'evmos18453r3pzazr0da0nz6hxnp5qyh9a689lwm7z7e',
        error: '',
    })

    // Wallet with no records
    data = await claimClient.claimRecords(
        'evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03a'
    )
    expect(data.error.length).toBeGreaterThan(1)
    expect(data.error).toContain('Error')
    expect(data.address).toBe('evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03a')
    expect(data.claims).toStrictEqual([])
    expect(data.initial_claimable_amount).toBe('0')

    // Invalid parameter
    data = await claimClient.claimRecords(
        'evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03aqw'
    )
    expect(data.error.length).toBeGreaterThan(1)
    expect(data.error).toContain('Error')
    expect(data.address).toBe('evmos19s2k47r2ay782cfs0hcej87xmzg25pr2a6a03aqw')
    expect(data.claims).toStrictEqual([])
    expect(data.initial_claimable_amount).toBe('0')

    server.stop()
})
