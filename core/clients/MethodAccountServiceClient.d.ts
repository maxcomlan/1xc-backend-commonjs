import { CoinbaseAccount, FedaPayAccount, MethodAccount, PerfectMoneyAccount } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
export declare class MethodAccountServiceClient extends JsonServiceClient<MethodAccount> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
    private getFirst;
    getFirstCoinbase(): Promise<CoinbaseAccount | undefined>;
    getFirstPerfectMoney(): Promise<PerfectMoneyAccount | undefined>;
    getFirstFedaPay(): Promise<FedaPayAccount | undefined>;
}
export default MethodAccountServiceClient;
