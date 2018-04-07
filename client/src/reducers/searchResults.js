import { FIND_ITEMS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FIND_ITEMS:
            console.log(action);
            return action.payload.products;
        default:
            return state;
    }
}