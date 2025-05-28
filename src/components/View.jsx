import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const View = () => {
    
    const [data,changedata]=useState(
        []
    )

const fetchData=()=>{
    axios.get("http://localhost:8080/view").then(
        (response)=>{
            
            changedata(response.data)
        }
    )
}

useEffect(()=>{fetchData()},[])
  return (
    <div>
<Navbar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


        <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Tag</th>
      <th scope="col">content</th>
     
    </tr>
  </thead>
  <tbody>
    {data.map((value,index)=>{
        return <tr>
        <th scope="row">{value.title}</th>
        <td>{value.tags}</td>
        <td>{value.content}</td>
 <Link to={`/edit/${value._id}`} className="btn btn-primary">
          Edit
        </Link>
      
      </tr>
    })}
    
  </tbody>
</table>


        </div>
    </div>
</div>



    </div>
  )
}

export default View