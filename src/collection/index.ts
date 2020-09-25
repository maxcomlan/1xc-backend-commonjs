import { KeyValue } from "..";

export interface Entity{
    getCreationScript():string[];
}

export interface RawDocument{
    id: string;
    data: string;
}

export interface JsonDocument<T extends KeyValue = KeyValue>{
    id: string;
    data: T;
}

export interface JsonKeyMatch{
    key: string;
    value: any;
}

export type SQLJoin = "AND" | "OR";

export function rawToDoc(raw: RawDocument){
    return JSON.parse(raw.data) as KeyValue;
}

export * from "./JsonCollection";
export * from "./JsonDocFilter";
