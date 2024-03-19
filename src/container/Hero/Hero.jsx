import React from 'react';
import { images } from '../../constants';
import { IconScroll } from '../../components';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title">Empowering Startups with Comprehensive Solutions by Code 69</h1>
          <p className="py-4">Code 69 is a forward-thinking private limited company dedicated to providing comprehensive solutions tailored to meet the diverse needs of startups, guided by a commitment to innovation, inclusivity, and collaboration.</p>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
   
      <IconScroll />
    </div>
  )
}

export default Hero;
