import { LIST_STATUS_ACTION } from "../redux/rootConstant";
import { ResponseState } from "./types";
 
export const handleValidateServer = (errorServer: any) => {
    let errors: string[] = [];
    if (errorServer.hasOwnProperty('violations')) {
        errors = errorServer.violations.reduce((c: any, n: any) => [...c, n.message], []);
    } else if (errorServer?.data.hasOwnProperty('violations')) {
        errors = errorServer?.data.violations.reduce((c: any, n: any) => [...c, n.message], []);
    } else {
        errors.push(errorServer.message);
    }
    return errors;
};
 
export const removeEmptyArrayOrObjects = (obj: any): any => {
    const finalObj: any = {};
    Object.keys(obj).forEach((key) => {
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const nestedObj = removeEmptyArrayOrObjects(obj[key]);
            if (Object.keys(nestedObj).length) {
                finalObj[key] = nestedObj;
            }
        } else if (Array.isArray(obj[key])) {
            if (obj[key].length) {
                obj[key].forEach((x: any) => {
                    const nestedObj = removeEmptyArrayOrObjects(x);
                    if (Object.keys(nestedObj).length) {
                        finalObj[key] = finalObj[key] ? [...finalObj[key], nestedObj] : [nestedObj];
                    }
                });
            }
        } else if (obj[key] !== '' && obj[key] !== undefined && obj[key] !== null) {
            finalObj[key] = obj[key];
        }
    });
    return finalObj;
};
 
export const isSuccessfullyLoading = (responseData: ResponseState<any>) => {
    return responseData && responseData.status === LIST_STATUS_ACTION.LOADING;
};
 
export const isSuccessfullyResponse = (responseData: ResponseState<any>) => {
    return responseData && responseData.status === LIST_STATUS_ACTION.SUCCESS;
};
 
export const isFailedResponse = (responseData: ResponseState<any>) => {
    return responseData && responseData.status === LIST_STATUS_ACTION.FAILED;
};
 
export const getApiResponse = <T,>(responseData: ResponseState<any>): T => {
    return responseData.data;
};
 
export const getApiErrorResponse = (responseData: ResponseState<any>) => {
    return responseData.data && responseData.data.message;
};