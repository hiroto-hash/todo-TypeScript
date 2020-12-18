import { READ_EVENTS } from "../actions/index"
import _ from "lodash"


//acionの型定義する
//lodashでkey＝＝＝idとする

export default (events = {}, action:any) => {
  switch (action.type) {
    case READ_EVENTS:
      console.log(action.stub.data)
      // return action.response.data
      return _.mapKeys(action.stub.data, 'taskId')
    default:
      return events
  }
}
