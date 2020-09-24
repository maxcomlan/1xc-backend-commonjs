"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceClient = void 0;
const JsonServiceClient_1 = require("./JsonServiceClient");
class UserServiceClient extends JsonServiceClient_1.JsonServiceClient {
    constructor() {
        super(UserServiceClient.url, UserServiceClient.clientMetadata);
    }
}
exports.UserServiceClient = UserServiceClient;
