import { todoActions, Type } from "../actions/index";
export interface State {
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

export const initialState: State = {
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

export default function reducer(
  state: State = initialState,
  action: todoActions
) {
  switch (action.type) {
    case Type.read:
      // return Object.assign({}, state, action.data);
      return {...state,data:action}
    default:
      return state;
  }
}
