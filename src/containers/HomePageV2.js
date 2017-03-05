import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/SearchBar';
import { search } from '../actions/searchAction';

const HomePageV2 = (props) => {

    return (
        <div>
            <SearchBar onChange={props.search}/>
            <h2>Homepage V2</h2>
        </div>
    );
};
    
const mapStateToProp = state => {
    return {
        searchTerm: state.searchTerm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: bindActionCreators(search, dispatch)
    }
}

export default connect(
    mapStateToProp,
    mapDispatchToProps
)(HomePageV2)