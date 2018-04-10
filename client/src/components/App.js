import React, { Component } from 'react'
import logo from '../logo-blue.png'
import '../App.css'
import SearchSection from './SearchSection'
import WishList from './WishList'
import { Tabs } from 'antd'
import { bindActionCreators } from 'redux'
import {clearSearchResults} from '../actions'
import {connect} from 'react-redux'
const TabPane = Tabs.TabPane

export class App extends Component {
  constructor (props) {
    super(props)

    this.onClickOnTab = this.onClickOnTab.bind(this)
  }

  onClickOnTab (activeKey) {
    // if we call wishlist in view, clear previous search results
    if (activeKey === '1') {
      this.props.clearSearchResults()
    }
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Tabs defaultActiveKey="1"
          onTabClick={(activeKey) => this.onClickOnTab(activeKey)}>
          <TabPane tab="Wishlist" key="1">
            <WishList/></TabPane>
          <TabPane tab="Search" key="2">
            <SearchSection/></TabPane>
        </Tabs>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ clearSearchResults }, dispatch)
}
export default connect(null, mapDispatchToProps)(App)
