import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/SearchBar';
import { updateSearchTerm, fireSearch } from '../actions/searchAction';

const HomePageV2 = (props) => {

    return (
        <div>
            <SearchBar onChange={props.searchTerm} onButtonPressed={props.fireSearch}/>
            <h2>Homepage V2</h2>
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
)(HomePageV2)