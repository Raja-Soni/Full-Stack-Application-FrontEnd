import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';

export default function Home() {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/user");
        setUsers(result.data);
    }

    const deleteSelectedUser=async(id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers();
    }
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit/Actions</th>
    </tr>
  </thead> 
  <tbody>
    {
      users.map((user,i)=>(
      <tr>
        <th scope="row">{i+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
          <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`} >View</Link>
          <button className='btn btn-danger mx-2' onClick={()=>deleteSelectedUser(user.id)}>Delete</button>
        </td>  
      </tr>
      ))
    }
    
  </tbody>
</table>

        </div>
    </div>
  )
}

