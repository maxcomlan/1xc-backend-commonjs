"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionServiceClient = void 0;
const axios_1 = __importDefault(require("axios"));
const ServiceClient_1 = require("./ServiceClient");
class ConversionServiceClient extends ServiceClient_1.ServiceClient {
    constructor() {
        super(ConversionServiceClient.url, ConversionServiceClient.clientMetadata);
    }
    async getRate(from, to) {
        return axios_1.default.get(`${this.url}/${from}/${to}`, {
            withCredentials: true,
            headers: {
                'Service-Name': this.access.name,
                'Service-Signature': this.access.signature
            }
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.data;
            }
            return undefined;
        });
    }
}
exports.ConversionServiceClient = ConversionServiceClient;
exports.default = ConversionServiceClient;
