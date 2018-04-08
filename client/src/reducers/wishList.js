import { REFRESH_WISHLIST, DELETE_WISH } from '../actions/types';
import cloneDeep from 'lodash/cloneDeep';

export default function(state = {}, action) {
    switch (action.type) {
        case REFRESH_WISHLIST:
            return action.payload;
        case DELETE_WISH:
            const newState = cloneDeep(state);
            delete newState[action.payload.id];
            return newState;
        default:
            return state;
    }
}