import axios from 'axios';
import * as actionTypes from './types';
const SEARCH_ROOT_URL = 'https://www.adidas.co.uk/api/suggestions/';
const WISHLIST_ROOT_URL = '/wishlist';

export const findItems = (querry) => async dispatch => {
    try{
        const res = await axios.get(SEARCH_ROOT_URL + querry);
        dispatch({ type: actionTypes.FIND_ITEMS, payload: res.data });
    } catch (error){
        console.error(error);
    }
};

export const addItemToWishlist = (wish) => async dispatch => {
    try{
        const res = await axios.post(WISHLIST_ROOT_URL, {wish});
        dispatch({ type: actionTypes.ITEM_ADDED, payload: res.data });
        dispatch(getWishes());
    } catch (error){
        console.error(error);
    }
};

export const getWishes = () => async dispatch => {
    try{
        const res = await axios.get(WISHLIST_ROOT_URL);
        dispatch({ type: actionTypes.REFRESH_WISHLIST, payload: res.data });
    } catch (error){
        console.error(error);
    }
};

export const deleteWish = (id) => async dispatch => {
    try{
        await axios.delete(`${WISHLIST_ROOT_URL}/${id}`);
        dispatch({ type: actionTypes.DELETE_WISH, payload: {id} });
    } catch (error){
        console.error(error);
    }
};

export function clearSearchResults() {
    return {
        type: actionTypes.CLEAR_SEARCH_RESULTS
    }
}