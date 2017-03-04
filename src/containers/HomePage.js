import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

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

export default HomePage;