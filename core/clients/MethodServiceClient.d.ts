import { Method } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
export declare class MethodServiceClient extends JsonServiceClient<Method> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
}
export default MethodServiceClient;
