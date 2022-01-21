import { RestInstance } from './client'

export interface Account {
    address: string
    pubkey: string
    pubkeyType: string
    accountNumber: number
    sequence: number
    error: string
}

export async function getAccount(client: RestInstance, address: string) {
    try {
        let res = await client.get(`/cosmos/auth/v1beta1/accounts/${address}`)
        return parseReponse(res.data.account)
    } catch (e: any) {
        return {
            address: '',
            pubkey: '',
            pubkeyType: '',
            accountNumber: -1,
            sequence: -1,
            error: e.message,
        }
    }
}

function parseReponse(account) {
    if (account.base_account) {
        return {
            address: account.base_account.address
                ? account.base_account.address
                : '',
            pubkey: account.base_account.pub_key
                ? account.base_account.pub_key.key
                    ? account.base_account.pub_key.key
                    : ''
                : '',
            pubkeyType: account.base_account.pub_key['@type']
                ? account.base_account.pub_key['@type']
                : '',
            accountNumber: account.base_account.account_number
                ? account.base_account.account_number
                : 0,
            sequence: account.base_account.sequence
                ? account.base_account.sequence
                : 0,
            error: '',
        }
    }
    throw 'Account response has no base/eth account.'
}
