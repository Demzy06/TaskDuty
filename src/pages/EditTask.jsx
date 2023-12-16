import React from 'react'
import { Link } from "react-router-dom";
import chevronleft from '../assets/eva_arrow-ios-back-fill.svg';
import Form from 'react-bootstrap/Form'

const EditTask = () => {
  // useEffect(()=>{
  //   document.title = "EditTask || Page"
  // })
  const scrollToTop = ()=>{
    window.scroll({top:0,behavior:'smooth'})
  }
  return (
    <main className='container'>
      <div className="mt-4">

      <Link to='/AllTask' className='fs-3 fw-bold text-decoration-none text-dark'>
        <img src={chevronleft} alt="arrow-pic" style={{height:'3rem', marginTop: '-7px'}}/>
      EDIT NEW TASK
      </Link>

      </div>
      <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title fs-4">Task Title</h5>
        <input
          type="text"
          className="w-100"
          placeholder="E.g Project Completion"
        />
      </div>

      <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title fs-4">Description</h5>
        <input type="text" className="w-100" placeholder='Edit task......'/>
      </div> 

      {/* Options */}
      <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title fs-4">Tags</h5>
        <Form.Select aria-label="Default select example" className="form-select">
          <option value="">
            <span>URGENT</span> <span>IMPORTANT</span>
          </option>
          <option value="1"> <span className='tag1'>Urgent</span> </option>
          <option value="2">Important</option>
        </Form.Select>
      </div>

      <div style={{width: '94%'}} className='m-auto'>
        <button className="btn btn-lg text-light fs-4 w-100" style={{backgroundColor:"#974FD0"}}>
          Done
        </button>
      </div>
      <Link onClick={scrollToTop} className='text-decoration-none'>
        <p className="text-center fs-4 mt-5" style={{ color: "#974FD0", }}>
          Back to Top
        </p>
      </Link>
    </main>
  )
}

export default EditTask;