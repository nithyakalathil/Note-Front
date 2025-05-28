import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SignUp = () => {
    

    const [data,changedata]=useState(
        {
            "sname":"",
            "email":"",
            "phone":"",
            "gender":"",
            "password":"",
            "conf":""
        }
    )
    
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
        console.log(data)
        if (data.password == data.conf) {
        axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="Success") {
    
                    alert("successfully done")
                    changedata({
                        "sname":"",
                        "lname":"",
                        "email":"",
                        "phone":"",
                        "gender":"",
                        "password":"",
                        "conf":""
                    })
                } else {

                    alert("error")
                    changedata({
                        "sname":"",
                        "lname":"",
                        "email":"",
                        "phone":"",
                        "gender":"",
                        "password":"",
                        "conf":""
                    })
                    
                }
            }
        )}
        else {
            alert("password and conformation password are not same")
        }
    }
    

  return (
    <div>
        <Navbar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

       <div className="row g-3">
        <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">First Name</label>
    <input type="text" className="form-control" name="sname" value={data.sname} onChange={inputHandler}/>
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Last Name</label>
    <input type="text" className="form-control" name="lname" value={data.lname} onChange={inputHandler}/>
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Phone Number</label>
    <input type="text" className="form-control" name="phone" value={data.phone} onChange={inputHandler}/>
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Email</label>
    <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler}/>
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Password</label>
    <input type="password" name="password" id="" className="form-control"  value={data.password} onChange={inputHandler} />
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">confirm password</label>
    <input type="password" name="conf" id="" className="form-control" value={data.conf} onChange={inputHandler}/>
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <button className="btn btn-success" onClick={readValue}>Register</button>
        </div>
                <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <a href="/login" className="btn btn-primary">Back to login</a>
                </div>

       </div>


        </div>
    </div>
</div>

    </div>
  )
}

export default SignUp