import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const StudentTable = () => {

    const [students , setStudents]=useState("");
    const navigate = useNavigate();
   

    const viewButton = (id) =>{
        
        navigate("/student/view/"+id);

    }

    const editDetails =(id)=>{
        navigate("/student/edit/"+id)
    }



    const deleteData =(id)=>{

if(window.confirm("Are you sure you want to delete")){
    fetch ('http://localhost:3000/students/'+id, {
        method : 'DELETE',
        
        
      })
      .then((res)=>
      {
        alert('Student Data Deleted successfully !!!')
        window.location.reload();
      })
      .catch((err)=> console(err.message))
    
    }
}

    

useEffect(()=>{
    fetch('http://localhost:3000/students')
    .then((res) => res.json())
    .then((data)=>{
        setStudents(data);
        
    }).catch((error)=>{
        console.log(error.message)
    })
    

},[])


  return (
    <div className='container'>
        <h1>Student Table</h1>
       
    <div className='table-container'>
    <Link to='/student/create' className='new-btn'> Add new Student</Link>
        
        <table>
            <thead>
                <tr>
                    <th>Sl_No</th>
                    <th>Name</th>
                    <th>Place</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>

               {

                students && students.map((item,index)=>(
                 <tr key={item.id}>
                 <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.place}</td>
                  <td>{item.phone}</td>
                  <td>
                 <button className='btn btn-info' onClick={()=>
                    viewButton(item.id)}> View</button>


                <button className='btn' onClick={()=>
                    editDetails(item.id)}>Edit</button>
                <button className='btn' onClick={()=>
                    deleteData(item.id)}>Delete</button>
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



export default StudentTable