import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { search } from '../actions/searchAction';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
        this.updateStateWithValue = this.updateStateWithValue.bind(this);
        this.search = this.search.bind(this);
    }

    updateStateWithValue(value) {
        const nextState = {...this.state, search: value}
        this.setState(nextState);

        //update redux store
        //this.dispatch(search(value));
    }

    search() {
        console.log(this.state.search)
    }
    
    render() {
        return (
            <div>
                <SearchBar onChange={this.updateStateWithValue} buttonPressed={this.search} keyPressed={this.search}/>
                <h2>This is the Home Page</h2>
            </div>
        )
    }
}
HomePage = connect()(HomePage)

export default HomePage;