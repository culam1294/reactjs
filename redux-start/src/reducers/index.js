import { combineReducers } from 'redux';
import Counter from './Counter';
import load from './isLoad';

const joinReducers = combineReducers({
    count : Counter,
    load : load
});
export default joinReducers;