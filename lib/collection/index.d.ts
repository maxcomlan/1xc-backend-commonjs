import { KeyValue } from "..";
export interface Entity {
    getCreationScript(): string[];
}
export interface RawDocument {
    id: string;
    data: string;
}
export interface JsonDocument<T extends KeyValue = KeyValue> {
    id: string;
    data: T;
}
export interface JsonKeyMatch {
    key: string;
    value: any;
}
export declare type SQLJoin = "AND" | "OR";
export declare function rawToDoc(raw: RawDocument): KeyValue;
