"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticators = void 0;
const serviceAuthenticator_1 = require("./serviceAuthenticator");
const userAuthenticator_1 = require("./userAuthenticator");
exports.Authenticators = {
    service: serviceAuthenticator_1.serviceMiddlewareAuthenticator,
    user: userAuthenticator_1.userMiddlewareAuthenticator
};
