"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessServiceClient = void 0;
const JsonServiceClient_1 = require("./JsonServiceClient");
class BusinessServiceClient extends JsonServiceClient_1.JsonServiceClient {
    constructor() {
        super(BusinessServiceClient.url, BusinessServiceClient.clientMetadata);
    }
}
exports.BusinessServiceClient = BusinessServiceClient;
exports.default = BusinessServiceClient;
