"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDocFilter = exports.JsonCollection = exports.rawToDoc = void 0;
function rawToDoc(raw) {
    return JSON.parse(raw.data);
}
exports.rawToDoc = rawToDoc;
var JsonCollection_1 = require("./JsonCollection");
Object.defineProperty(exports, "JsonCollection", { enumerable: true, get: function () { return JsonCollection_1.JsonCollection; } });
var JsonDocFilter_1 = require("./JsonDocFilter");
Object.defineProperty(exports, "JsonDocFilter", { enumerable: true, get: function () { return JsonDocFilter_1.JsonDocFilter; } });
