import { Logger } from "../Logger";
import { ServiceMetadata } from "../peers";
import { NextFunction, Request, Response } from "express-serve-static-core";
export declare function userMiddlewareAuthenticator(logger: Logger, apiUrl: string, metadata: ServiceMetadata): (req: Request, res: Response, next: NextFunction) => Promise<void>;
