import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
 
import reducer from '../redux/rootReducer'
import mySaga from '../redux/rootSaga'
 
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
// Mount it on the Store
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
})
 
// Then run the saga
sagaMiddleware.run(mySaga)
 
// Render the application
 
export default store;