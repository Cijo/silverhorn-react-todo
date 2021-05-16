import { SET_TODO, SET_TODOS, SET_FILTER } from "./actions";

const defaultState = {
    todos: [],
    todo: {},
    showAll: true,
    showComplete: false
}

function rootReducer(state= defaultState, action) {
    const {type, payload} = action;
    
    switch(type){
        
        case SET_TODOS: 
            return{
                ...state,
                todos: payload.todos ?? defaultState.todos
            }
        case SET_TODO:
            return {
                ...state,
                todo: action.payload?.todo ?? defaultState.todo
            }
        case SET_FILTER:
            return{
                ...state,
                showComplete: action.payload?.showComplete ?? false,
                showAll: action.payload?.showAll ?? false
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;