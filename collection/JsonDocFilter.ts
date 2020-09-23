import { JsonKeyMatch, SQLJoin } from ".";

export class JsonDocFilter{
    public filters: JsonKeyMatch[];
    public combine: SQLJoin;

    public constructor(combine: SQLJoin = "AND", ...filters: JsonKeyMatch[]){
        this.filters = filters;
        this.combine = combine;
    }

    public get where(){
        let parsedWhere = this.filters.map((w) => `data->>'\$.${w.key}' = ?`).join(` ${this.combine} `);
        let keys = this.keys;

        let whereSection = "";
        if(this.filters.length > 0){
            whereSection = `WHERE ${parsedWhere}`;
        }
        return whereSection;
    }

    public get keys(){
        return this.filters.map((w) => w.value);
    }
}