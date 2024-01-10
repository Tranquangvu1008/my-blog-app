import { combineReducers } from 'redux';
import homeReducer from './Home/reducer';

const rootReducers = combineReducers({
    homeReducer,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;