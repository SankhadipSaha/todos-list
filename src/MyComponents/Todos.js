import React from 'react';
import { TodoItems } from './TodoItems';
import {useState} from 'react';


export const Todos = (props) => {
  const [view, setView] = useState("all");


  const filteredTodos = props.todos.filter(todo => {
  if (view === "active") return !todo.isCompleted;
  if (view === "completed") return todo.isCompleted;
  return true; 
});

  let headingText = "";
  if (view === "all") headingText = "All Tasks";
  else if (view === "active") headingText = "Active Tasks";
  else if (view === "completed") headingText = "Completed Tasks";


  return (
    <div className="container" >
        <h3  className="text-center my-3">Tasks List</h3>
        <div className="btn-group">
          <button className="btn btn-dark m-3 rounded-3" onClick={() => setView("all")}>All</button>
          <button className="btn btn-primary m-3 rounded-3" onClick={() => setView("active")}>Active</button>
          <button className="btn btn-success m-3 rounded-3" onClick={() => setView("completed")}>Completed</button>
        </div>
        
        <h3>{headingText}</h3>

        {props.todos.length===0? "No Task to display":
            filteredTodos.map((todo)=>{
            return <TodoItems todo={todo} key={todo.id} onDelete={props.onDelete}
             onToggle={props.handleToggle}/>
            })
        }
        
        
    </div>
  )
}
