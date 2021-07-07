export declare function success(data?: any): any;
export declare function errors(errors?: any): any;
export declare function capitalize(str: string): string;
export declare function extractBearerToken(str: string): string;
export declare function extractApiKey(str: string): string;
export declare function parseAuthorizationHeader(str: string): {
    format: string;
    token: string;
} | undefined;
