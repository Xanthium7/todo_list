import React from 'react'
import { useState } from 'react'


function AddTodo({addTodo}) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault()
        if(!title || !desc ){
            alert("Please add title and description")
        }else{
        addTodo(title,desc)
        setTitle("")
        setDesc("")}

    }
  return (
    <div className='container my-3'>
        <h3 className='text-center'>Add A Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlfor="desc" class="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} class="form-control" id="desc"/>
  </div>
  
  <button type="submit" class="btn btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}

export default AddTodo