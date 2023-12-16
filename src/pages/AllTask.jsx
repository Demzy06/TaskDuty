import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import editLogo from '../assets/clarity_note-edit-line.svg'
import delectLogo from '../assets/fluent_delete-24-regular.svg'


const AllTask = () => {
  useEffect(() => {
    document.title = 'All-Tasks || Page'
  });
  const scrollToTop = ()=>{
    window.scroll({top:0,behavior:'smooth'})
  }
  return (
    <main className="container">
      <div className="mt-4">
        <div className="d-flex justify-content-between align-items-center">

          <Link className='text-decoration-none text-dark'>  
          <h1>My Task</h1>
          </Link>

          <Link to="/NewTask" 
          className="text-decoration-none text-dark">
            <h3 style={{color:'#974fd0'}}>+ Add to My Task</h3>
          </Link>

        </div>
      </div>

      {/* ======================== */}
      <div className="mt-5 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-danger ms-3">Urgent</h4>
          <div className="d-flex gap-3 my-3">

            <Link to='/EditTask' className="text-decoration-none">
              <button type="button" className="btn text-light btn-lg d-flex align-items-center" style={{backgroundColor:"#974fd0"}}>
                <img src={editLogo}  alt="edit-logo" />
                Edit
              </button>
            </Link>

            <div> 

              <button className="btn btn btn-outline-dark btn-lg d-flex align-items-center"
              style={{color:'#974fd0'}}>
                <img src={delectLogo} alt="delect-logo"  />
                Delect
              </button>
            </div>
            

          </div>
        </div>

      <hr />
      <div className="mt-4 p-2">
        <h2>Fintech Website Update</h2>
        <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error laboriosam nobis! Repudiandae ea in deleniti beatae autem nesciunt molestiae.</p>
      </div>
      </div>


      {/* Task 2 */}
      <div className="mt-5 border rounded">
        <div className="d-flex justify-content-between align-items-center ">
          <h4 className="text-success ms-3">Important</h4>
          <div className="d-flex gap-3 my-3">

          <Link to='/EditTask' className="text-decoration-none">
              <button type="button" className="btn text-light btn-lg d-flex align-items-center" style={{backgroundColor:"#974fd0"}}>
                <img src={editLogo}  alt="edit-logo" />
                Edit
              </button>
            </Link>

            
            <button className="btn  btn-outline-dark btn-lg d-flex align-items-center"
              style={{color:'#974fd0'}}>
                <img src={delectLogo} alt="delect-logo"  />
                Delect
              </button>
            

          </div>
        </div>

      <hr />
      <div className="mt-4 p-2">
        <h2>Agro Website Update</h2>
        <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error laboriosam nobis! Repudiandae ea in deleniti beatae autem nesciunt molestiae.</p>
      </div>
      </div>


      {/* Task 3*/}
      <div className="mt-5 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-danger ms-3">Urgent</h4>
          <div className="d-flex gap-3 my-3">

          <Link to='/EditTask' className="text-decoration-none">
              <button type="button" className="btn text-light btn-lg d-flex align-items-center" style={{backgroundColor:"#974fd0"}}>
                <img src={editLogo}  alt="edit-logo" />
                Edit
              </button>
            </Link>

            
            <button className="btn  btn-outline-dark btn-lg d-flex align-items-center"
              style={{color:'#974fd0'}}>
                <img src={delectLogo} alt="delect-logo"  />
                Delect
              </button>
            

          </div>
        </div>

      <hr />
      <div className="mt-4 p-2">
        <h2>Fintech Website Update</h2>
        <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error laboriosam nobis! Repudiandae ea in deleniti beatae autem nesciunt molestiae.</p>
      </div>
      </div>


           {/* Task 2 */}
           <div className="mt-5 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-success ms-3">Important</h4>
          <div className="d-flex gap-3 my-3">

          <Link to='/EditTask' className="text-decoration-none">
              <button type="button" className="btn text-light btn-lg d-flex align-items-center" style={{backgroundColor:"#974fd0"}}>
                <img src={editLogo}  alt="edit-logo" />
                Edit
              </button>
            </Link>

            
            <button className="btn  btn-outline-dark btn-lg d-flex align-items-center"
              style={{color:'#974fd0'}}>
                <img src={delectLogo} alt="delect-logo"  />
                Delect
              </button>
            

          </div>
        </div>

      <hr />
      <div className="mt-4 p-2">
        <h2>Agro Website Update</h2>
        <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error laboriosam nobis! Repudiandae ea in deleniti beatae autem nesciunt molestiae.</p>
      </div>
      </div>

      <Link className="text-decoration-none">
      <p className="text-center fs-3 mt-5 " style={{color: '#974fd0'}} onClick={scrollToTop}>Back to Top</p>
      </Link>

      
    </main>
  );
};

export default AllTask;
