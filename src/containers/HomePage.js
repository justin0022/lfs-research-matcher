import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/SearchBar';
import { updateSearchTerm, fireSearch } from '../actions/searchAction';

const HomePage = (props) => {

    return (
        <div>
            <h2>Homepage</h2>
            <SearchBar onChange={props.searchTerm} onButtonPressed={props.fireSearch}/>
        </div>
    );
};
    
const mapStateToProp = state => {
    return {
        searchTerm: state.searchTerm,
        fireSearch: state.fireSearch
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchTerm: bindActionCreators(updateSearchTerm, dispatch),
        fireSearch: bindActionCreators(fireSearch, dispatch)
    }
}

export default connect(
    mapStateToProp,
    mapDispatchToProps
)(HomePage)