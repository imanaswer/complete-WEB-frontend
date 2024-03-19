/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import { images, data } from '../../constants';
import { BsFacebook, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="row align-items-center">
        <div className="col-md-2 col-12">
          <img src={images.logofooter} alt="logo" className="img-fluid" />
        </div>
        <div className="col-md-8 col-12 ">
          <ul className="navbar-footer">
            {data.Menu.slice(0, -1).map((item, index) => (
             
              <li> <a href="#" >{item.text}</a></li>
            ))}
          </ul>
        </div>
        <div className="col-md-2 col-12 text-center text-md-end fs-4"><BsFacebook /> <BsTwitter /></div>
      </div>
      <div className="row">

        <div className="col-md-4 col-12">
          <ul className="info-contact">
            <li> <span>Contact us:</span></li>
            <li>Email: info@code-69.com</li>
            <li>Phone: 9446522675</li>
            <li>Address: 1234 Main St
              Moonstone City, Stardust State 12345</li>
          </ul>
        </div>
        <div className="col-md-8 col-12">

         

        </div>

        <div className="rights">
          
          
          

        </div>
      </div>
    </footer>
  )
}

export default Footer