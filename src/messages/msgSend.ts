import * as bank from '../proto/cosmos/bank/v1beta1/tx'
import * as coin from '../proto/cosmos/base/v1beta1/coin'

export function createMsgSend(
    fromAddress: string,
    toAddress: string,
    amount: string,
    denom: string
) {
    let value = new coin.cosmos.base.v1beta1.Coin({
        denom: denom,
        amount: amount,
    })

    let message = new bank.cosmos.bank.v1beta1.MsgSend({
        from_address: fromAddress,
        to_address: toAddress,
        amount: [value],
    })
    return {
        message: message,
        path: 'cosmos.bank.v1beta1.MsgSend',
    }
}
