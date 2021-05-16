import React, { useEffect } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import ToDoListFilters from './ToDoListFilters';
import { useSelector, useDispatch } from 'react-redux';
import actions from "./actions";


function App() {

  const todo = useSelector(state => state.todo);
  const todos = useSelector(state => state.todos);
  const showAll = useSelector(state => state.showAll);
  const showComplete = useSelector(state => state.showComplete);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actions.getTodos());
  }, [])

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(element => element.id === id);
    newTodos.splice(index,1);
    dispatch(actions.setTodos({todos:[...newTodos]}));
  }

  const completeTodo = (id) => {
    const index = todos.findIndex(element => element.id === id);
    const changedTodo = todos[index];
    const newTodos = [...todos];
    newTodos[index].completed = !changedTodo.completed;
    dispatch(actions.setTodos({todos: [...newTodos]}));
  }

  const setFilter = (data) => {
    dispatch(actions.setFilter({...data}))
  }

  const completedTaskCount = () => {
    return todos.filter((val) => val.completed !== true ).length;
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      addTodo();
    }
  }

  const addTodo = () => {
    dispatch(actions.setTodos({todos:[...todos, todo]}));
    dispatch(actions.setTodo());
  }

  return (
    <div id="app-container" className="app-container">
      <div className="app-header">
        <div className="today">
          <h2>{todos.length} Tasks</h2>
        </div>
        <div className="task-count">
          <span>{completedTaskCount()} Remain</span>
        </div>
      </div>
      <div className="app-body">
        { (todos.length > 0) &&  
          <ToDoListFilters setFilter={setFilter}/>
        }
        { (todos.length > 0) &&  
          <ToDoList 
            removeTodo={removeTodo} 
            completeTodo={completeTodo} 
            showAll={showAll} 
            showComplete={showComplete} 
            todos={todos} />
        }
      </div>
      <div className="app-form">
        <input 
          placeholder="Add Todo.." 
          value={todo.title} 
          onChange={(e)=> dispatch(actions.setTodo({ todo: { id: ( (todos.length ?? 0) + 1), title:e.target.value, completed: false} })) } 
          onKeyUp={ handleKeyPress }
          name="todo" 
          type="text" 
          className="input-text"  />

      <button 
        onClick={()=> addTodo } 
        className="btn btn-success">
          ADD
      </button>
    </div>
	</div >
  );
}

export default App;
