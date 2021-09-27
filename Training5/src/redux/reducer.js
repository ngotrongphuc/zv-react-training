import { combineReducers } from 'redux';
import todoReducer from './modules/task1/reducer';
import loginReducer from './modules/task2/reducer';

const reducer = combineReducers({
    todoReducer,
    loginReducer
});
export default reducer;