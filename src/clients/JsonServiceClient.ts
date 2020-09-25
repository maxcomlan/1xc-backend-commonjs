import Axios from "axios";
import { KeyValue } from "..";
import { ServiceMetadata } from "../peers";
import { ServiceClient } from "./ServiceClient";

export class JsonServiceClient<Item = KeyValue, IndexedKey = string, CreationType = KeyValue, UpdateType = KeyValue> extends ServiceClient{

    constructor(url: string, auth: ServiceMetadata){
        super(url,auth);
    }

    get defaultHeaders(){
        return {
            'Service-Name': this.access.name,
            'Service-Signature': this.access.signature
        };
    }

    async create(item: CreationType):Promise<boolean>{
        return Axios.post(
            this.url,
            item,
            {
                withCredentials: true,
                headers: {
                    ...this.defaultHeaders,
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.success;
            }
        })
    }

    async read(key: IndexedKey):Promise<Item>{
        return Axios.get(
            `${this.url}/${key}`,
            {
                withCredentials: true,
                headers: this.defaultHeaders
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.data;
            }
        })
    }
    
    async readAll():Promise<Item[]>{
        return Axios.get(
            this.url,
            {
                headers: this.defaultHeaders
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.data;
            }
        })
    }

    async update(key: IndexedKey, item: UpdateType):Promise<boolean>{
        return Axios.patch(
            `${this.url}/${key}`,
            item,
            {
                headers: {
                    ...this.defaultHeaders,
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.success;
            }
        })
    }

    async delete(key: IndexedKey):Promise<boolean>{
        return Axios.delete(
            `${this.url}/${key}`,
            {
                headers: {
                    ...this.defaultHeaders,
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.success;
            }
        })
    }
}