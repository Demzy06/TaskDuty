import React from 'react'
import { Link } from "react-router-dom";
import heroImg from '../assets/heroImg.svg/';
import {Button} from 'react-bootstrap';
 import'../styles/Hero.css' 
const Hero = () => {
  return (
    <main className="container mt-5">
       <div className='row justify-content-between align-items-center'>

        <div className='col-sm-12 col-lg-6'>
          <h2>Manage your Task on <br/> <span style={{color: '#974fd0'}}>Task duty</span></h2>

          <div>
            <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
            <Link to='/AllTask'>
              <button className='w-20 fs-4 to-tasks' varient="secondary" >
            Go to my Task
              </button>
            </Link>
          </div>

          </div>

        <div className="col-sm-12 col-lg-5 pt-3">
        <img className="img-fluid" src={heroImg} alt="hero-image"/>
        </div>

       </div>
    </main>
  )
}

export default Hero