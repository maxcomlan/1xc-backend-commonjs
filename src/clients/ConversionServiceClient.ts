import Axios from "axios";
import { ExchangeCalculation } from "..";
import { ServiceMetadata } from "../peers";
import { ServiceClient } from "./ServiceClient";

export class ConversionServiceClient extends ServiceClient{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(ConversionServiceClient.url, ConversionServiceClient.clientMetadata);
    }

    async getRate(from: string, to: string):Promise<ExchangeCalculation|undefined>{
        return Axios.get(
            `${this.url}/${from}/${to}`,
            {
                withCredentials: true,
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

export default ConversionServiceClient;