import { ServiceClient } from "./ServiceClient";
import { ServiceMetadata } from "../peers";
import { KeyValue } from "..";
export declare class IssuerClient extends ServiceClient {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
    sign(data: KeyValue): Promise<string>;
    verify(token: string, format?: "bearer" | "uat"): Promise<KeyValue>;
}
export default IssuerClient;
