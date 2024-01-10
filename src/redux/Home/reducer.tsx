import { LIST_STATUS_ACTION } from "../rootConstant";
import { HOME_GET_PROFILE_REQUEST, HOME_GET_PROFILE_RESPONSE } from "./constants";
import { HomeModel } from "./models";

export type HOME_STATE = {
    attribute: {
        data: HomeModel[];
        status: string;
    };
};

export const INIT_STATE: HOME_STATE = {
    attribute: {
        data: [],
        status: LIST_STATUS_ACTION.LOADING,
    },
};

const attributeReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case HOME_GET_PROFILE_REQUEST:
            return {
                ...state,
                attribute: {
                    data: [],
                    status: LIST_STATUS_ACTION.LOADING,
                },
            };
        case HOME_GET_PROFILE_RESPONSE:
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