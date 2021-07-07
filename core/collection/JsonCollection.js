"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCollection = void 0;
const JsonDocFilter_1 = require("./JsonDocFilter");
class JsonCollection {
    db;
    table;
    constructor(table, db) {
        this.db = db;
        this.table = table;
        this.getCreationScript().forEach((sql) => {
            this.db.query(sql);
        });
    }
    get defaultScript() {
        return `CREATE TABLE IF NOT EXISTS ${this.table}(
            id VARCHAR(255) NOT NULL,
            data JSON NOT NULL,
            primary key(id)
        )`;
    }
    getCreationScript() {
        return [
            this.defaultScript
        ];
    }
    async create(doc) {
        return new Promise((resolve, reject) => {
            this.db.query(`INSERT INTO ${this.table}(id, data) VALUES(?,?)`, [doc.id, JSON.stringify(doc.data)], (err) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }
    async read(key) {
        return new Promise((resolve, reject) => {
            this.db.query(`SELECT * FROM ${this.table} WHERE id = ?`, [key], (err, res, fields) => {
                if (err) {
                    reject(err);
                }
                if (res && res.length && res.length > 0) {
                    resolve(this.rawToDocument(res[0]));
                }
                resolve(undefined);
            });
        });
    }
    async readOneWhere(filter = new JsonDocFilter_1.JsonDocFilter()) {
        return new Promise((resolve, reject) => {
            this.db.query(`SELECT * FROM ${this.table} ${filter.where}`, filter.keys, (err, res) => {
                if (err) {
                    reject(err);
                }
                if (res && res.length && res.length > 0) {
                    resolve(this.rawToDocument(res[0]));
                }
                resolve(undefined);
            });
        });
    }
    async readAll(filter = new JsonDocFilter_1.JsonDocFilter()) {
        return new Promise((resolve, reject) => {
            this.db.query(`SELECT * FROM ${this.table} ${filter.where}`, filter.keys, (err, rows) => {
                if (err) {
                    reject(err);
                }
                if (rows) {
                    resolve(rows.map((r) => this.rawToDocument(r)));
                }
                resolve([]);
            });
        });
    }
    async update(doc) {
        return new Promise((resolve, reject) => {
            this.db.query(`UPDATE ${this.table} SET data = ? WHERE id = ?`, [JSON.stringify(doc.data), doc.id], (err) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }
    async delete(key) {
        return new Promise((resolve, reject) => {
            this.db.query(`DELETE FROM ${this.table} WHERE id = ?`, [key], (err) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }
    rawToDocument(raw) {
        return {
            id: raw.id,
            data: JSON.parse(raw.data)
        };
    }
}
exports.JsonCollection = JsonCollection;
