const grpc = require('@grpc/grpc-js')

export class MockGRPCServer {
    private port: Number
    private server: any
    private service: any
    private rules: any

    constructor(service, rules) {
        this.port = Math.floor(Math.random() * (55000 - 50000) + 50000)
        this.service = service
        this.rules = rules
        this.server = null
    }

    async start() {
        this.server = await GRPCServer(this.port, this.service, this.rules)
    }

    stop() {
        this.server.forceShutdown()
    }

    getPort() {
        return this.port
    }

    getServer() {
        return this.server
    }
}

export function GRPCServer(port: Number, service, rules) {
    const server = new grpc.Server()

    server.addService(service, rules)
    const promise = new Promise((resolve, _) => {
        server.bindAsync(
            `localhost:${port}`,
            grpc.ServerCredentials.createInsecure(),
            (err: any) => {
                if (err) {
                    resolve(false)
                } else {
                    server.start()
                    resolve(true)
                }
            }
        )
    })

    // TODO: validate that the port is available

    return promise.then((res) => {
        if (res === true) {
            return server
        } else {
            return false
        }
    })
}
