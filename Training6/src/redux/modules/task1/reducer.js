import { actionTypes } from './actions';

const initialState = {
    token: null,
    myInfo: {},
    users: [],
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_TOKEN:
            return {
                ...state,
                token: action.payload.token
            }
        case actionTypes.RECEIVE_MY_INFO:
            return {
                ...state,
                myInfo: action.payload
            }
        case actionTypes.RECEIVE_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        default:
            return state;
    }
}

export default loginReducer;