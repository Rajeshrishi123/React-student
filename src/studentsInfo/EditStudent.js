import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {

  const [validation , setValidation] = useState(false)
  const navigate = useNavigate();
  const [id, setId]=useState("");
  const [name, setName]=useState("");
  const [place, setPlace]=useState("");
  const [phone, setPhone]=useState("");

  const {studentid} =useParams();
  console.log(studentid);
  
  // const[studentData,setStudentData]=useState({})
  

useEffect(()=>{
fetch("http://localhost:4000/students/"+studentid)
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  setId(data.id);
  setName(data.name);
  setPlace(data.place);
  setPhone(data.phone)


})
.catch((err)=>console.log(err.message))
},[]);


const submitHandler = (e) =>{
  e.preventDefault();
  const data={id , name , place , phone};
  // console.log(data)
   fetch ('http://localhost:3000/students/'+studentid, {
    method : 'PUT',
    headers : {
      "content-type" : "application/json"
    },

    body : JSON.stringify(data)
    
  })
  .then((res)=>
  {
    alert('Student Data Updated successfully !!!');
    navigate('/')
  })
  .catch((err)=> console(err.message))

}


  return (
    <div>
      <h1>edit student Details</h1>
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
        <button type='submit'>Update</button>
        <Link to='/'>Back</Link>
       </div>
             

</form>
    </div>
  )
}

export default EditStudent