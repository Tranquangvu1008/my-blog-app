import { HOME_GET_PROFILE_REQUEST, HOME_GET_PROFILE_RESPONSE } from "./constants";

export const getProfileRequest = () => ({
    type: HOME_GET_PROFILE_REQUEST,
    // payload: { pageNumber, pageSize }
});

export const getProfileResponse = (data: any, status: string, message: string, errors: string) => ({
    type: HOME_GET_PROFILE_RESPONSE,
    payload: { data, status, message, errors }
})