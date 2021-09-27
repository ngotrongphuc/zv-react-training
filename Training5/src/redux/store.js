//Redux
import { createStore, applyMiddleware } from 'redux';
//reducer
import reducer from './reducer';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
//Middleware
const sagaMiddleware = createSagaMiddleware();

//init store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;