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
                <a
                    alt={this.props.product.suggestion}
                    href={this.props.product.url}
                    target="_blank"
                >
                    {this.props.product.suggestion}</a>
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
