import axios from "axios";
import { stub } from "./test-stub";

export const READ_EVENTS = "READ_EVENTS";

// const ROOT_URL = "http://localhost:3000"
const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

export async function readEvents(dispatch: any) {
  // const response = await axios.get(`${ROOT_URL}/api/get`)
  // const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  //dispatchでtest.stub.jsonを返す様にする
  dispatch({ type: "READ_EVENTS", stub });
}
