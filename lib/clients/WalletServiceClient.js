"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletServiceClient = void 0;
const axios_1 = __importDefault(require("axios"));
const JsonServiceClient_1 = require("./JsonServiceClient");
class WalletServiceClient extends JsonServiceClient_1.JsonServiceClient {
    constructor() {
        super(WalletServiceClient.url, WalletServiceClient.clientMetadata);
    }
    async readMainWallet(userId) {
        return axios_1.default.get(this.url + `/?user=${userId}&principal=true`, {
            headers: this.defaultHeaders
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.data[0] || undefined;
            }
            return undefined;
        });
    }
    async debit(wallet, money, memo, type = "normal") {
        let toPost = {
            ...money,
            memo,
            type
        };
        return axios_1.default.post(`${this.url}/${wallet}/debit`, toPost, {
            withCredentials: true,
            headers: {
                ...this.defaultHeaders,
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then((res) => {
            if (res.data.success) {
                return res.data;
            }
        });
    }
    async credit(wallet, money, memo, type = "normal") {
        let toPost = {
            ...money,
            memo,
            type
        };
        return axios_1.default.post(`${this.url}/${wallet}/credit`, toPost, {
            withCredentials: true,
            headers: {
                ...this.defaultHeaders,
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then((res) => {
            if (res.data.success) {
                return res.data;
            }
        });
    }
}
exports.WalletServiceClient = WalletServiceClient;
exports.default = WalletServiceClient;
