import {CLEAR_SEARCH_RESULTS, FIND_ITEMS} from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case FIND_ITEMS:
      return action.payload.products
    case CLEAR_SEARCH_RESULTS:
      return []
    default:
      return state
  }
}
