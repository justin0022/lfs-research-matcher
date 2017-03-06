import React, { Component } from 'react'
import Table from '../components/Table'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { populateResearch } from '../actions/researchAction'
import testData from '../constants/testResearchData'

class ResearchPage extends Component {
    render() {
        return (
            <div>
                <h2>Research Page</h2>
                <Table data={testData}/>            
            </div>
        );
    }
}

const mapStateToProps = state => ({
    researchListings: state.researchListings
})

const mapDispatchToProps = dispatch => ({
    researchListings: bindActionCreators(populateResearch, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResearchPage)