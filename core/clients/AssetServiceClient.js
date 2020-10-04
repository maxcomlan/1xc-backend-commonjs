"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetServiceClient = void 0;
const axios_1 = __importDefault(require("axios"));
const ServiceClient_1 = require("./ServiceClient");
class AssetServiceClient extends ServiceClient_1.ServiceClient {
    constructor() {
        super(AssetServiceClient.url, AssetServiceClient.clientMetadata);
    }
    async getMetadata(file) {
        return axios_1.default.get(`${this.url}/${file}/metadata`, {
            headers: {
                'Service-Name': this.access.name,
                'Service-Signature': this.access.signature
            }
        })
            .then((res) => {
            if (res.status === 200 && res.data.success) {
                return res.data.data;
            }
            return undefined;
        });
    }
    async removeFile(file) {
        return axios_1.default.delete(`${this.url}/${file}`, {
            headers: {
                'Service-Name': this.access.name,
                'Service-Signature': this.access.signature
            }
        })
            .then((res) => {
            if (res.status === 200 && res.data.success) {
                return true;
            }
            return false;
        });
    }
}
exports.AssetServiceClient = AssetServiceClient;
exports.default = AssetServiceClient;
