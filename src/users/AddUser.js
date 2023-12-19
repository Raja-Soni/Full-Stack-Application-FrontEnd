import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate()

    const [user,setUsers]=useState({
        name:"",
        username:"",
        email:""
    });

    const{name,username,email}=user;

    const onInputChange=(e)=>{
        setUsers({...user,[e.target.name]:e.target.value})
        
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/");
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4  mt-2 shadow'>
                <h2 className='text-center m-4 '>Register New User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor='Name' className='form-label'>Name</label>
                    <input
                     type={"text"}
                     name="name"
                     className="form-control" 
                     value={name}
                     onChange={(e)=>onInputChange(e)}
                     placeholder='Enter Your Name Here...'/>
                </div>

                <div className="mb-3">
                    <label htmlFor='Username' className='form-label'>User Name</label>
                    <input 
                    type={"text"} 
                    name="username" 
                    className="form-control" 
                    value={username} 
                    onChange={(e)=>onInputChange(e)}
                    placeholder='Enter Your User Name Here...'/>
                </div>

                <div className="mb-3">
                    <label htmlFor='Email' className='form-label'>Email-ID</label>
                    <input 
                    type={"text"} 
                    name="email" 
                    className="form-control" 
                    value={email} 
                    onChange={(e)=>onInputChange(e)}
                    placeholder='Enter Your Email-ID Here...'/>
                </div>
                <button type='submit' className='btn btn-outline-primary shadow'>Submit</button>
                <Link className='btn btn-outline-danger mx-2 shadow' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
