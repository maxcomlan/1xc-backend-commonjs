import { Customer } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";

export class UserServiceClient extends JsonServiceClient<Customer>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(UserServiceClient.url, UserServiceClient.clientMetadata);
    }
}

export default UserServiceClient;