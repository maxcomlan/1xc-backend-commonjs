import { Customer } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
export declare class UserServiceClient extends JsonServiceClient<Customer> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
}
