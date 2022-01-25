import { RestInstance } from './client'
import { Coin } from './common'

export interface TotalUnclaimed {
    coins: Coin[]
    error: string
}

export interface Claim {
    action: number
    claimable_amount: string
    completed: boolean
}
export interface ClaimRecord {
    initial_claimable_amount: string
    claims: Claim[]
    address: string
    error: string
}

export async function getTotalUnclaimed(client: RestInstance) {
    try {
        let res = await client.get(`/evmos/claims/v1/total_unclaimed`)
        return {
            coins: res.data.coins,
            error: '',
        }
    } catch (e: any) {
        return {
            coins: [],
            error: e.message,
        }
    }
}

export async function getClaimRecords(client: RestInstance, address: string) {
    try {
        let res = await client.get(`/evmos/claims/v1/claims_records/${address}`)
        return parseClaimRecords(res.data, address)
    } catch (e: any) {
        return {
            address: address,
            initial_claimable_amount: '0',
            claims: [],
            error: e.message,
        }
    }
}

function parseClaimRecords(response: any, address: string) {
    let claims: Claim[] = []

    if (response.claims) {
        response.claims.forEach((e) => {
            claims.push({
                action: e.action ? e.action.valueOf() : -1,
                claimable_amount: e.claimable_amount ? e.claimable_amount : '0',
                completed: e.completed ? e.completed : false,
            })
        })
    }
    return {
        initial_claimable_amount: response.initial_claimable_amount
            ? response.initial_claimable_amount
            : '0',
        claims: claims,
        address: address,
        error: '',
    }
}
