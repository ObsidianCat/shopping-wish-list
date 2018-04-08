import { combineReducers } from 'redux';
import searchResultsReducer from './searchResults';
import wishListReducer from './wishList';

export default combineReducers({
    searchResults: searchResultsReducer,
    wishes: wishListReducer
});