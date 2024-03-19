import React from 'react'
import { Headings, IconScroll } from '../../components';
import { data } from '../../constants';
import './CaseStudies.css';



const CaseStudies = () => {
  return (
    <div className="section-padding" id="use-cases">

      <Headings title="Case Study " text=" Igniting Startup Dreams with Code 69
" />

        <div className="case-studies">

          {data.CaseStudies.map(({ text, link }, index) => (
            <div key="index" className="case-studies-item">
              <p>{text}</p>
            </div>
          ))}
        </div>
        
    <IconScroll />
   
      </div>

  )
}

export default CaseStudies