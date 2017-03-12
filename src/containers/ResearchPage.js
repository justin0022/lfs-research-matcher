import React, { Component } from 'react'
import Table from '../components/Table'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { populateResearch } from '../actions/researchAction'
import { updateSearchTerm, fireSearch } from '../actions/searchAction'
import testData from '../constants/testResearchData'
import SearchBar from '../components/SearchBar'

class ResearchPage extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount () {
         this.props.researchListings(testData)
    }

    render() {
        return (
            <div>
                <h2>Research Page</h2>
                <SearchBar onChange={this.props.searchTerm} onButtonPressed={this.props.fireSearch}/>
                <Table data={testData}/>   
            </div>
        )
    }
}

const mapStateToProps = state => ({
    researchListings: state.researchListings,
    searchTerm: state.searchTerm,
    fireSearch: state.fireSearch
})

const mapDispatchToProps = dispatch => ({
    researchListings: bindActionCreators(populateResearch, dispatch),
    searchTerm: bindActionCreators(updateSearchTerm, dispatch),
    fireSearch: bindActionCreators(fireSearch, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResearchPage)