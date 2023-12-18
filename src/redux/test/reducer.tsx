import { LIST_STATUS_ACTION } from "../rootConstant";
import { ATTRIBUTE_GET_ITEMS_REQUEST, ATTRIBUTE_GET_ITEMS_RESPONSE, } from "./constants";
import { AttributeModel } from "./models";
 
export type ATTRIBUTE_STATE = {
    attribute: {
        data: AttributeModel[];
        status: string;
    };
};
 
export const INIT_STATE: ATTRIBUTE_STATE = {
    attribute: {
        data: [],
        status: LIST_STATUS_ACTION.LOADING,
    },
};
 
const attributeReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case ATTRIBUTE_GET_ITEMS_REQUEST:
            return {
                ...state,
                attribute: {
                    data: [],
                    status: LIST_STATUS_ACTION.LOADING,
                },
            };
        case ATTRIBUTE_GET_ITEMS_RESPONSE:
            return {
                ...state,
                attribute: {
                    data: action.payload.data,
                    status: action.payload.status,
                },
            };
        default:
            return state;
    }
};
 
export default attributeReducer;