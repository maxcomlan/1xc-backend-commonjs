import Axios from "axios";
import { SystemProperties } from "..";
import { ServiceMetadata } from "../peers";
import { ServiceClient } from "./ServiceClient";

export class PropertyServiceClient extends ServiceClient{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(PropertyServiceClient.url, PropertyServiceClient.clientMetadata);
    }

    async read():Promise<SystemProperties | undefined>{
        return Axios.get(
            this.url,
            {
                headers: {
                    'Service-Name': this.access.name,
                    'Service-Signature': this.access.signature
                }
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.data;
            }
            return undefined;
        })
    }
}

export default PropertyServiceClient;