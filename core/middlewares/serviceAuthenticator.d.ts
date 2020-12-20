import { NextFunction, Request, Response } from "express-serve-static-core";
export declare function serviceMiddlewareAuthenticator(): (req: Request, res: Response, next: NextFunction) => void;
