import { combineReducers } from 'redux';
import wishListReducer from './wishList';

export default combineReducers({
    wishList: wishListReducer,
});