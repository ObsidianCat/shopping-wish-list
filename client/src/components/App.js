import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SearchSection from './SearchSection';
import WishList from './WishList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>

          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Adidas wishlist</h1>
                <Link
                    to= '/'
                    className="">
                    Wishlist
                </Link>
                <Link
                    to='/search'
                    className=""
                >
                    Search
                </Link>
            </header>
          <Route exact path="/" component={WishList} />
          <Route exact path="/search" component={SearchSection} />
</div>
          </BrowserRouter>

      </div>
    );
  }
}


export default App;
