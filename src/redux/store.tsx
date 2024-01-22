import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import ValidationReducer from './Reducer/index';
import { watchFetchData } from './Saga/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(ValidationReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchData);

export default store;