import { Method } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";

export class MethodServiceClient extends JsonServiceClient<Method>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(MethodServiceClient.url, MethodServiceClient.clientMetadata);
    }
}

export default MethodServiceClient;