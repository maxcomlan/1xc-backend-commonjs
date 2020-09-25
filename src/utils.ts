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
    let regexp = RegExp("^bearer\\s+(?<token>.*)","i");
    let result = regexp.exec(str);
    if(result && result.groups){
        return result.groups.token;
    }
    return "";
}