import { Customer } from "..";
import { ServiceMetadata } from "../peer-types";
import { JsonServiceClient } from "./JsonServiceClient";

export class UserServiceClient extends JsonServiceClient<Customer>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(UserServiceClient.url, UserServiceClient.clientMetadata);
    }
}