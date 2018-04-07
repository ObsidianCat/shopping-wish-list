import axios from 'axios';
import * as actionTypes from './types';
const SEARCH_ROOT_URL = 'https://www.adidas.co.uk/api/suggestions/';

export const findItems = (querry) => async dispatch => {
    try{
        const res = await axios.get(SEARCH_ROOT_URL + querry);
        dispatch({ type: actionTypes.FIND_ITEMS, payload: res.data });
    } catch (error){
        console.error(error);
    }
};

