import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import ItemsList from "./ItemsList";

export default (props)=> {
    return (
        <div>
            <SearchBar/>
            <ItemsList/>
        </div>
    );
};