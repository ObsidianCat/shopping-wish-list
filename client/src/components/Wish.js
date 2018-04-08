import React, { Component } from 'react';
import { Button } from 'antd';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
const Wish = (props) => {
    return (
        <li>
            {props.details.suggestion}
            <Button
                //onClick={this.onAddBtnClick}
                //disabled={this.state.isInWishList}
            >Remove from wishlist</Button>
        </li>
    );
};

export default Wish;