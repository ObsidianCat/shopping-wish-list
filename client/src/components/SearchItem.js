import React from 'react';

const SearchItem = (props) => {
    return (
        <li>
            {props.product.suggestion}
        </li>
    );
};

export default SearchItem;