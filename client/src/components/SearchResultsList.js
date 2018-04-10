import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchItem from './SearchItem'

class SearchResultsList extends Component {
  mapDataToItems (products) {
    const items = products.map((product, counter) => {
      return <SearchItem key={counter} product={product}/>
    })

    return items
  }

  render () {
    console.log(this.props)
    return (
      <ul>
        {this.mapDataToItems(this.props.searchResults)}
      </ul>
    )
  }
}

function mapStateToProps ({ searchResults }) {
  return { searchResults }
}

export default connect(mapStateToProps)(SearchResultsList)
