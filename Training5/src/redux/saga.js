import { all,fork } from 'redux-saga/effects';
import todoSaga from './modules/task1/saga';
import loginSaga from './modules/task2/saga';

export default function* rootSaga() {
    yield all([
        fork(todoSaga),
        fork(loginSaga)
    ]);
}