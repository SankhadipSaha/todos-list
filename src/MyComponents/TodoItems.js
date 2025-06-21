import React from 'react'

export const TodoItems = ({todo,onDelete}) => {
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
      <button className="btn btn-sn btn-danger"  onClick={()=>{onDelete(todo)}}>Complete</button>
     </div>
   );
};
