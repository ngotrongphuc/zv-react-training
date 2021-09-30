export const actionTypes = {
    RECEIVE_NETWORK_STATUS: 'RECEIVE_NETWORK_STATUS',
    REQUEST_ALL_TODOS: 'REQUEST_ALL_TODOS',
    RECEIVE_ALL_TODOS: 'RECEIVE_ALL_TODOS',
    ADD_TODO: 'ADD_TODO',
    RECEIVE_ADDED_TODO: 'RECEIVE_ADDED_TODO',
    READY_TODO: 'READY_TODO',
    SET_STATUS_TODO: 'SET_STATUS_TODO',
    SUBMIT_TODO: 'SUBMIT_TODO',
    RECEIVE_SUBMITTED_TODO: 'RECEIVE_SUBMITTED_TODO',
}

export const requestAllTodos = () => ({
    type: actionTypes.REQUEST_ALL_TODOS,
})
export const receiveAllTodos = payload => ({
    type: actionTypes.RECEIVE_ALL_TODOS,
    payload
})

export const addTodo = payload => ({
    type: actionTypes.ADD_TODO,
    payload
})

export const readyTodo = payload => ({
    type: actionTypes.READY_TODO,
    payload
})

export const setStatusTodo = payload => ({
    type: actionTypes.SET_STATUS_TODO,
    payload
})

export const submitTodo = payload => ({
    type: actionTypes.SUBMIT_TODO,
    payload
})
export const receiveSubmittedTodo = payload => ({
    type: actionTypes.RECEIVE_SUBMITTED_TODO,
    payload
})

export const receiveNetworkStatus = payload => ({
    type: actionTypes.RECEIVE_NETWORK_STATUS,
    payload
})