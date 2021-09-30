import { all } from 'redux-saga/effects';
import todoSaga from './modules/task2/saga';
import loginSaga from './modules/task1/saga';

export default function* rootSaga() {
    yield all([
        todoSaga(),
        loginSaga()
    ]);
}