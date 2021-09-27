export const actionTypes = {
    REQUEST_ALL_TODOS: 'REQUEST_ALL_TODOS',
    RECEIVE_ALL_TODOS: 'RECEIVE_ALL_TODOS',
    ADD_TODO: 'ADD_TODO',
    RECEIVE_ADDED_TODO: 'RECEIVE_ADDED_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    RECEIVE_UPDATED_TODO: 'RECEIVE_UPDATED_TODO',
    DELETE_TODO: 'DELETE_TODO',
    RECEIVE_DELETED_TODO: 'RECEIVE_DELETED_TODO',
    SEARCH_TODO: 'SEARCH_TODO',
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

export const receiveAddedTodo = payload => ({
    type: actionTypes.RECEIVE_ADDED_TODO,
    payload
})

export const updateTodo = payload => ({
    type: actionTypes.UPDATE_TODO,
    payload
})

export const receiveUpdatedTodo = payload => ({
    type: actionTypes.RECEIVE_UPDATED_TODO,
    payload
})

export const deleteTodo = payload => ({
    type: actionTypes.DELETE_TODO,
    payload
})

export const receiveDeletedTodo = payload => ({
    type: actionTypes.RECEIVE_DELETED_TODO,
    payload
})

export const searchTodo = payload => ({
    type: actionTypes.SEARCH_TODO,
    payload
})