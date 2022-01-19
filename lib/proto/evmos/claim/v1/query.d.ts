/// <reference types="node" />
import * as dependency_3 from "./../../../cosmos/base/v1beta1/coin";
import * as dependency_4 from "./claim";
import * as dependency_5 from "./genesis";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace evmos.claim.v1 {
    export class QueryTotalUnclaimedRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryTotalUnclaimedRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTotalUnclaimedRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTotalUnclaimedRequest;
    }
    export class QueryTotalUnclaimedResponse extends pb_1.Message {
        constructor(data?: any[] | {
            coins?: dependency_3.cosmos.base.v1beta1.Coin[];
        });
        get coins(): dependency_3.cosmos.base.v1beta1.Coin[];
        set coins(value: dependency_3.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            coins?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): QueryTotalUnclaimedResponse;
        toObject(): {
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTotalUnclaimedResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTotalUnclaimedResponse;
    }
    export class QueryParamsRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryParamsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    }
    export class QueryParamsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_5.evmos.claim.v1.Params;
        });
        get params(): dependency_5.evmos.claim.v1.Params;
        set params(value: dependency_5.evmos.claim.v1.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_5.evmos.claim.v1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: {
                enable_claim?: boolean | undefined;
                airdrop_start_time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration_until_decay?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration_of_decay?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                claim_denom?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class QueryClaimRecordsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryClaimRecordsRequest;
        toObject(): {
            address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClaimRecordsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClaimRecordsRequest;
    }
    export class QueryClaimRecordsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            initial_claimable_amount?: string;
            claims?: dependency_4.evmos.claim.v1.Claim[];
        });
        get initial_claimable_amount(): string;
        set initial_claimable_amount(value: string);
        get claims(): dependency_4.evmos.claim.v1.Claim[];
        set claims(value: dependency_4.evmos.claim.v1.Claim[]);
        static fromObject(data: {
            initial_claimable_amount?: string;
            claims?: ReturnType<typeof dependency_4.evmos.claim.v1.Claim.prototype.toObject>[];
        }): QueryClaimRecordsResponse;
        toObject(): {
            initial_claimable_amount?: string | undefined;
            claims?: {
                action?: dependency_4.evmos.claim.v1.Action | undefined;
                completed?: boolean | undefined;
                claimable_amount?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClaimRecordsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClaimRecordsResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            TotalUnclaimed: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryTotalUnclaimedRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryTotalUnclaimedRequest;
                responseSerialize: (message: QueryTotalUnclaimedResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryTotalUnclaimedResponse;
            };
            Params: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryParamsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest;
                responseSerialize: (message: QueryParamsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse;
            };
            ClaimRecords: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryClaimRecordsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryClaimRecordsRequest;
                responseSerialize: (message: QueryClaimRecordsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryClaimRecordsResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract TotalUnclaimed(call: grpc_1.ServerUnaryCall<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>, callback: grpc_1.sendUnaryData<QueryTotalUnclaimedResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract ClaimRecords(call: grpc_1.ServerUnaryCall<QueryClaimRecordsRequest, QueryClaimRecordsResponse>, callback: grpc_1.sendUnaryData<QueryClaimRecordsResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        TotalUnclaimed: GrpcUnaryServiceInterface<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        ClaimRecords: GrpcUnaryServiceInterface<QueryClaimRecordsRequest, QueryClaimRecordsResponse>;
    }
    export {};
}
