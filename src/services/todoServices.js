import axios from "axios";
const API = "https://64f84d3c824680fd217f6300.mockapi.io/list";

const getTodo = () => axios(API).then(({ data }) => data);

const changeTodoItem = (id, item) =>
  axios
    .put(API + `/${id}`, item, {
      headers: { "Content-type": "application/json" },
    })
    .then(({ data }) => data);

const deleteTodoItem = (id) =>
  axios.delete(API + `/${id}`).then(({ data }) => data);

const addTodoItem = (item) =>
  axios
    .post(API, item, {
      headers: { "Content-type": "application/json" },
    })
    .then(({ data }) => data);

export { getTodo, changeTodoItem, deleteTodoItem, addTodoItem };
