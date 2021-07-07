"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodAccountServiceClient = void 0;
const axios_1 = __importDefault(require("axios"));
const JsonServiceClient_1 = require("./JsonServiceClient");
class MethodAccountServiceClient extends JsonServiceClient_1.JsonServiceClient {
    static clientMetadata;
    static url;
    constructor() {
        super(MethodAccountServiceClient.url, MethodAccountServiceClient.clientMetadata);
    }
    async getFirst(type) {
        return axios_1.default.get(this.url + "?type=" + type, {
            headers: this.defaultHeaders
        })
            .then((res) => {
            if (res.data.success) {
                if (res.data.data.length && res.data.data.length > 0) {
                    return res.data.data[0];
                }
                return undefined;
            }
        });
    }
    async getFirstCoinbase() {
        return this.getFirst("coinbase")
            .then((account) => {
            if (account) {
                return account.details;
            }
            return undefined;
        });
    }
    async getFirstPerfectMoney() {
        return this.getFirst("perfectmoney")
            .then((account) => {
            if (account) {
                return account.details;
            }
            return undefined;
        });
    }
    async getFirstFedaPay() {
        return this.getFirst("fedapay")
            .then((account) => {
            if (account) {
                return account.details;
            }
            return undefined;
        });
    }
}
exports.MethodAccountServiceClient = MethodAccountServiceClient;
exports.default = MethodAccountServiceClient;
