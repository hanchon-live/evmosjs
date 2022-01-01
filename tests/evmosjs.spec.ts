import { evmosjs } from '../src/evmosjs'

test('test eth signer', async () => {
    await evmosjs()
    expect(true).toStrictEqual(true)
})
