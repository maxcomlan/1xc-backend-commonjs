"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractBearerToken = exports.capitalize = exports.errors = exports.success = void 0;
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
    let regexp = RegExp("^bearer\\s+(?<token>.*)", "i");
    let result = regexp.exec(str);
    if (result && result.groups) {
        return result.groups.token;
    }
    return "";
}
exports.extractBearerToken = extractBearerToken;
