import { EvmosJS } from '../src/evmosjs'
test('asd', () => {
    let a = new EvmosJS('34.132.253.81:9090')
    a.getClaimsRecords('evmos1vsxz8623xwj9urqv20vxmpkxlagukh0ctsj4uu')
    expect(true).toBe(false)
})
