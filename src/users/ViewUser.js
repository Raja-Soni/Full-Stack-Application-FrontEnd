import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadUser();
    })

    const loadUser=async()=>{
        const resultData=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(resultData.data)
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4  mt-2 shadow'>
                <h1 className='text-center m-4 '>User Details</h1>

                <div className="card">
                    <div className="card-header">
                        <h4>All Details of User :</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Name : {user.name}</b>
                            </li>
                            <li className="list-group-item">
                               <b> UserName : {user.username}</b>
                            </li>
                            <li className="list-group-item">
                                <b>Email ID : {user.email}</b>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-outline-primary my-2" to="/">Back To Home</Link>
            </div>
        </div>
    </div>
  )
}
