import { Money, Wallet, WalletHistoryType } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
interface CreditOrDebitResult {
    data: string;
}
export declare class WalletServiceClient extends JsonServiceClient<Wallet> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
    readMainWallet(userId: string): Promise<Wallet | undefined>;
    debit(wallet: string, money: Money, memo: string, type?: WalletHistoryType): Promise<CreditOrDebitResult | undefined>;
    credit(wallet: string, money: Money, memo: string, type?: WalletHistoryType): Promise<CreditOrDebitResult | undefined>;
}
export default WalletServiceClient;
