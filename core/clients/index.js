"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureProxyAccess = exports.configureClientMetadata = exports.configureProxyEndpoint = void 0;
const AdminServiceClient_1 = require("./AdminServiceClient");
const AssetServiceClient_1 = require("./AssetServiceClient");
const BusinessServiceClient_1 = require("./BusinessServiceClient");
const ConversionServiceClient_1 = require("./ConversionServiceClient");
const IssuerClient_1 = require("./IssuerClient");
const MethodAccountServiceClient_1 = require("./MethodAccountServiceClient");
const MethodServiceClient_1 = __importDefault(require("./MethodServiceClient"));
const PropertyServiceClient_1 = require("./PropertyServiceClient");
const UserServiceClient_1 = require("./UserServiceClient");
const WalletServiceClient_1 = require("./WalletServiceClient");
/**
 * Setup proxy url of every client available.
 * @param url - the base url of the proxy that interconnects queryable rest apis of services
 */
function configureProxyEndpoint(url) {
    AdminServiceClient_1.AdminServiceClient.url = url + "/admins";
    AssetServiceClient_1.AssetServiceClient.url = url + "/assets";
    BusinessServiceClient_1.BusinessServiceClient.url = url + "/business";
    ConversionServiceClient_1.ConversionServiceClient.url = url + "/rates";
    IssuerClient_1.IssuerClient.url = url + "/issuer";
    PropertyServiceClient_1.PropertyServiceClient.url = url + '/system/properties';
    MethodServiceClient_1.default.url = url + 'system/methods';
    MethodAccountServiceClient_1.MethodAccountServiceClient.url = url + '/system/methodaccounts';
    UserServiceClient_1.UserServiceClient.url = url + '/users';
    WalletServiceClient_1.WalletServiceClient.url = url + '/wallets';
}
exports.configureProxyEndpoint = configureProxyEndpoint;
/**
 * Setup client metadata on every client code connection to any service
 * @param meta the metadatas of the connecting client
 */
function configureClientMetadata(meta) {
    AdminServiceClient_1.AdminServiceClient.clientMetadata = meta;
    AssetServiceClient_1.AssetServiceClient.clientMetadata = meta;
    BusinessServiceClient_1.BusinessServiceClient.clientMetadata = meta;
    ConversionServiceClient_1.ConversionServiceClient.clientMetadata = meta;
    IssuerClient_1.IssuerClient.clientMetadata = meta;
    PropertyServiceClient_1.PropertyServiceClient.clientMetadata = meta;
    MethodServiceClient_1.default.clientMetadata = meta;
    MethodAccountServiceClient_1.MethodAccountServiceClient.clientMetadata = meta;
    UserServiceClient_1.UserServiceClient.clientMetadata = meta;
    WalletServiceClient_1.WalletServiceClient.clientMetadata = meta;
}
exports.configureClientMetadata = configureClientMetadata;
function configureProxyAccess(url, meta) {
    configureProxyEndpoint(url);
    configureClientMetadata(meta);
}
exports.configureProxyAccess = configureProxyAccess;
__exportStar(require("./AdminServiceClient"), exports);
__exportStar(require("./AssetServiceClient"), exports);
__exportStar(require("./BusinessServiceClient"), exports);
__exportStar(require("./ConversionServiceClient"), exports);
__exportStar(require("./IssuerClient"), exports);
__exportStar(require("./PropertyServiceClient"), exports);
__exportStar(require("./MethodServiceClient"), exports);
__exportStar(require("./MethodAccountServiceClient"), exports);
__exportStar(require("./UserServiceClient"), exports);
__exportStar(require("./WalletServiceClient"), exports);
__exportStar(require("./ServiceClient"), exports);
__exportStar(require("./JsonServiceClient"), exports);
