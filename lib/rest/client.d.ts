import { AxiosInstance } from 'axios';
export declare class RestInstance {
    protected client: AxiosInstance;
    constructor(endpoint: string);
    changeEndpoint(endpoint: string): void;
    getAxiosInstance(): AxiosInstance;
    get(endpoint: string): Promise<import("axios").AxiosResponse<any, any>>;
}
