import axios from "axios";
import { stub } from "./test-stub";
import { Action } from "redux";

// const ROOT_URL = "http://localhost:3000"

//typeの種類
export const Type = {
  read: "READ",
  create: "CREATE",
  update: "UPDATE",
  delete: "DELETE",
} as const;

type Type = typeof Type[keyof typeof Type];

//actionの型
export interface getAction extends Action {
  type: string,
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


export const readEvents = (): getAction => ({
  type: Type.read,
  data: stub,
});

export type todoActions = getAction