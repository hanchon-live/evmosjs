import { RestInstance } from './client';
import { Coin } from './common';
export interface TotalUnclaimed {
    coins: Coin[];
    error: string;
}
export interface Claim {
    action: number;
    claimable_amount: string;
    completed: boolean;
}
export interface ClaimsRecord {
    initial_claimable_amount: string;
    claims: Claim[];
    address: string;
    error: string;
}
export declare function getTotalUnclaimed(client: RestInstance): Promise<{
    coins: any;
    error: string;
} | {
    coins: never[];
    error: any;
}>;
export declare function getClaimsRecord(client: RestInstance, address: string): Promise<{
    initial_claimable_amount: any;
    claims: Claim[];
    address: string;
    error: string;
} | {
    address: string;
    initial_claimable_amount: string;
    claims: never[];
    error: any;
}>;
