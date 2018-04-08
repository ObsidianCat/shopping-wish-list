import { REFRESH_WISHLIST } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case REFRESH_WISHLIST:
            console.log(action);
            return action.payload;
        default:
            return state;
    }
}