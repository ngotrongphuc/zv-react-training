import { channel } from 'redux-saga';
import { call, put, takeLatest, take, fork, delay, select, takeEvery } from 'redux-saga/effects';
import { actionTypes, receiveAllTodos, setStatusTodo, receiveSubmittedTodo, receiveNetworkStatus } from './actions';
import todosApi from '../../../api/todosApi';

function* syncNetworkStatus() {
    const networkChannel = channel();
    const listener = e => {
        networkChannel.put(receiveNetworkStatus(e.type));
    }
    window.addEventListener("offline", listener);
    window.addEventListener("online", listener);

    while (true) {
        const action = yield take(networkChannel);
        yield put(action);
        // window.removeEventListener("offline", listener);
        // window.removeEventListener("online", listener);
    }
}

function* getAllTodos() {
    try {
        const result = yield call(todosApi.getTodos);
        yield put(receiveAllTodos(result));
    } catch (e) {
        console.error(e);
    }
}

function* submitTodo() {
    const networkStatus = yield select(state => state.todoReducer.networkStatus);
    if (networkStatus === "online") {
        const drafts = yield select(state => state.todoReducer.drafts);
        const readyData = drafts.filter(todo => todo.status === "READY" ? todo : null);
        for (let i = 0; i < readyData.length; i++) {
            yield put(setStatusTodo({ id: readyData[i].id, status: "SUBMITTING" }));
        }
        yield delay(2000);
        for (let i = 0; i < readyData.length; i++) {
            if (Math.random() < 0.5) {
                const currentTodo = readyData[i];
                const tempId = currentTodo.id;
                const newTodo = {
                    name: currentTodo.name,
                    completed: currentTodo.completed
                }
                try {
                    const result = yield call(todosApi.submitTodo, newTodo);
                    yield put(receiveSubmittedTodo({ result, tempId }));
                    yield put(setStatusTodo({ id: result.id, status: "SUCCESS" }));
                } catch (e) {
                    console.error(e);
                    yield put(setStatusTodo({ id: readyData[i].id, status: "ERROR" }));
                }
            } else {
                yield put(setStatusTodo({ id: readyData[i].id, status: "ERROR" }));
            }
        }
    }
}

export default function* todoSaga() {
    yield fork(syncNetworkStatus);
    yield takeLatest(actionTypes.REQUEST_ALL_TODOS, getAllTodos);
    yield takeLatest(actionTypes.RECEIVE_NETWORK_STATUS, submitTodo);
    yield takeEvery(actionTypes.READY_TODO, submitTodo);
}