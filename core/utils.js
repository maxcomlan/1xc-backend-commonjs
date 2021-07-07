"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAuthorizationHeader = exports.extractApiKey = exports.extractBearerToken = exports.capitalize = exports.errors = exports.success = void 0;
const BEARER_EXP = RegExp("^bearer\\s+(?<token>.*)", "i");
const UAT_EXP = RegExp("^uat\\s+(?<token>.*)", "i");
function success(data = undefined) {
    let res = {
        success: true
    };
    if (data) {
        res.data = data;
    }
    return res;
}
exports.success = success;
function errors(errors = undefined) {
    let res = {
        success: false
    };
    if (errors) {
        res.errors = errors;
    }
    return res;
}
exports.errors = errors;
function capitalize(str) {
    let first = str.charAt(0);
    return first.toUpperCase() + str.substring(1);
}
exports.capitalize = capitalize;
function extractBearerToken(str) {
    let result = BEARER_EXP.exec(str);
    if (result && result.groups) {
        return result.groups.token;
    }
    return "";
}
exports.extractBearerToken = extractBearerToken;
function extractApiKey(str) {
    let result = UAT_EXP.exec(str);
    if (result && result.groups) {
        return result.groups.token;
    }
    return "";
}
exports.extractApiKey = extractApiKey;
function parseAuthorizationHeader(str) {
    if (BEARER_EXP.test(str)) {
        return { format: "bearer", token: extractBearerToken(str) };
    }
    else if (UAT_EXP.test(str)) {
        return { format: "uat", token: extractApiKey(str) };
    }
    return undefined;
}
exports.parseAuthorizationHeader = parseAuthorizationHeader;
