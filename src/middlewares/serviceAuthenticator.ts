import { NextFunction, Request, Response } from "express-serve-static-core";
import { ServiceMetadata, Peer } from "../peers";

export function serviceMiddlewareAuthenticator(){

    return (req: Request, res: Response, next: NextFunction) => {
        let serviceName = req.headers['service-name'] as string;
        let serviceSignature = req.headers['service-signature'] as string;
    
        if(serviceName && serviceSignature){
            req.redis.get(`${serviceName}.metadata`,(err, str)=>{
                if(str){
                    let meta: ServiceMetadata = JSON.parse(str);
                    if(meta.signature === serviceSignature){
                        req.peer = {
                            type: "service",
                            data: meta
                        }
                    }
                }
                next();
            })
        }
        else{
            next();
        }
    }
    
}