import { ATTRIBUTE_GET_ITEMS_REQUEST, ATTRIBUTE_GET_ITEMS_RESPONSE } from "./constants";

export const getAttributeRequest = (pageNumber?: number, pageSize?: number) => ({
    type: ATTRIBUTE_GET_ITEMS_REQUEST,
    payload: { pageNumber, pageSize }
});
 
export const getAttributeResponse = (data: any, status: string, message: string, errors: string) => ({
    type: ATTRIBUTE_GET_ITEMS_RESPONSE,
    payload: { data, status, message, errors }
})