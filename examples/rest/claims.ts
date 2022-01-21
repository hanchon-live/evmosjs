import { RestInstance } from '../../src/evmosjs'
import { getTotalUnclaimed, getClaimRecords } from '../../src/rest/claims'
;(async () => {
    let client = new RestInstance('http://rest.evmos.me/')
    await getTotalUnclaimed(client)
    /*
    {
        coins:
        [
            { denom: 'aevmos', amount: '7500' }
        ],
        error: ''
    }
    */

    await getClaimRecords(
        client,
        'evmos1qc3xt7vctgwesrlfytve5yja8qcja4tcjkxemy'
    )
    /*
    {
        initial_claimable_amount: '10000',
        claims: [
            {
            action: 'ACTION_VOTE',
            claimable_amount: '1236',
            completed: false
            },
            {
            action: 'ACTION_DELEGATE',
            claimable_amount: '0',
            completed: true
            },
            {
            action: 'ACTION_EVM',
            claimable_amount: '1236',
            completed: false
            },
            {
            action: 'ACTION_IBC_TRANSFER',
            claimable_amount: '1236',
            completed: false
            }
        ],
        address: 'evmos1qc3xt7vctgwesrlfytve5yja8qcja4tcjkxemy',
        error: ''
    }
    */
})()
