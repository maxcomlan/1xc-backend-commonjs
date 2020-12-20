"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceClient = void 0;
const JsonServiceClient_1 = require("./JsonServiceClient");
const axios_1 = __importDefault(require("axios"));
class UserServiceClient extends JsonServiceClient_1.JsonServiceClient {
    constructor() {
        super(UserServiceClient.url, UserServiceClient.clientMetadata);
    }
    async getTokenData(token) {
        return axios_1.default.get(`${this.url}/uat/${token}`, {
            withCredentials: true,
            headers: this.defaultHeaders
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.data;
            }
        });
    }
}
exports.UserServiceClient = UserServiceClient;
exports.default = UserServiceClient;
