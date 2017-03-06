import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSearchTerm, fireSearch } from '../actions/searchAction'
import SearchBar from '../components/SearchBar'

const HomePage = (props) => {

    return (
        <div>
            <h2>Homepage</h2>
            <SearchBar onChange={props.searchTerm} onButtonPressed={props.fireSearch}/>
        </div>
    )
}
    
const mapStateToProps = state => ({
    searchTerm: state.searchTerm,
    fireSearch: state.fireSearch
})


const mapDispatchToProps = dispatch => ({
    searchTerm: bindActionCreators(updateSearchTerm, dispatch),
    fireSearch: bindActionCreators(fireSearch, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)