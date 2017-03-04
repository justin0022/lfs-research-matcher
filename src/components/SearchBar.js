import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const SearchBar = (props) => {

    const handleChange = event => {
        if (event.key === 'Enter') {
            props.keyPressed();
        }
        props.onChange(event.target.value);
    }

    const handleClick = () => {
        props.buttonPressed();
    }

    return (
        <Row>
            <Col xs={6} md={4} >
                <input 
                className="searchBar" 
                placeholder="Search by jobs" 
                onChange={handleChange}
                onKeyPress={handleChange}/>
                <Button 
                    id="searchButton"
                    onClick={handleClick} > Search 
                </Button> 
            </Col>
        </Row>
    );
};

export default SearchBar;