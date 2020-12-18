import React, { Component } from "react";
import { Button, ButtonGroup, Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { readEvents } from "../actions/index";
import { connect } from "react-redux";

class Task extends Component {
  componentDidMount() {
    readEvents({ limit: 0 });
  }
  renderList() {
    console.log(this.props)
  }
  render() {
    this.renderList()
    const getList = this.props;
    console.log(getList);
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
              <div>{}</div>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({ events: state.events });
const mapDispatchToProps = (dispatch: any) => {
  readEvents(dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
