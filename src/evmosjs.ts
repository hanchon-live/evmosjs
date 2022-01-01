import { authClient } from './messages/account'

export async function evmosjs() {
    let _authClient = new authClient('localhost:9090')
    let data = await _authClient.account(
        'evmos18lw704zeyg5zs098lq7x6ypfkfjqlzzln5qh89'
    )
    let ethAccount = data
    console.log(ethAccount)
}
