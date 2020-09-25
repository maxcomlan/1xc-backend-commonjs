export interface ServiceAccess {
    name: string;
    signature: string;
}
export declare class ServiceClient {
    url: string;
    access: ServiceAccess;
    constructor(url: string, access: ServiceAccess);
}
