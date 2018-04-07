import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SearchSection from './SearchSection';
import WishList from './WishList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Adidas wishlist</h1>
        </header>
        <SearchSection/>
        <WishList/>
      </div>
    );
  }
}

export default App;
