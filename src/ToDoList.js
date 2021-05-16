import React from 'react';

const Item = (props)=>{
    const {todo, index, completeTodo, removeTodo} = props;
    {  return !!(props) ?  
        (
            <li className="todo-list" key={`task-${todo.id}`} id={todo.id}>
                <div className="list-item-view">
                    <div className="item">
                        <input type="checkbox" onChange={()=> completeTodo(todo.id) } checked={todo.completed} value="todo.completed" name="todo.completed" />
                        <label className={ todo.completed  ? "completed": null }>{todo.title}</label>
                    </div>
                    <button onClick={()=> removeTodo(todo.id)} className="btn btn-danger">Delete</button>
                </div>
            </li>
           ) : null
    }
}

const ToDoList = (props) => {
    const { todos, showAll, showComplete } = props;  
    let _todos = [...todos];

    if(!showAll){
        if(showComplete) {
            _todos = _todos.filter((val)=> val.completed);
        } else {
            _todos = _todos.filter((val)=> !val.completed);
        }
    }
    
    return (
        
        <ul>
            { _todos.map((todo, index)=> 
                <Item removeTodo={props.removeTodo} completeTodo={props.completeTodo} todo={todo} index={index} />
            ) }		
	    </ul>
    )
}

export default ToDoList;