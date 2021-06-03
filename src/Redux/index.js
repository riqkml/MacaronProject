import { combineReducers } from 'redux';
import mainReducer from './Reducer';

const reducerApp = combineReducers({
    mainReducer
});

export default reducerApp;