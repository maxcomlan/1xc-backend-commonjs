"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuerClient = void 0;
const ServiceClient_1 = require("./ServiceClient");
const axios_1 = __importDefault(require("axios"));
class IssuerClient extends ServiceClient_1.ServiceClient {
    static clientMetadata;
    static url;
    constructor() {
        super(IssuerClient.url, IssuerClient.clientMetadata);
    }
    async sign(data) {
        return axios_1.default.post(`${this.url}/issue`, data, {
            headers: {
                'Service-Name': this.access.name,
                'Service-Signature': this.access.signature
            }
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.data;
            }
            return "";
        });
    }
    async verify(token, format = "bearer") {
        return axios_1.default.post(`${this.url}/decode?format=${format}`, { token: token }, {
            headers: {
                'Service-Name': this.access.name,
                'Service-Signature': this.access.signature
            }
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.data;
            }
            return {};
        });
    }
}
exports.IssuerClient = IssuerClient;
exports.default = IssuerClient;
