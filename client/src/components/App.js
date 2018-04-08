import React, { Component } from 'react';
import logo from '../logo-blue.png';
import '../App.css';
import SearchSection from './SearchSection';
import WishList from './WishList';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class App extends Component {
  render() {
    return (
      <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
              <Tabs defaultActiveKey="1">
                  <TabPane tab="Wishlist" key="1">
                      <WishList/></TabPane>
                  <TabPane tab="Search" key="2">
                      <SearchSection/></TabPane>
              </Tabs>

      </div>
    );
  }
}


export default App;
