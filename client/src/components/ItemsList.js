import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemsList extends Component {

    mapDataToItems(products){
        const items = products.map((product, counter)=>{
            return (
                <li key={counter}>
                    {product.suggestion}
                </li>
            );
        });

        return items;

    }
    render(){
        console.log(this.props);
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