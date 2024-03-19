import React from 'react';
import { Headings } from '../../components';
import { data } from '../../constants';
import { BsLinkedin } from 'react-icons/bs';
import './Team.css';

const Team = () => {
  return (
    <div className="section-padding">
      <h1>Team</h1>
      <Headings text="Meet the dynamic minds behind Code 69, where innovation meets integrity, and dedication drives transformative solutions for startups worldwide." />

      <div className="row">
        {data.Team.map(({ name, position, info, foto, linkedin }, index) => (
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card-team" key={index}>
              <div className="card-team-header"> 
                <img src={foto} alt={name} />
                <p className="text-black"> <span>{name}</span>{position}</p>
                <a href={linkedin} alt={`Linkedin + ${name}`} ><BsLinkedin /></a>
              </div>
              <p className="text-black">{info}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex mt-2 justify-content-md-end justify-content-center">
     
      </div>
    </div>
  );
};

export default Team;
