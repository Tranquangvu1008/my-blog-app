import { all } from 'redux-saga/effects';
import watchFetchAttribute from './test/saga';
 
// Root saga
function* rootSagas() {
    yield all([
        watchFetchAttribute(),
    ]);
}
 
export default rootSagas;