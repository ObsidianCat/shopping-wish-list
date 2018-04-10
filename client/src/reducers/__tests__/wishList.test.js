import wishListReducer from '../wishList'
import { DELETE_WISH } from '../../actions/types'

describe('WishListReducer tests', () => {
  test('Return initial state as an empty object', () => {
    expect(wishListReducer(undefined, {})).toEqual({})
  })
  test('DELETE_WISH action will delete wish by id from the state', () => {
    const prevState = {
      0: {
        id: 0,
        'suggestion': 'Deerupt Runner Shoes'
      },
      1: {
        id: 1,
        'suggestion': 'Terrex Agravic Speed Shoes'
      }
    }
    const expectedState = {
      0: {
        id: 0,
        'suggestion': 'Deerupt Runner Shoes'
      }
    }

    expect(wishListReducer(prevState, { type: DELETE_WISH, payload: {id: 1} })).toEqual(expectedState)
  })
})
