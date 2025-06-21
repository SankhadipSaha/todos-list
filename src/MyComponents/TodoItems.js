import React from 'react';


export const TodoItems = ({todo,onDelete,onToggle}) => {
   let todosStyle={
    border: "2px solid black",
    margin:"5px",
    padding:"5px",
    borderRadius:"10px",
    // width:"70%",
    // display:"grid",
    
   }
  return (
     <div style={todosStyle}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <label htmlFor='box' style={{ fontWeight: '600',fontSize:"17px",margin:"3px" }}>Tick to done your Task</label>
      <input
         id='box'
         name='taskDone'
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onToggle(todo.id, !todo.isCompleted)} 
        style={{borderRadius: '5px', marginLeft:'5px'}}
      /><br/>
      <button className="btn btn-sn btn-danger"  onClick={()=>{onDelete(todo)}}>Delete</button>
     </div>
   );
};
