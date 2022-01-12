export interface Account {
    address: string;
    pubkey: Uint8Array;
    pubkeyType: string;
    accountNumber: number;
    sequence: number;
    error: string;
}
export declare class authClient {
    client: any;
    pathToService: string;
    constructor(pathToService: string);
    createRequestMessage(request: any, type: any): Promise<any>;
    account(address: any): Promise<Account>;
}
