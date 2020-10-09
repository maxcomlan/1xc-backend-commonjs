import Axios from "axios";
import { CoinbaseAccount, FedaPayAccount, MethodAccount, MethodAccountType, OnlineApiAccount, PerfectMoneyAccount } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";

export class MethodAccountServiceClient extends JsonServiceClient<MethodAccount>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(MethodAccountServiceClient.url, MethodAccountServiceClient.clientMetadata);
    }

    private async getFirst(type: MethodAccountType){
        return Axios.get(
            this.url+"?type="+type,
            {
                headers: this.defaultHeaders
            }
        )
        .then((res) => {
            if(res.data.success){
                if(res.data.data.length && res.data.data.length > 0){
                    return res.data.data[0] as MethodAccount;
                }
                return undefined;
            }
        })
    }

    async getFirstCoinbase(){
        return this.getFirst("coinbase")
        .then((account) => {
            if(account){
                return account.details as  CoinbaseAccount;
            }
            return undefined;
        })
    }

    async getFirstPerfectMoney(){
        return this.getFirst("perfectmoney")
        .then((account) => {
            if(account){
                return account.details as  PerfectMoneyAccount;
            }
            return undefined;
        })
    }

    async getFirstFedaPay(){
        return this.getFirst("fedapay")
        .then((account) => {
            if(account){
                return account.details as  FedaPayAccount;
            }
            return undefined;
        })
    }
}

export default MethodAccountServiceClient;