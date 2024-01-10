import { all } from 'redux-saga/effects';
import watchFetchHome from './Home/saga';

// Root saga
function* rootSagas() {
    yield all([
        watchFetchHome(),
    ]);
}

export default rootSagas;