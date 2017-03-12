import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

const Table = ({data}) => {

    const handleClick = () => {

    }
    const onRowSelect = isSelected => {
        console.log(isSelected)
    }

    const selectRowProp = {
        mode: 'checkbox',
        clickToSelect: 'true',
        onSelect: onRowSelect
    }
    const options = {
        sizePerPage: 15
    }

    return (
        <div>
            <BootstrapTable data={data} striped={true} hover={true} selectRow={selectRowProp} pagination={true} options={options}>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
            </BootstrapTable>
            <button onClick={handleClick}/>
        </div>
    );
};

export default Table;