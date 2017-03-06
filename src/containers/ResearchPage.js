import React, { Component } from 'react'
import Table from '../components/Table'
import testData from '../constants/testResearchData'


class ResearchPage extends Component {
    render() {
        return (
            <div>
                <Table data={testData}/>            
            </div>
        );
    }
}

export default ResearchPage