import React, { Component } from 'react';
import { connect } from 'react-redux';
import Wish from "./Wish";

class WishList extends Component {


    mapWishesToListItems(wishes){
        const mappedToComponents = Object.entries(this.props.wishes).map((item) => {
            return (
                <Wish key={item[0]} details={item[1]}/>
            );
        });

        // const mappedToComponents = Object.keys(this.props.wishes).map(function (key) {
        //     return  <Wish key={key} details={this.props.wishes[key]}/>
        // });
        //     //var item = this.state.items[key]

        return mappedToComponents;
    }
    render(){
        console.log(this.props.wishes);
        return (
        <ul>
            {this.mapWishesToListItems(this.props.wishes)}
        </ul>
        )
    }

}
function mapStateToProps({ wishes }) {
    return { wishes };
}

export default connect(mapStateToProps)(WishList);