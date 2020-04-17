import { combineReducers } from 'redux';
import count from './count';
import boolean from './boolean';

const Reducers = combineReducers({
    count : count,
    boolean : boolean
});
export default Reducers;