import React from 'react';

const ItemDetails = (props) => {
    return (
        <li>
            {props.product.suggestion}
        </li>
    );
};

export default ItemDetails;