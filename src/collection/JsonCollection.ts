import { RawDocument, JsonDocument, JsonKeyMatch, SQLJoin } from ".";
import { JsonDocFilter } from "./JsonDocFilter";
import { PoolConnection } from "mysql";
import { KeyValue } from "..";

export class JsonCollection<T extends KeyValue = KeyValue>{
    public db: PoolConnection;
    public table: string;

    public constructor(table: string, db: PoolConnection){
        this.db = db;
        this.table = table;

        this.getCreationScript().forEach((sql) => {
            this.db.query(sql);
        })
    }

    public get defaultScript(){
        return `CREATE TABLE IF NOT EXISTS ${this.table}(
            id VARCHAR(255) NOT NULL,
            data JSON NOT NULL,
            primary key(id)
        )`
    }

    public getCreationScript(){
        return [
            this.defaultScript
        ];
    }

    async create(doc: JsonDocument<T>):Promise<boolean>{
        return new Promise((resolve, reject)=>{
            this.db.query(`INSERT INTO ${this.table}(id, data) VALUES(?,?)`, [doc.id, JSON.stringify(doc.data)],(err) => {
                if(err){
                    reject(err);
                }
                resolve(true);
            });
        });
    }

    async read(key: string): Promise<JsonDocument<T>|undefined>{
        return new Promise((resolve, reject) => {
            this.db.query(`SELECT * FROM ${this.table} WHERE id = ?`,[key],(err, res, fields) => {
                if(err){
                    reject(err);
                }
                if(res && res.length && res.length > 0){
                    resolve(this.rawToDocument(res[0]))
                }
                resolve(undefined);
            })
        })
    }

    async readOneWhere(filter: JsonDocFilter = new JsonDocFilter()): Promise<JsonDocument<T>|undefined>{
        return new Promise((resolve, reject) => {
            this.db.query(`SELECT * FROM ${this.table} ${filter.where}`,filter.keys,(err, res) => {
                if(err){
                    reject(err);
                }
                if(res && res.length && res.length > 0){
                    resolve(this.rawToDocument(res[0]))
                }
                resolve(undefined);
            })
        })
    }

    async readAll(filter: JsonDocFilter = new JsonDocFilter()): Promise<JsonDocument<T>[]>{
        return new Promise((resolve, reject) => {
            this.db.query(`SELECT * FROM ${this.table} ${filter.where}`,filter.keys,(err, rows) => {
                if(err){
                    reject(err);
                }
                if(rows){
                    resolve(
                        (rows as Array<any>).map((r) => this.rawToDocument(r))
                    )
                }
                resolve([]);
            })
        })
    }

    async update(doc: JsonDocument<T>):Promise<boolean>{
        return new Promise((resolve, reject)=>{
            this.db.query(`UPDATE ${this.table} SET data = ? WHERE id = ?`, [JSON.stringify(doc.data), doc.id],(err) => {
                if(err){
                    reject(err);
                }
                resolve(true);
            });
        });
    }

    async delete(key: string):Promise<boolean>{
        return new Promise((resolve, reject) => {
            this.db.query(`DELETE FROM ${this.table} WHERE id = ?`,[key],(err) => {
                if(err){
                    reject(err);
                }
                resolve(true);
            })
        })
    }

    protected rawToDocument(raw: RawDocument){
        return {
            id: raw.id,
            data: JSON.parse(raw.data)
        }
    }
}