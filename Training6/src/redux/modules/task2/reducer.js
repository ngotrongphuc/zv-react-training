import { actionTypes } from './actions';

const initialState = {
    data: [],
    filteredData: [],
    networkStatus: true,
    drafts:[]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_ALL_TODOS:
            return {
                ...state,
                data: action.payload,
                filteredData: action.payload
            }
        case actionTypes.RECEIVE_ADDED_TODO:
            return {
                ...state,
                data: [...state.data, action.payload],
                filteredData: [...state.filteredData, action.payload]
            }
        case actionTypes.RECEIVE_UPDATED_TODO:
            const updatedTodo = action.payload;
            const updatedData = state.data.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
            const updatedFilteredData = state.filteredData.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
            return {
                ...state,
                data: updatedData,
                filteredData: updatedFilteredData
            }
        case actionTypes.RECEIVE_DELETED_TODO:
            const deletedId = action.payload;
            const deletedData = state.data.filter(todo => todo.id !== deletedId);
            const deletedFilteredData = state.filteredData.filter(todo => todo.id !== deletedId);
            return {
                ...state,
                data: deletedData,
                filteredData: deletedFilteredData
            }
        case actionTypes.SEARCH_TODO:
            const filter = action.payload;
            let searchedData = state.data;
            if (filter.completed && filter.incomplete) {
                searchedData = state.data.filter(({ name }) => name.toLowerCase().includes(filter.name.toLowerCase()));
            } else if (filter.completed) {
                searchedData = state.data.filter(({ name, completed }) => name.toLowerCase().includes(filter.name.toLowerCase()) && (`${completed}` === 'true') === true);
            } else {
                searchedData = state.data.filter(({ name, completed }) => name.toLowerCase().includes(filter.name.toLowerCase()) && (`${completed}` === 'true') === false);
            }
            return {
                ...state,
                filteredData: searchedData
            }
        default:
            return state;
    }
}

export default todoReducer;