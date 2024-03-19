/* eslint-disable react/style-prop-object */
import React from 'react';
import './CTA.css';
import { images } from '../../constants';

const CTA = () => {
  return (
    <div className="section-padding">
      <div className="row cta">
        <div className="col-lg-8 col-12">
          <h3 className="cta-heading">Let’s make things happen</h3>
          <p className="cta-paragraph pt-2 pb-4">
            <b style={{ fontSize: 'larger' }}>Ready to propel your startup to new heights?</b> Get in touch with Code 69 today to explore how our comprehensive suite of services can empower your business to thrive in today's competitive landscape. From cutting-edge IT solutions to strategic consulting and robust training programs, we're committed to fueling your growth journey. Contact us now to discover how Code 69 can be your partner in success!
          </p>
        </div>
        <div className="col-lg-4 d-lg-flex d-none align-items-center justify-content-end">
          <img src={images.thingshappen} alt="thingshappen" className="cta-img" />
        </div>
      </div>
    </div>
  );
}

export default CTA;
