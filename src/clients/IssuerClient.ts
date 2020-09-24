import { ServiceClient } from "./ServiceClient";
import Axios from "axios";
import { ServiceMetadata } from "../peers";
import { KeyValue } from "..";

export class IssuerClient extends ServiceClient{
    static clientMetadata: ServiceMetadata;
    static url:string;

    constructor(){
        super(IssuerClient.url, IssuerClient.clientMetadata);
    }

    async sign(data: KeyValue): Promise<string>{
        return Axios.post(
            `${this.url}/issue`,
            data,
            {
                headers:{
                    'Service-Name': this.access.name,
                    'Service-Signature': this.access.signature
                }
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.data;
            }
            return "";
        })
    }

    async verify(token: string): Promise<KeyValue>{
        return Axios.post(
            `${this.url}/decode`,
            {token: token},
            {
                headers:{
                    'Service-Name': this.access.name,
                    'Service-Signature': this.access.signature
                }
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.data;
            }
            return {};
        })
    }
}

export default IssuerClient;