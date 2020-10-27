import { Logger } from "../Logger";
import { configureProxyAccess, IssuerClient, AdminServiceClient } from "../clients";
import { ServiceMetadata, UserSESData, UserUATData } from "../peers";
import { extractBearerToken } from "../utils";
import { NextFunction, Request, Response } from "express-serve-static-core";

export function userMiddlewareAuthenticator(logger: Logger, apiUrl: string, metadata: ServiceMetadata){

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            let auth = req.headers['authorization'] as string;
            if (req.peer) {
                next();
            }
            else if (auth) {
                configureProxyAccess(apiUrl, metadata);
    
                let token = extractBearerToken(auth);
                if (!token) {
                    return next();
                }
                let issuerClient = new IssuerClient();
                let data = await issuerClient.verify(token);
                if (data && data.type) {
                    if (data.type === "user") {
                        req.peer = {
                            type: "user",
                            data: data as (UserSESData | UserUATData)
                        }
                    }
                    else if (data.type === "admin") {
                        ///Fetch admin and roles to check if the admin has required roles and if he can be allowed
                        let adminProvider = new AdminServiceClient();
                        let adminWithRoles = await adminProvider.readWithRole(data.userId);
                        if (adminWithRoles && adminWithRoles.profile.status === "active") {
                            req.peer = {
                                type: "admin",
                                data: {
                                    type: "admin",
                                    method: "ses",
                                    userId: adminWithRoles.profile.id,
                                    firstName: adminWithRoles.profile.firstName,
                                    lastName: adminWithRoles.profile.lastName,
                                    roles: adminWithRoles.roles
                                }
                            }
                        }
                    }
                }
                next();
            }
            else {
                next();
            }
        }
        catch (err) {
            logger.error(err.message || err.toString());
            next();
        }
    }
}