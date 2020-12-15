import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";

const ROOT_URL = "localhost:3000";

// interface GetData {
//   taskId: number;
//   title: string;
//   description: string;
//   status: string;
//   createTime: string;
//   updateTime?: string;
//   tag?: string[];
// }

export const readEvents = async(dispatch:any) => {
  const response = await axios.get(`${ROOT_URL}/api/get`);
  console.log(response)
  dispatch({ type: READ_EVENTS, response });
};

// export const readEvents = () => {
//   const response = axios.get(`${ROOT_URL}/api/get`)
//   console.log(response)
// }