import React, { Component } from 'react';
import { Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {deleteWish} from '../actions';


class Wish extends Component{
    constructor(props) {
        super(props);
        this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);

    }
    onRemoveBtnClick(e){
        e.preventDefault();
        this.props.deleteWish(this.props.details.id);

    }
    render(){
        return (
            <li>
                {this.props.details.suggestion}
                <Button
                    onClick={this.onRemoveBtnClick}
                >Remove from wishlist</Button>
            </li>
        );
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ deleteWish }, dispatch);
}

export default connect(null, mapDispatchToProps)(Wish);