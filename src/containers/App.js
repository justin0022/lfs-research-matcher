import React, { Component } from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link, IndexLink, Button } from "react-router"

class App extends Component {

  render() {
    const { children } = this.props
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to='/'>LFS Research Matcher</IndexLink>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}><Link to='/about'>About</Link></NavItem>
            <NavItem eventKey={2}><Link to='/login'>Login</Link></NavItem>
          </Nav>
        </Navbar>
        <div className="container-fluid">
          <div>{children}</div>
        </div>
      </div>
    );
  }
}

export default App;
