import React, { useState } from 'react';


export const AddTodo = ({addTodo}) => {
  const [title,setTitle]= useState("");
  const [desc,setDesc]= useState("");

  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc ){
      alert("Title or Description cannot be blank")
    }
    else{
      addTodo(title,desc);
      setTitle("");
      setDesc("");
    }
  }
  
  return (
    <div className='container my-3'>
      <h3>Add a Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="from-label " style={{ fontWeight: '600',fontSize:"20px",margin:"3px" }}>Title:</label>
          <input type="text" value={title} placeholder='Input your Title' onChange={(e)=> setTitle(e.target.value)}
          style={{fontWeight:"400", fontSize:"17px"}} className='form-control' id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="from-label "style={{ fontWeight: '600',fontSize:"20px",margin:"3px" }}>Description:</label>
          <input type="text" value={desc} placeholder='Input your Description' onChange={(e)=> setDesc(e.target.value)}
          style={{fontWeight:"400",fontSize:"17px"}} className='form-control' id="desc" />
        </div>
        <button type="submit" className='btn btn-bg btn-success'>Add Task</button>
      </form>
      <hr />  
    </div>
    
  )
}
