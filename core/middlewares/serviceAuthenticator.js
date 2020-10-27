"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceMiddlewareAuthenticator = void 0;
function serviceMiddlewareAuthenticator() {
    return (req, res, next) => {
        let serviceName = req.headers['service-name'];
        let serviceSignature = req.headers['service-signature'];
        if (serviceName && serviceSignature) {
            req.redis.get(`${serviceName}.metadata`, (err, str) => {
                if (str) {
                    let meta = JSON.parse(str);
                    if (meta.signature === serviceSignature) {
                        req.peer = {
                            type: "service",
                            data: meta
                        };
                    }
                }
                next();
            });
        }
        else {
            next();
        }
    };
}
exports.serviceMiddlewareAuthenticator = serviceMiddlewareAuthenticator;
