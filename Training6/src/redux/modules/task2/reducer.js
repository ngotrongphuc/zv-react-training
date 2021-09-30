import { actionTypes } from './actions';

const initialState = {
    networkStatus: navigator.onLine ? "online" : "offline",
    data: [],
    drafts: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_ALL_TODOS:
            const classifiedResult = action.payload.map(todo => ({ ...todo, status: "SUCCESS" }));
            const draftingData = state.drafts.filter(todo => todo.status === "DRAFT" ? todo : null);
            return {
                ...state,
                data: classifiedResult,
                drafts: draftingData,
            }
        case actionTypes.ADD_TODO:
            return {
                ...state,
                drafts: [...state.drafts, action.payload],
            }
        case actionTypes.READY_TODO:
            const readyTodo = state.drafts.map(todo => todo.id === action.payload.id ? ({ ...todo, status: "READY" }) : todo);
            return {
                ...state,
                drafts: readyTodo
            }
        case actionTypes.SET_STATUS_TODO:
            const newStatusTodo = state.drafts.map(todo => todo.id === action.payload.id ? ({ ...todo, status: action.payload.status }) : todo);
            return {
                ...state,
                drafts: newStatusTodo
            }
        case actionTypes.RECEIVE_SUBMITTED_TODO:
            const submittedTodo = state.drafts.map(todo => todo.id === action.payload.tempId ? action.payload.result : todo);
            return {
                ...state,
                drafts: submittedTodo
            }
        case actionTypes.RECEIVE_NETWORK_STATUS:
            return {
                ...state,
                networkStatus: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;