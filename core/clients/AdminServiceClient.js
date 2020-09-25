"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminServiceClient = void 0;
const axios_1 = __importDefault(require("axios"));
const JsonServiceClient_1 = require("./JsonServiceClient");
class AdminServiceClient extends JsonServiceClient_1.JsonServiceClient {
    constructor() {
        super(AdminServiceClient.url, AdminServiceClient.clientMetadata);
    }
    async readWithRole(id) {
        return axios_1.default.get(`${this.url}/${id}/with-roles`, {
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
exports.AdminServiceClient = AdminServiceClient;
exports.default = AdminServiceClient;
