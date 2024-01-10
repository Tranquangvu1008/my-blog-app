import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { API_URL, LIST_STATUS_ACTION } from "../rootConstant";
import { getProfileResponse } from "./action";
import { HOME_GET_PROFILE_REQUEST } from "./constants";

export function* getProfileRequest(action: any): any {
    let resAtt: any = null;
    try {
        resAtt = yield call(async () => await axios.get(`${API_URL.SERVER}${API_URL.HOME.GET_ALL}?populate=projects`));
        yield put(getProfileResponse(resAtt?.data, LIST_STATUS_ACTION.SUCCESS, resAtt?.data?.message, resAtt?.data?.errors));
    } catch (error) {
        yield put(getProfileResponse(null, LIST_STATUS_ACTION.FAILED, '', resAtt?.data?.errors));
    }
}
export default function* watchFetchHome() {
    yield takeLatest(HOME_GET_PROFILE_REQUEST, getProfileRequest);

}