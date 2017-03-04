import React, { Component } from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link, IndexLink } from "react-router"

class App extends Component {
  
  render() {
    console.log(this.props.children);
    return (
      <div className="container-fluid">
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <IndexLink to='/'>LFS Research Matcher</IndexLink>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1}><Link to='/about'>About</Link></NavItem>
            </Nav>
        </Navbar>
        <h2>Welcome to React</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
