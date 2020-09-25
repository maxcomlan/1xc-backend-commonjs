"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonServiceClient = exports.ServiceClient = exports.WalletServiceClient = exports.UserServiceClient = exports.PropertyServiceClient = exports.IssuerClient = exports.ConversionServiceClient = exports.BusinessServiceClient = exports.AssetServiceClient = exports.AdminServiceClient = exports.configureProxyAccess = exports.configureClientMetadata = exports.configureProxyEndpoint = void 0;
const AdminServiceClient_1 = require("./AdminServiceClient");
const AssetServiceClient_1 = require("./AssetServiceClient");
const BusinessServiceClient_1 = require("./BusinessServiceClient");
const ConversionServiceClient_1 = require("./ConversionServiceClient");
const IssuerClient_1 = require("./IssuerClient");
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
    UserServiceClient_1.UserServiceClient.clientMetadata = meta;
    WalletServiceClient_1.WalletServiceClient.clientMetadata = meta;
}
exports.configureClientMetadata = configureClientMetadata;
function configureProxyAccess(url, meta) {
    configureProxyEndpoint(url);
    configureClientMetadata(meta);
}
exports.configureProxyAccess = configureProxyAccess;
var AdminServiceClient_2 = require("./AdminServiceClient");
Object.defineProperty(exports, "AdminServiceClient", { enumerable: true, get: function () { return AdminServiceClient_2.AdminServiceClient; } });
var AssetServiceClient_2 = require("./AssetServiceClient");
Object.defineProperty(exports, "AssetServiceClient", { enumerable: true, get: function () { return AssetServiceClient_2.AssetServiceClient; } });
var BusinessServiceClient_2 = require("./BusinessServiceClient");
Object.defineProperty(exports, "BusinessServiceClient", { enumerable: true, get: function () { return BusinessServiceClient_2.BusinessServiceClient; } });
var ConversionServiceClient_2 = require("./ConversionServiceClient");
Object.defineProperty(exports, "ConversionServiceClient", { enumerable: true, get: function () { return ConversionServiceClient_2.ConversionServiceClient; } });
var IssuerClient_2 = require("./IssuerClient");
Object.defineProperty(exports, "IssuerClient", { enumerable: true, get: function () { return IssuerClient_2.IssuerClient; } });
var PropertyServiceClient_2 = require("./PropertyServiceClient");
Object.defineProperty(exports, "PropertyServiceClient", { enumerable: true, get: function () { return PropertyServiceClient_2.PropertyServiceClient; } });
var UserServiceClient_2 = require("./UserServiceClient");
Object.defineProperty(exports, "UserServiceClient", { enumerable: true, get: function () { return UserServiceClient_2.UserServiceClient; } });
var WalletServiceClient_2 = require("./WalletServiceClient");
Object.defineProperty(exports, "WalletServiceClient", { enumerable: true, get: function () { return WalletServiceClient_2.WalletServiceClient; } });
var ServiceClient_1 = require("./ServiceClient");
Object.defineProperty(exports, "ServiceClient", { enumerable: true, get: function () { return ServiceClient_1.ServiceClient; } });
var JsonServiceClient_1 = require("./JsonServiceClient");
Object.defineProperty(exports, "JsonServiceClient", { enumerable: true, get: function () { return JsonServiceClient_1.JsonServiceClient; } });
