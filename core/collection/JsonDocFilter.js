"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDocFilter = void 0;
class JsonDocFilter {
    constructor(combine = "AND", ...filters) {
        this.filters = filters;
        this.combine = combine;
    }
    get where() {
        let parsedWhere = this.filters.map((w) => `data->>'\$.${w.key}' = ?`).join(` ${this.combine} `);
        let keys = this.keys;
        let whereSection = "";
        if (this.filters.length > 0) {
            whereSection = `WHERE ${parsedWhere}`;
        }
        return whereSection;
    }
    get keys() {
        return this.filters.map((w) => w.value);
    }
}
exports.JsonDocFilter = JsonDocFilter;
exports.default = JsonDocFilter;
