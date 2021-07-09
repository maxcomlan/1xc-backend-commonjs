
const BEARER_EXP = RegExp("^bearer\\s+(?<token>.*)","i");
const UAT_EXP = RegExp("^uat\\s+(?<token>.*)","i");

export function success(data: any = undefined){
    let res: any = {
        success: true
    };
    if(data){
        res.data = data;
    }
    return res;
}

export function errors(errors: any = undefined){
    let res: any = {
        success: false
    };
    if(errors){
        res.errors = errors;
    }
    return res;
}

export function capitalize(str: string){
    let first  = str.charAt(0);
    return first.toUpperCase() + str.substring(1);
}

export function extractBearerToken(str: string){
    let result = BEARER_EXP.exec(str);
    if(result && result.groups){
        return result.groups.token;
    }
    return "";
}

export function extractApiKey(str: string) {
    let result = UAT_EXP.exec(str);
    if(result && result.groups){
        return result.groups.token;
    }
    return "";
}

export function parseAuthorizationHeader(str: string) {
    if(BEARER_EXP.test(str)) {
        return {format: "bearer", token: extractBearerToken(str)};
    }
    else if(UAT_EXP.test(str)) {
        return {format: "uat", token: extractApiKey(str) };
    }
    return undefined;
}