import * as dependency_2 from "./../../../google/protobuf/timestamp";
import * as dependency_4 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export declare namespace cosmos.authz.v1beta1 {
    class GenericAuthorization extends pb_1.Message {
        constructor(data?: any[] | {
            msg?: string;
        });
        get msg(): string;
        set msg(value: string);
        static fromObject(data: {
            msg?: string;
        }): GenericAuthorization;
        toObject(): {
            msg?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenericAuthorization;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenericAuthorization;
    }
    class Grant extends pb_1.Message {
        constructor(data?: any[] | {
            authorization?: dependency_4.google.protobuf.Any;
            expiration?: dependency_2.google.protobuf.Timestamp;
        });
        get authorization(): dependency_4.google.protobuf.Any;
        set authorization(value: dependency_4.google.protobuf.Any);
        get expiration(): dependency_2.google.protobuf.Timestamp;
        set expiration(value: dependency_2.google.protobuf.Timestamp);
        static fromObject(data: {
            authorization?: ReturnType<typeof dependency_4.google.protobuf.Any.prototype.toObject>;
            expiration?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
        }): Grant;
        toObject(): {
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Grant;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Grant;
    }
}
