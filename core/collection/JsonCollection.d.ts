import { RawDocument, JsonDocument } from ".";
import { JsonDocFilter } from "./JsonDocFilter";
import { PoolConnection } from "mysql";
import { KeyValue } from "..";
export declare class JsonCollection<T extends KeyValue = KeyValue> {
    db: PoolConnection;
    table: string;
    constructor(table: string, db: PoolConnection);
    get defaultScript(): string;
    getCreationScript(): string[];
    create(doc: JsonDocument<T>): Promise<boolean>;
    read(key: string): Promise<JsonDocument<T> | undefined>;
    readOneWhere(filter?: JsonDocFilter): Promise<JsonDocument<T> | undefined>;
    readAll(filter?: JsonDocFilter): Promise<JsonDocument<T>[]>;
    update(doc: JsonDocument<T>): Promise<boolean>;
    delete(key: string): Promise<boolean>;
    protected rawToDocument(raw: RawDocument): {
        id: string;
        data: any;
    };
}
