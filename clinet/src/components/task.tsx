import React, { Component, Dispatch } from "react";
import { Button, ButtonGroup, Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { readEvents } from "../actions/index";
import { connect } from "react-redux";
import _ from "lodash";
import events, { listData } from "../reducer/events";

// interface getProps {
//   events: {
//     // type?: string;
//     data: {
//       taskId: number;
//       title: string;
//       description: string;
//       status: string;
//       createTime: string;
//       updateTime: string;
//       tag?: string[];
//     }[];
//   };
// }

class Task extends Component {
  // constructor(props: getProps) {
  //   super(props);
  // }
  componentDidMount() {
    readEvents({ limit: 0 });
  }
  renderList() {
    // const { hoge } = this.props;
    // console.log(hoge);
    console.log(this.props);
    // return this.props.map((list) => {
    //   <p>{list.description}</p>;
    // });
    //  map(this.props.stub.data, (events: listData) => (
    //   <Breadcrumb>
    //     <p>{events.}</p>
    //   </Breadcrumb>
    // ));
  }
  render() {
    this.renderList();
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
          {/* <Col>{this.renderList()}</Col> */}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: listData) => state;
const mapDispatchToProps = (dispatch: any) => {
  readEvents(dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
