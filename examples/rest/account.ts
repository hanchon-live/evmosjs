import { RestInstance } from '../../src/evmosjs'
import { getAccount } from '../../src/rest/account'
;(async () => {
    let client = new RestInstance('http://rest.evmos.me/')
    let account = await getAccount(
        client,
        'evmos1qc3xt7vctgwesrlfytve5yja8qcja4tcjkxemy'
    )
    /*
    {
        address: 'evmos1qc3xt7vctgwesrlfytve5yja8qcja4tcjkxemy',
        pubkey: 'AlbFmWyxAs2EllfMVOM0BdDDUAVnTPheWPLLr67VQ9w9',
        pubkeyType: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
        accountNumber: '1',
        sequence: '1',
        error: ''
    }
    */
})()
