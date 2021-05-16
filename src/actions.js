export const GET_TODOS = "GET_TODOS";
export const SET_TODOS = "SET_TODOS";
export const SET_TODO = "SET_TODO";
export const GET_TODO = "GET_TODO";
export const SET_FILTER = "SET_FILTER";

const actions = {
    getTodos: () => {return {type: GET_TODOS}},
    setTodos: (data) => {return {type: SET_TODOS, payload: data}},
    setTodo: (data) => {return {type: SET_TODO, payload: data}},
    getTodo: () => {return {type: GET_TODO}},
    setFilter: (data) => {return {type: SET_FILTER, payload: data}}
}

export default actions;
