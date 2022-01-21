import { RestInstance } from './client';
export interface Account {
    address: string;
    pubkey: string;
    pubkeyType: string;
    accountNumber: number;
    sequence: number;
    error: string;
}
export declare function getAccount(client: RestInstance, address: string): Promise<{
    address: any;
    pubkey: any;
    pubkeyType: any;
    accountNumber: any;
    sequence: any;
    error: string;
} | {
    address: string;
    pubkey: string;
    pubkeyType: string;
    accountNumber: number;
    sequence: number;
    error: any;
} | undefined>;
