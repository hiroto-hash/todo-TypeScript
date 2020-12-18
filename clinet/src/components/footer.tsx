import React, { Component } from "react"
import { Navbar } from "react-bootstrap"
import "../style.css"
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Navbar bg="warning" variant="dark">
          <Navbar.Collapse className="justify-content-center">
            <p className="footer-text">@dcproject0001</p>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Footer
