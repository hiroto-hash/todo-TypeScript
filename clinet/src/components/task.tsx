import React, { Component } from "react";
import { Button, ButtonGroup, Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Task extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Breadcrumb>
              <ButtonGroup vertical>
                <Button variant="outline-warning">
                  <Link to="/task/:id">編集</Link>
                </Button>{" "}
                <Button variant="outline-warning">
                  <Link to="/task/:id">削除</Link>
                </Button>{" "}
              </ButtonGroup>
            </Breadcrumb>
          </Col>
          <Col md="auto">
            <Breadcrumb>日付</Breadcrumb>
          </Col>
          <Col>
            <Breadcrumb>
              <div>
                <p> task text</p>
              </div>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Task;
