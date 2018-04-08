import React, { Component } from 'react';
import { Button } from 'antd';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import {addItemToWishlist} from '../actions';

class SearchItem extends Component {

    constructor(props) {
        super(props);
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
        this.state = {
            // "DataSource" is some global data source
            isInWishList: false
        };
    }

    onAddBtnClick(e){
        e.preventDefault();
        console.log(this.props);
        this.props.addItemToWishlist(this.props.product);
        this.setState({isInWishList: true})

    }


    render(){
        return (
            <li>
                {this.props.product.suggestion}
                <Button
                    onClick={this.onAddBtnClick}
                    disabled={this.state.isInWishList}
                >Add to wishlist</Button>
            </li>
        );
    }

};

function mapDispatchToProps(dispatch){
    return bindActionCreators({ addItemToWishlist }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchItem);
