import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wish from './Wish'
import { bindActionCreators } from 'redux'
import {getWishes} from '../actions'

class WishList extends Component {
  componentDidMount () {
    this.props.getWishes()
  }

  mapWishesToListItems (wishes) {
    const mappedToComponents = wishes.map((item) => {
      return (
        <Wish key={item[0]} details={item[1]}/>
      )
    })

    return (
      <ul>
        {mappedToComponents}
      </ul>
    )
  }
  render () {
    const wishesAsArray = Object.entries(this.props.wishes)
    let result = null
    if (wishesAsArray.length > 0) {
      result = this.mapWishesToListItems(wishesAsArray)
    } else {
      result = (<p>Your wish list is empty. Try to search for some pretty items first.</p>)
    }

    return (
      result
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getWishes }, dispatch)
}
function mapStateToProps ({ wishes }) {
  return { wishes }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)
