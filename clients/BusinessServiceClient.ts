import { BusinessProfile } from "..";
import { ServiceMetadata } from "../peer-types";
import { JsonServiceClient } from "./JsonServiceClient";

export class BusinessServiceClient extends JsonServiceClient<BusinessProfile>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(BusinessServiceClient.url, BusinessServiceClient.clientMetadata);
    }
}