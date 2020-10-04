import { ServiceMetadata } from "../peers";
import { ServiceClient } from "./ServiceClient";
export interface AssetMetadata {
    ext: string;
    mime: string;
    size: number;
}
export declare class AssetServiceClient extends ServiceClient {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
    getMetadata(file: string): Promise<AssetMetadata | undefined>;
    removeFile(file: string): Promise<boolean>;
}
export default AssetServiceClient;
