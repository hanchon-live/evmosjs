import { MessagesHelper } from './messages';
import { Account } from './messages/account';
export declare function evmosjs(): Promise<void>;
export declare class EvmosJS {
    private endpoint;
    messages: MessagesHelper;
    constructor(endpoint: string);
    setEndpoint(endpoint: string): void;
    getAccount(address: string): Promise<Account>;
}
