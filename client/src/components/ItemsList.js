import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemDetails from "./itemDetails";

class ItemsList extends Component {

    mapDataToItems(products){
        const items = products.map((product, counter)=>{
            return <ItemDetails key={counter} product={product}/>;
        });

        return items;

    }
    render(){
        console.log('type list' + this.props);
        return (
            <ul>
                {this.mapDataToItems(this.props.searchResults)}
            </ul>
        );
    }

}


function mapStateToProps({ searchResults }) {
    return { searchResults };
}

export default connect(mapStateToProps)(ItemsList);