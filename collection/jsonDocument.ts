import { RawDocument } from ".";
import { KeyValue } from "..";

export function rawToDoc(raw: RawDocument){
    return JSON.parse(raw.data) as KeyValue;
}