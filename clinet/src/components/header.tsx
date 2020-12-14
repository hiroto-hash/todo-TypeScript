import React, { Component } from "react";
import { Button, Navbar, NavDropdown } from "react-bootstrap";
import "../style.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="warning" variant="dark">
          <Navbar.Brand href="/" className="header-text">dcproject0001</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="light">
              <NavDropdown title="メニュー" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">test</NavDropdown.Item>
              </NavDropdown>
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
