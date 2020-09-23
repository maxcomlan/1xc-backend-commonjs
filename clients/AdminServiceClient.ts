import Axios from "axios";
import { Admin } from "..";
import { AdminWithRoles } from "..";
import { ServiceMetadata } from "../peer-types";
import { JsonServiceClient } from "./JsonServiceClient";

export class AdminServiceClient extends JsonServiceClient<Admin>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(AdminServiceClient.url, AdminServiceClient.clientMetadata);
    }

    async readWithRole(id: string):Promise<AdminWithRoles>{
        return Axios.get(
            `${this.url}/${id}/with-roles`,
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
}