import { combineReducers } from 'redux';
import Counter from './Counter';
import Login from './isLogin';

const joinReducers = combineReducers({
    count : Counter,
    login : Login
});
export default joinReducers;