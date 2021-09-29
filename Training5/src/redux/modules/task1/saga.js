import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, receiveAllTodos, receiveAddedTodo, receiveUpdatedTodo, receiveDeletedTodo } from './actions';
import todosApi from '../../../api/todosApi';

function* getAllTodos() {
    try {
        const result = yield call(todosApi.getTodos);
        yield put(receiveAllTodos(result));
    } catch (e) {
        console.error(e);
    }
}

function* addTodo(action) {
    const { body } = action.payload;
    try {
        const result = yield call(todosApi.addTodo, body);
        yield put(receiveAddedTodo(result));
    } catch (e) {
        console.error(e);
    }
}

function* updateTodo(action) {
    const { id, body } = action.payload;
    try {
        const result = yield call(todosApi.updateTodo, id, body);
        yield put(receiveUpdatedTodo(result));
    } catch (e) {
        console.error(e);
    }
}

function* deleteTodo(action) {
    const { onSuccess, id } = action.payload;
    try {
        const result = yield call(todosApi.deleteTodo, id);
        yield put(receiveDeletedTodo(id));//put id in instead of result due to this api return an empty object
        onSuccess && onSuccess(result);
    } catch (e) {
        console.error(e);
    }
}

export default function* todoSaga() {
    yield takeLatest(actionTypes.REQUEST_ALL_TODOS, getAllTodos);
    yield takeLatest(actionTypes.ADD_TODO, addTodo);
    yield takeLatest(actionTypes.UPDATE_TODO, updateTodo);
    yield takeLatest(actionTypes.DELETE_TODO, deleteTodo);
}