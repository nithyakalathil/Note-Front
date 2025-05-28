import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {

const [data,changedata]=useState(
    {
        "tags":""
    }
)

const [result,setresult]=useState(
    [
       
       
    ]
)

const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}


const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/search",data).then(
        (response)=>{
            console.log(response.data)
            setresult(response.data)
        }
    )
}

const deleteCourse=(id)=>{
    let input={"_id":id}
    axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Success") {
                alert("deleted successfully")
            } else {
                alert("error")
            }
        }
    )
}

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Name</label>
<input type="text" className="form-control" name="tags" value={data.tags} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readValue}>Search</button>

        </div>
    </div>

    <table className="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">comment</th>
      
    </tr>
  </thead>
  <tbody>
   {result.map((value,index)=>{
    return  <tr>
    <th scope="row">{value.title}</th>
    <td>{value.content}</td>
    <td>
            <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button>
        </td>
  </tr>
   })}
    
    
  </tbody>
</table>


</div>

    </div>
  )
}

export default Search