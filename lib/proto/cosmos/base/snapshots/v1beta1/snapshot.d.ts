import * as pb_1 from "google-protobuf";
export declare namespace cosmos.base.snapshots.v1beta1 {
    class Snapshot extends pb_1.Message {
        constructor(data?: any[] | {
            height?: number;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Metadata;
        });
        get height(): number;
        set height(value: number);
        get format(): number;
        set format(value: number);
        get chunks(): number;
        set chunks(value: number);
        get hash(): Uint8Array;
        set hash(value: Uint8Array);
        get metadata(): Metadata;
        set metadata(value: Metadata);
        static fromObject(data: {
            height?: number;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: ReturnType<typeof Metadata.prototype.toObject>;
        }): Snapshot;
        toObject(): {
            height?: number | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: {
                chunk_hashes?: Uint8Array[] | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Snapshot;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Snapshot;
    }
    class Metadata extends pb_1.Message {
        constructor(data?: any[] | {
            chunk_hashes?: Uint8Array[];
        });
        get chunk_hashes(): Uint8Array[];
        set chunk_hashes(value: Uint8Array[]);
        static fromObject(data: {
            chunk_hashes?: Uint8Array[];
        }): Metadata;
        toObject(): {
            chunk_hashes?: Uint8Array[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Metadata;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Metadata;
    }
}
