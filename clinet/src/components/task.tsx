import React, { Component } from "react";
import { Button, ButtonGroup, Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { readEvents } from "../actions";
import { ReduxAction } from "../store";
import { State } from "../reducer/events";
interface getList {
  data: {
    taskId: number;
    title: string;
    description: string;
    status: string;
    createTime: string;
    updateTime: string;
    tag?: string;
  }[]
}
class Task extends React.Component<getList,{}> {
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
          <Col>{this.props.data.title}</Col>
          <Col>{this.props.data.description}</Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: getList) => {
  return {
    value: state.data
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  readEvents();
};
export default connect(mapStateToProps, mapDispatchToProps)(Task)
// export class ActionDispatcher {
//   // constructor(private dispatch: (action: ReduxAction) => void) {}
//   constructor(private dispatch: Dispatch<ReduxAction>) {}

//   public getList() {
//     this.dispatch(readEvents());
//   }
// }

//state.data?にする
// export default connect(
//   (state:getList) => ({ value: state.data }),
//   (dispatch: Dispatch<ReduxAction>) => ({
//     actions: new ActionDispatcher(dispatch),
//   })
// )(Task);
