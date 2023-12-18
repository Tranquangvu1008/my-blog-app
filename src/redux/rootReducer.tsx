import { combineReducers } from 'redux';
import attributeReducer from './test/reducer';

const rootReducers = combineReducers({
    attributeReducer,
});
 
export type RootState = ReturnType<typeof rootReducers>;
 
export default rootReducers;