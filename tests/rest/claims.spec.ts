import { RestInstance } from '../../src/rest/client'
import { getTotalUnclaimed } from '../../src/rest/claims'

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
})
