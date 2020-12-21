import { READ_EVENTS } from "../actions/index";
import _ from "lodash";

//acionの型定義する
//lodashでkey＝＝＝idとする
export interface listData {
  type?: string;
  data: {
    taskId: number;
    title: string;
    description: string;
    status: string;
    createTime: string;
    updateTime: string;
    tag?: string[];
  }[];
}

const initialState: listData = {
  data: [
    {
      taskId: 0,
      title: "",
      description: "",
      status: "",
      createTime: "",
      updateTime: "",
      tag: [],
    },
  ],
};

export default (events = initialState, action: listData) => {
  // console.log(action)
  switch (action.type) {
    case READ_EVENTS:
      // console.log('////////')
      // console.log(action.stub.data)
      // console.log('////////')
      // return action.response.data
      return { ...events, data: action.data };
    default:
      return events;
  }
};
