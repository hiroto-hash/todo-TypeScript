import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Task from "./task";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col>
              <h1>TODO LIST</h1>
            </Col>
            <Col>
              <Button variant="outline-warning">
                <Link to="/task">新規作成</Link>
              </Button>{" "}
            </Col>
          </Row>
        </Container>
        <Task />
        <Footer />
      </div>
    );
  }
}
export default Main;
