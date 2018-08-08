import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import RootSaga from './Saga';
import RootReducer from './Reducer';

export default function configureStore() {

    const sagaMiddleware = createSagaMiddleware();
    const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
    const store = createStoreWithMiddleware(RootReducer, {});
    sagaMiddleware.run(RootSaga);
    
    return store;
}