import { Admin, AdminWithRoles } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
export declare class AdminServiceClient extends JsonServiceClient<Admin> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
    readWithRole(id: string): Promise<AdminWithRoles>;
}
