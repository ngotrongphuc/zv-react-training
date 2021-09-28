export const actionTypes = {
    REQUEST_TOKEN: 'REQUEST_TOKEN',
    RECEIVE_TOKEN: 'RECEIVE_TOKEN',
    REQUEST_MY_INFO: 'REQUEST_MY_INFO',
    RECEIVE_MY_INFO: 'RECEIVE_MY_INFO',
    REQUEST_USERS: 'REQUEST_USERS',
    RECEIVE_USERS: 'RECEIVE_USERS'
}

export const requestToken = payload => ({
    type: actionTypes.REQUEST_TOKEN,
    payload
})
export const receiveToken = payload => ({
    type: actionTypes.RECEIVE_TOKEN,
    payload
})

export const requestMyInfo = () => ({
    type: actionTypes.REQUEST_MY_INFO
})
export const receiveMyInfo = payload => ({
    type: actionTypes.RECEIVE_MY_INFO,
    payload
})

export const requestUsers = payload => ({
    type: actionTypes.REQUEST_USERS,
    payload
})
export const receiveUsers = payload => ({
    type: actionTypes.RECEIVE_USERS,
    payload
})