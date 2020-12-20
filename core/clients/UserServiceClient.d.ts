import { Customer, AccessToken } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
export declare class UserServiceClient extends JsonServiceClient<Customer> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
    getTokenData(token: string): Promise<{
        token: AccessToken;
        userId: string;
        firstName: string;
        lastName: string;
    }>;
}
export default UserServiceClient;
