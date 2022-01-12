import * as tx from '../proto/cosmos/tx/v1beta1/tx';
export declare function createBody(message: any, memo: string): tx.cosmos.tx.v1beta1.TxBody;
export declare function createFee(fee: string, denom: string, gasLimit: number): tx.cosmos.tx.v1beta1.Fee;
export declare function createSignerInfo(algo: string, publicKey: Uint8Array, sequence: number): tx.cosmos.tx.v1beta1.SignerInfo;
export declare function createAuthInfo(signerInfo: tx.cosmos.tx.v1beta1.SignerInfo, fee: tx.cosmos.tx.v1beta1.Fee): tx.cosmos.tx.v1beta1.AuthInfo;
export declare function createSigDoc(bodyBytes: Uint8Array, authInfoBytes: Uint8Array, chainId: string, accountNumber: number): tx.cosmos.tx.v1beta1.SignDoc;
