import Axios from "axios";
import { Money, Wallet, WalletHistoryType } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";


interface CreditOrDebitResult {
    data: string; /// history Id;
}

export class WalletServiceClient extends JsonServiceClient<Wallet>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(WalletServiceClient.url, WalletServiceClient.clientMetadata);
    }

    async readMainWallet(userId: string):Promise<Wallet|undefined>{
        return Axios.get(
            this.url+`/?user=${userId}&principal=true`,
            {
                headers: this.defaultHeaders
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.data[0] || undefined;
            }
            return undefined;
        })
    }

    async debit(wallet: string, money: Money, memo: string, type: WalletHistoryType = "normal"){
        let toPost = {
            ...money,
            memo,
            type
        }

        return Axios.post(
            `${this.url}/${wallet}/debit`,
            toPost,
            {
                withCredentials: true,
                headers: {
                    ...this.defaultHeaders,
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data as CreditOrDebitResult;
            }
        })
    }

    async credit(wallet: string, money: Money, memo: string, type: WalletHistoryType = "normal"){
        let toPost = {
            ...money,
            memo,
            type
        }

        return Axios.post(
            `${this.url}/${wallet}/credit`,
            toPost,
            {
                withCredentials: true,
                headers: {
                    ...this.defaultHeaders,
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data as CreditOrDebitResult;
            }
        })
    }
}

export default WalletServiceClient;