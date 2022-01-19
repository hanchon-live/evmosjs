export interface Claim {
    action: number;
    claimable_amount: string;
    completed: boolean;
}
export interface ClaimRecord {
    initial_claimable_amount: string;
    claims: Claim[];
    address: string;
    error: string;
}
export declare class ClaimClient {
    client: any;
    pathToService: string;
    constructor(pathToService: string);
    createRequestMessage(request: any, type: any): Promise<any>;
    claimRecords(address: any): Promise<any>;
}
