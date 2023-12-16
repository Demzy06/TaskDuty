// import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from './layout/NavBar';
import AllTask from './pages/AllTask';
import EditTask from './pages/EditTask';
import NewTask from './pages/NewTask';
import Home from './pages/Home';



function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/AllTask' element={<AllTask/>}/>
        <Route path='/EditTask' element={<EditTask/>}/>
        <Route path='/NewTask' element={<NewTask/>}/>


      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
