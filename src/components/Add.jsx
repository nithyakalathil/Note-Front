import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {


       
const [data,changedata]=useState(
    {
       "title":"",
            "content":"",
            "tags":"" 
        
    }
)

const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Success") {

                alert("add successfully")
                
            } else {
                alert("error")
                
            }
        }
    )
    console.log(data)

}

  return (
    <div>
        <Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

       <div className="row g-3">
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Title</label>
    <input type="text" className="form-control" name="title" value={data.title} onChange={inputHandler}/>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Content</label>
            <textarea name="content" id="" className="form-control" value={data.content} onChange={inputHandler}></textarea>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Tag</label>
    <input type="text" className="form-control" name="tags"  value={data.tags} onChange={inputHandler}/>
        </div>
        
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-success" onClick={readValue}>AddNote</button>
        </div>
                

       </div>

    </div></div></div></div>
  )
}

export default Add