export declare class MessagesHelper {
    constructor();
    CreateTransaction(message: any, memo: string, fee: string, denom: string, gasLimit: number, algo: string, pubKey: string, sequence: number, accountNumber: number, chainId: string): {
        bodyBytes: string;
        authInfoBytes: string;
        chainId: string;
        accountNumber: number;
        signBytes: string;
    };
    CreateMsgSend(fromAddress: string, toAddress: string, amount: string, denom: string): {
        message: import("./proto/cosmos/bank/v1beta1/tx").cosmos.bank.v1beta1.MsgSend;
        path: string;
    };
}
