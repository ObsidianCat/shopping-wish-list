import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { findItems } from "../actions";
import {connect} from 'react-redux';
import { Input } from 'antd';
import { Button } from 'antd';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.findItems(this.state.term);
        this.setState({term: ""});
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <Input
                    placeholder="type something to search"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    className="search"
                />
                <Button type="primary" htmlType="submit">
                        Submit
                </Button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ findItems }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);