import { MessagesHelper } from './messages'
import { authClient, Account } from './messages/account'
import { ClaimClient } from './messages/claims'

export class EvmosJS {
    private endpoint: string
    public messages: MessagesHelper

    constructor(endpoint: string) {
        this.endpoint = endpoint
        this.messages = new MessagesHelper()
    }

    setEndpoint(endpoint: string) {
        this.endpoint = endpoint
    }

    async getAccount(address: string): Promise<Account> {
        const client = new authClient(this.endpoint)
        let data = await client.account(address)
        return data
    }

    async getClaimsRecords(address: string) {
        const client = new ClaimClient(this.endpoint)
        let data = await client.claimRecords(address)
        return data
    }
}
