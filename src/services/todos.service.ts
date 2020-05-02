import axios from "axios";
import { Todo } from "../type";
const URL = "http://localhost:3030";

export const todosService = {
  load: (): Promise<Todo[]> => {
    return axios.get(`${URL}/todos`).then((response) => {
      return response.data;
    });
  },
  add: (data: Todo): Promise<Todo> => {
    return axios.post(`${URL}/todos`, data).then((response) => {
      return response.data;
    });
  },
  delete: (data: Todo): Promise<Todo> => {
    return axios.delete(`${URL}/todos/${data.id}`).then((response) => {
      return response.data;
    });
  },
};
