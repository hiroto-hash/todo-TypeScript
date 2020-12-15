import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Task from "./task";
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Container>
          <Row>
            <Col md={{ span: 3, offset: 3 }}>
              <h1>TODO LIST</h1>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              <Button variant="outline-warning">
                <Link to="/task">新規作成</Link>
              </Button>{" "}
            </Col>
          </Row>
          <Task />
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Main;
