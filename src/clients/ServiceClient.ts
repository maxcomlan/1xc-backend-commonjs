export interface ServiceAccess{
    name: string;
    signature: string;
}

export class ServiceClient{
    public url: string;
    public access: ServiceAccess;

    constructor(url: string, access: ServiceAccess){
        this.url = url;
        this.access = access;
    }
}