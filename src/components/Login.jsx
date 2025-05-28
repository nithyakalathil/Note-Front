import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

 const [data,changedata]=useState(
        {
            "email":"",
            "password":""
        }
    )
    
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/signin",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="Success") {
    
    
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    navigate("/add")
                    
                    
                } else {
                    alert("email id already exist ")
                    
                }
            }
        )
    }
    
    let navigate = useNavigate()

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <row className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form label">Username</label>
    <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler}/>
            </row>
            <row className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form label">Password</label>
    <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler}/>
            </row>
            <row className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-success" onClick={readValue}>Login</button>
            </row>
        </div>
    </div>
</div>
        
    </div>
  )
}

export default Login