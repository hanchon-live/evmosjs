import * as dependency_2 from "./../../../google/protobuf/duration";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as dependency_4 from "./claim";
import * as pb_1 from "google-protobuf";
export declare namespace evmos.claim.v1 {
    class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            params?: Params;
            claim_records?: dependency_4.evmos.claim.v1.ClaimRecordAddress[];
        });
        get params(): Params;
        set params(value: Params);
        get claim_records(): dependency_4.evmos.claim.v1.ClaimRecordAddress[];
        set claim_records(value: dependency_4.evmos.claim.v1.ClaimRecordAddress[]);
        static fromObject(data: {
            params?: ReturnType<typeof Params.prototype.toObject>;
            claim_records?: ReturnType<typeof dependency_4.evmos.claim.v1.ClaimRecordAddress.prototype.toObject>[];
        }): GenesisState;
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
            claim_records?: {
                address?: string | undefined;
                initial_claimable_amount?: string | undefined;
                actions_completed?: boolean[] | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
    class Params extends pb_1.Message {
        constructor(data?: any[] | {
            enable_claim?: boolean;
            airdrop_start_time?: dependency_3.google.protobuf.Timestamp;
            duration_until_decay?: dependency_2.google.protobuf.Duration;
            duration_of_decay?: dependency_2.google.protobuf.Duration;
            claim_denom?: string;
        });
        get enable_claim(): boolean;
        set enable_claim(value: boolean);
        get airdrop_start_time(): dependency_3.google.protobuf.Timestamp;
        set airdrop_start_time(value: dependency_3.google.protobuf.Timestamp);
        get duration_until_decay(): dependency_2.google.protobuf.Duration;
        set duration_until_decay(value: dependency_2.google.protobuf.Duration);
        get duration_of_decay(): dependency_2.google.protobuf.Duration;
        set duration_of_decay(value: dependency_2.google.protobuf.Duration);
        get claim_denom(): string;
        set claim_denom(value: string);
        static fromObject(data: {
            enable_claim?: boolean;
            airdrop_start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            duration_until_decay?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            duration_of_decay?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            claim_denom?: string;
        }): Params;
        toObject(): {
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
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Params;
    }
}
