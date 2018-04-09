import React from 'react';
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

export default (props)=> {
    return (
        <div>
            <SearchBar/>
            <SearchResultsList/>
        </div>
    );
};