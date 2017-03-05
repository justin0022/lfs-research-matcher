import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const SearchBar = (props) => {

    const handleEnterKey = event => {
        if (event.key === 'Enter') {
            props.keyPressed();
        }
    }

    const handleChange = event => {
        props.onChange(event.target.value);

        console.log('event fired');
    }

    const handleClick = () => {
        props.onButtonPressed();
    }

    return (
        <Row>
            <Col xs={6} md={4} >
                <input 
                className="searchBar" 
                placeholder="Search by jobs" 
                onChange={handleChange}
                onKeyPress={handleEnterKey}/>
                <Button 
                    id="searchButton"
                    onClick={handleClick} > Search 
                </Button> 
            </Col>
        </Row>
    );
};

export default SearchBar;