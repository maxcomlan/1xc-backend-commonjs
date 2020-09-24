import { KeyValue } from "..";
import { ServiceMetadata } from "../peers";
import { ServiceClient } from "./ServiceClient";
export declare class JsonServiceClient<Item = KeyValue, IndexedKey = string, CreationType = KeyValue, UpdateType = KeyValue> extends ServiceClient {
    constructor(url: string, auth: ServiceMetadata);
    get defaultHeaders(): {
        'Service-Name': string;
        'Service-Signature': string;
    };
    create(item: CreationType): Promise<boolean>;
    read(key: IndexedKey): Promise<Item>;
    readAll(): Promise<Item[]>;
    update(key: IndexedKey, item: UpdateType): Promise<boolean>;
    delete(key: IndexedKey): Promise<boolean>;
}
