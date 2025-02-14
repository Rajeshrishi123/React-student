import React, { useState } from 'react'
import {  Link, useNavigate  } from 'react-router-dom'

const CreateStudent = () => {
  const [validation , setValidation] = useState(false)
  const navigate = useNavigate();
  const [id, setId]=useState("");
  const [name, setName]=useState("");
  const [place, setPlace]=useState("");
  const [phone, setPhone]=useState("");

  
  


  const submitHandler = (e) =>{
    e.preventDefault();
    const data={id , name , place , phone};
    console.log(data)
     fetch ('http://localhost:3000/students' , {
      method : 'POST',
      headers : {
        "content-type" : "application/json"
      },

      body : JSON.stringify(data)
      
    })
    .then((res)=>{
      alert('Student Data saved successfully !!!');
      navigate('/')
    })
    .catch((err)=> console(err.message));

  }
  

  return (
<div className='create-container'>
 
<form onSubmit={submitHandler}>
      <label htmlFor='id'>ID:</label>
       <input type='number' id='id' name='id' value={id} required onChange={e=>setId(e.target.value) } onMouseDown={() => setValidation(true)}/>
       {id.length === 0 && validation && <span className='span'>Please Enter your Id</span>}

       <label htmlFor='Name'>Name:</label>
       <input type='text' name='name' id='Name' value={name} required onChange={e=>setName(e.target.value) } onMouseDown={() => setValidation(true)}/>
       {name.length === 0 && validation && <span className='span'>Please Enter your name</span>}

       <label htmlFor='Place'>Place:</label>
       <input type='text' name='place' id='Place' value={place} required onChange={e=>setPlace(e.target.value)} onMouseDown={() => setValidation(true)}/>
       {place.length === 0 && validation && <span className='span'>Please Enter your Place</span>}

       <label htmlFor='Phone'>Phone:</label>
       <input type='text' name='phone' id='Phone' value={phone} required onChange={e =>setPhone(e.target.value)} onMouseDown={() => setValidation(true)}/>
       {phone.length === 0 && validation && <span className='span'>Please Enter your Phone number</span>}
       <div>
        <button type='submit'>save</button>
        <Link to='/'>Back</Link>
       </div>
             

</form>
       
    
</div>
  )
}

export default CreateStudent