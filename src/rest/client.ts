import axios, { AxiosInstance } from 'axios'

export class RestInstance {
    protected client: AxiosInstance

    constructor(endpoint: string) {
        this.client = axios.create({ baseURL: endpoint })
    }

    changeEndpoint(endpoint: string) {
        this.client = axios.create({ baseURL: endpoint })
    }

    getAxiosInstance() {
        return this.client
    }

    get(endpoint: string) {
        return this.client.get(endpoint)
    }
}
