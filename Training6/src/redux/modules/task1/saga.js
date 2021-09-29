import { call, put, takeLatest, select } from 'redux-saga/effects';
import { actionTypes, receiveToken, receiveMyInfo, receiveUsers } from './actions';
import loginApi from '../../../api/loginApi';

const getToken = state => state.loginReducer.token;

function* login(action) {
    // const token = yield select(getToken);
    // console.log(token);
    const { onSuccess, body } = action.payload;
    try {
        const result = yield call(loginApi.getToken, body);
        yield put(receiveToken(result));
        const resultInfo = yield call(loginApi.getMyInfo, result.token);
        yield put(receiveMyInfo(resultInfo));
        onSuccess && onSuccess(result);
    } catch (e) {
        console.error(e);
    }
}
// function* getMyInfo() {
//     const token = yield select(getToken);
//     try {
//         const result = yield call(loginApi.getMyInfo, token);
//         yield put(receiveMyInfo(result));
//     } catch (e) {
//         console.error(e);
//     }
// }
function* getUsers(action) {
    const token = yield select(getToken);
    const { onFailure } = action.payload;
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
    // yield takeLatest(actionTypes.REQUEST_MY_INFO, getMyInfo);
    yield takeLatest(actionTypes.REQUEST_USERS, getUsers);
}