import React from 'react';
import { images } from '../../constants';
import './About.css';

const About = () => {
  return (

    
    <><div className="about-container">
          <div className="about-content">

              <h2>About us</h2>
              <p>At Code 69, we are more than just a company; 
               
                  we are a catalyst for startup success, a beacon of innovation,
                 
                  and a testament to the power of unwavering determination.</p>

          </div>
          <img src={images.about} alt="about" className="about-image" />
      </div><div className='about-box'>
      Founded in the bustling streets of Bengaluru, India's tech hub, by visionary entrepreneurs Harshitha Challa and Bibin S, Code 69 was born from a shared passion for innovation and a deep-seated desire to empower aspiring entrepreneurs. Witnessing the vibrant startup ecosystem in India firsthand, we were inspired by the immense talent and creativity present in our community, yet acutely aware of the barriers that often hindered success.<br/>
      <br/>
      Driven by our vision to democratize entrepreneurship and catalyze innovation, we embarked on a journey to create a platform where entrepreneurs could access the tools, resources, and support needed to turn their ideas into reality. With inclusivity, accessibility, and impact at our core, we assembled a diverse team of experts spanning technology, marketing, finance, and more, each committed to empowering startups and driving positive change.<br/>
      <br/>
      Drawing upon our own experiences as entrepreneurs, we infused Code 69 with a culture of empathy, collaboration, and relentless pursuit of excellence. Since our inception, we have made a significant impact on India's startup landscape, inspiring countless entrepreneurs to pursue their dreams with confidence. Through innovative solutions, personalized support, and strategic partnerships, we have helped startups overcome obstacles, achieve milestones, and make meaningful contributions to society.<br/>
      <br/>
      As proud products of India's entrepreneurial spirit, we continue to embody the values of innovation, resilience, and inclusivity that define our nation's startup ecosystem. Our journey is a testament to the power of vision, collaboration, and determination in driving positive change. As India's startup ecosystem thrives and evolves, Code 69 remains committed to our mission of democratizing entrepreneurship and unlocking the full potential of our brightest minds.<br/>
      <br/>
<b>Join us as we build a brighter future, one startup at a time. Welcome to Code 69!</b>

          </div></>
        
        
    
  );
};

export default About;
