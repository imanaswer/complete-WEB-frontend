import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import { Headings } from '../../components';
import { data } from '../../constants';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import './Services.css';

const Services = () => {
  return (
    <div id="services" className="d-block pt-md-4">
      <h1>Services</h1>
      <Headings text="Code 69 offers a comprehensive suite of services tailored specifically to support startups, including innovative IT solutions such as bespoke software development, cybersecurity measures, and website design, expertise in data science and analytics, efficient operations and logistics support, strategic marketing and branding initiatives, expert financial advisory services, strategic consulting solutions, and robust training and educational programs aimed at empowering startup founders and teams.  " />
      
      <div className="row">
        {data.ServicesData.map(({ titleone, titletwo , link, itemclass, imgURL }, index) => (
          <div className="col-lg-6 col-12" key={index}>
            <div className={`row ${itemclass}`}>
              <div className="col-md-6 box">
                <div>
                  <span>{titleone} </span> 
                  <span>{titletwo}</span> 
                </div>
                {/* Use Link component instead of anchor tag */}
                <Link to={link} className="readmore">
                  <BsFillArrowUpRightCircleFill /> Learn more
                </Link>
              </div>
              <div className="col-md-6 text-end"><img src={imgURL} alt={titleone} className="img-fluid img-services" /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
