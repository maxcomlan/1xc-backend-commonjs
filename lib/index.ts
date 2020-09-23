import { NetworkRule } from "./investor";
import { ScopedRole } from "./roles";

interface Indexable{
    id: string;
}

interface Patchable{
    updatedAt: number;
}

interface Insertable{
    insertedAt: number;
}

export interface Money{
    amount: number;
    currency: string;
}

export interface SystemProperties{
    wallets:{
        businessAccountFee: Money;
        allowedCurrencies: string[];
    },
    investment?: NetworkRule;
}

export interface OnlineApiAccount{
    publicKey: string;
    privateKey: string;
}

export interface CoinbaseAccount extends OnlineApiAccount{}

export interface FedaPayAccount extends OnlineApiAccount{}

export interface PerfectMoneyAccount{
    accountId: string;
    passphrase: string;
    alternatePassphrase: string;
}

export type MethodAccountType = "perfectmoney" | "coinbase" | "fedapay";
export interface MethodAccount extends Indexable{
    type: MethodAccountType;
    details: OnlineApiAccount | FedaPayAccount | CoinbaseAccount | PerfectMoneyAccount;
}

export interface KeyValue{
    [key: string]: any;
}

export type Gender = "male" | "female";

export type UserStatus = "active" | "disabled";
export interface User extends Indexable, Insertable, Patchable{
    firstName: string;
    lastName: string;
    gender: Gender;
    email: string;
    passwordHash?: string;
}

export interface AccountVerificationCode extends Indexable{
    userId: string;
    code: string;
}

export interface Customer extends User{
    status: UserStatus;
    country: string;
    verified: boolean;
    isMerchant: boolean;
}

export type WalletType = "business" | "standard";
export interface Wallet extends Indexable, Insertable, Patchable{
    userId: string;
    type: WalletType;
    balance: Money;
    isMain: boolean;
}

export type WalletHistoryType = "commission" | "normal";
export interface WalletHistory extends Indexable, Insertable, Money{
    type: WalletHistoryType;
    walletId: string,
    memo: string;
}

export interface WalletRegistrationEntry extends Indexable, Insertable{
    userId: string;
    walletId: string;
    sourceWalletId: string;
    historyId: string;
    fee: Money;
}

export interface Admin extends Indexable, Insertable{
    firstName: string;
    lastName: string;
    gender: Gender;
    alias: string;
    passwordHash?: string;
    status: "active"|"disabled";
    genesis: boolean;
}

export interface AdminWithRoles{
    profile: Admin;
    roles: ScopedRole[];
}

export type DocType = "cni" | "ifu" | "rc";

export interface Document{
    docType: DocType;
    fileType: string;
    name: string;
    verified: boolean;
}

export type BusinessProfileStatus  = "pending" | "verified" | "rejected";

export interface BusinessProfile extends Indexable, Insertable, Patchable{
    name: string;
    userId: string;
    country: string;
    city: string;
    phone: string;
    email: string;
    documents: Document[];
    verificationDate?: number;
    status: BusinessProfileStatus;
}

export type MethodCategory = "banking" | "mobile" | "transfer" | "cryptocurrency";

export interface AmountLimitation{
    minAmount: number;
    maxAmount: number;
    staticFee: number;
    dynamicFee: number;
    emitterFee: number;
    percentage: number;
    pattern: string;
}

export interface BankingDetails extends AmountLimitation{
    currency: string;
    account: string;
}

export interface MobileDetails extends AmountLimitation{
    address: string;
    currency: string;
    country: string;
}

export interface TransferDetails extends AmountLimitation{
    currency: string;
}

export interface CryptoCurrencyDetails extends AmountLimitation{}

export type MethodDetails = BankingDetails | MobileDetails | TransferDetails | CryptoCurrencyDetails;

export interface Method extends Indexable, Insertable, Patchable{
    category: MethodCategory;
    type: string;
    label: string;
    icon: string;
    color?: string;
    allowSell: boolean;
    allowBuy: boolean;
    addedAt?: number;
    details: MethodDetails;
}

export type TicketStatus =  "pending" | "confirmed" | "cancelled" | "paid";
export interface Ticket extends Indexable{
    id: string;
    userId: string;
    source: Method;
    dest: Method;
    amount: number;
    rate: number;
    address: string;
    allowed: number | string;
    enableCommission: number | string;
    status: TicketStatus;
    emissionDate: number;
    confirmedAt?: number;
    paidAt?: number;
    cancelledAt?: number;
}

export interface TicketPayment extends Indexable, Money{
    ticketId: string;
    type: string;
    address: string;
    paymentUrl: string;
}

export type TxType = "in" | "out";

export interface Transaction extends Indexable, Insertable{
    ticketId: string;
    variant: TxType;
    type: string;
    amount: number;
    currency: string;
    source: string;
    dest: string;
    reference: string;
    timestamp: number;
}

export interface ExchangeCalculation{
    source: string;
    dest: string;
    rate: number;
    amount: number;
    converted: number;
    rateApplied: number;
}