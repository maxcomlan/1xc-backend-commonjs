import { JsonKeyMatch, SQLJoin } from ".";
export declare class JsonDocFilter {
    filters: JsonKeyMatch[];
    combine: SQLJoin;
    constructor(combine?: SQLJoin, ...filters: JsonKeyMatch[]);
    get where(): string;
    get keys(): any[];
}
export default JsonDocFilter;
