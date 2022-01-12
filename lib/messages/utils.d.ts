import * as google from '../proto/google/protobuf/any';
import { Message } from 'google-protobuf';
export interface MessageGenerated {
    message: Message;
    path: string;
}
export declare function createAnyMessage(msg: MessageGenerated): google.google.protobuf.Any;
