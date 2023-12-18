import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { API_URL, LIST_STATUS_ACTION } from "../rootConstant";
import { getAttributeResponse } from "./action";
import { ATTRIBUTE_GET_ITEMS_REQUEST } from "./constants";

export function* getAttributeRequest(action: any): any {
    let resAtt: any = null;
    try {
        resAtt = yield call(async () => await axios.get(`${API_URL.SERVER}${API_URL.UNIT.GET_ALL}/5de0ebf7-e394-4be3-b7cb-0feb09c8f9dd`));
        console.log(resAtt);
        // yield put(getAttributeResponse(resAtt?.data, LIST_STATUS_ACTION.SUCCESS, resAtt?.data?.message, resAtt?.data?.errors));
    } catch (error) {
        yield put(getAttributeResponse(null, LIST_STATUS_ACTION.FAILED, '', resAtt?.data?.errors));
    }
}
export default function* watchFetchAttribute() {
    yield takeLatest(ATTRIBUTE_GET_ITEMS_REQUEST, getAttributeRequest);
 
}