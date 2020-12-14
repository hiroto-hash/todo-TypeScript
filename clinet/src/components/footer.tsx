import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "../style.css";
class Footer extends Component {
  render() {
    return (
      <Navbar bg="warning" variant="dark">
        <Navbar.Collapse className="justify-content-end">
          <p className="footer">dcproject0001</p>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Footer;
