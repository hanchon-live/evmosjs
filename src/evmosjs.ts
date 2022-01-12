import { MessagesHelper } from './messages'
import { authClient, Account } from './messages/account'

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
}
