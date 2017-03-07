import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

const Table = ({data}) => {
    return (
        <div>
            <BootstrapTable data={data} striped={true} hover={true}>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
};

export default Table;