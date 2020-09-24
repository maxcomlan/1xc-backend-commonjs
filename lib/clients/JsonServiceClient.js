"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonServiceClient = void 0;
const axios_1 = __importDefault(require("axios"));
const ServiceClient_1 = require("./ServiceClient");
class JsonServiceClient extends ServiceClient_1.ServiceClient {
    constructor(url, auth) {
        super(url, auth);
    }
    get defaultHeaders() {
        return {
            'Service-Name': this.access.name,
            'Service-Signature': this.access.signature
        };
    }
    async create(item) {
        return axios_1.default.post(this.url, item, {
            withCredentials: true,
            headers: {
                ...this.defaultHeaders,
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.success;
            }
        });
    }
    async read(key) {
        return axios_1.default.get(`${this.url}/${key}`, {
            withCredentials: true,
            headers: this.defaultHeaders
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.data;
            }
        });
    }
    async readAll() {
        return axios_1.default.get(this.url, {
            headers: this.defaultHeaders
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.data;
            }
        });
    }
    async update(key, item) {
        return axios_1.default.patch(`${this.url}/${key}`, item, {
            headers: {
                ...this.defaultHeaders,
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.success;
            }
        });
    }
    async delete(key) {
        return axios_1.default.delete(`${this.url}/${key}`, {
            headers: {
                ...this.defaultHeaders,
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.success;
            }
        });
    }
}
exports.JsonServiceClient = JsonServiceClient;
