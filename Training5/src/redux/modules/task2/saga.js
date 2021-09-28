import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, receiveToken, receiveMyInfo, receiveUsers } from './actions';
import loginApi from '../../../api/loginApi';

function* login(action) {
    const { onSuccess, body } = action.payload;
    try {
        const result = yield call(loginApi.getToken, body);
        yield put(receiveToken(result));
        localStorage.setItem('token', result.token);
        onSuccess && onSuccess(result);
    } catch (e) {
        console.error(e);
    }
}
function* getMyInfo() {
    const token = localStorage.getItem('token');
    try {
        const result = yield call(loginApi.getMyInfo, token);
        yield put(receiveMyInfo(result));
    } catch (e) {
        console.error(e);
    }
}
function* getUsers(action) {
    const { onFailure } = action.payload;
    const token = localStorage.getItem('token');
    try {
        const result = yield call(loginApi.getUsers, token);
        yield put(receiveUsers(result));
    } catch (e) {
        console.error(e);
        onFailure && onFailure(e);
    }
}

export default function* loginSaga() {
    yield takeLatest(actionTypes.REQUEST_TOKEN, login);
    yield takeLatest(actionTypes.REQUEST_MY_INFO, getMyInfo);
    yield takeLatest(actionTypes.REQUEST_USERS, getUsers);
}