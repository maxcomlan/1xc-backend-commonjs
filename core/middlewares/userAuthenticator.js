"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddlewareAuthenticator = void 0;
const clients_1 = require("../clients");
const utils_1 = require("../utils");
function userMiddlewareAuthenticator(logger, apiUrl, metadata) {
    return async (req, res, next) => {
        try {
            let auth = req.headers['authorization'];
            if (req.peer) {
                next();
            }
            else if (auth) {
                clients_1.configureProxyAccess(apiUrl, metadata);
                let { format, token } = (utils_1.parseAuthorizationHeader(auth) || {});
                if (!token) {
                    return next();
                }
                let issuerClient = new clients_1.IssuerClient();
                let data = await issuerClient.verify(token, format);
                if (data && data.type) {
                    if (data.type === "user") {
                        req.peer = {
                            type: "user",
                            data: data
                        };
                    }
                    else if (data.type === "admin") {
                        ///Fetch admin and roles to check if the admin has required roles and if he can be allowed
                        let adminProvider = new clients_1.AdminServiceClient();
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
                            };
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
    };
}
exports.userMiddlewareAuthenticator = userMiddlewareAuthenticator;
