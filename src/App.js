import React from 'react'
import { Route, Routes} from 'react-router-dom';
import StudentTable from './studentsInfo/StudentTable';
import CreateStudent from './studentsInfo/CreateStudent';
import EditStudent from './studentsInfo/EditStudent';
import ViewDetailsStudent from './studentsInfo/ViewDetailsStudent';

const App = () => {

  return(

    
    <Routes>
      <Route path='/' element={<StudentTable/>}></Route>
      <Route path ='/student/create' element={<CreateStudent/>} ></Route>
      <Route path='/student/edit/:studentid' element={<EditStudent/>}></Route>
      <Route path='/student/view/:studentid' element={<ViewDetailsStudent/>}></Route>
    </Routes>
    
  )
  
   
  
}

export default App