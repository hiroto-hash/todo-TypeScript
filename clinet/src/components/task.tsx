import React, { Component } from "react";
import { Button, ButtonGroup, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

class Task extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <ButtonGroup vertical>
            <Button variant="outline-warning">
              <Link to="/task/:id">編集</Link>
            </Button>{" "}
            <Button variant="outline-warning">
              <Link to="/task/:id">削除</Link>
            </Button>{" "}
          </ButtonGroup>
          <div>
            <h3> task text</h3>
          </div>
        </Breadcrumb>
      </div>
    );
  }
}

export default Task;
