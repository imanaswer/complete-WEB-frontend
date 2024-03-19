
import React from 'react';
import './Headings.css'; // Import the CSS file for headings styles

const Headings = ({ title, text }) => {
  return (
    <div className="heading-container"> {/* Wrap text content inside a container */}
      <h2 className="heading-title" style={{ marginBottom: '20px', textAlign: 'center' }}>{title}</h2>{/* margin to give scpace af title */}
      <p className="heading-text"style={{ marginTop: '0', textAlign: 'center' }}>{text}</p>
      
    </div>
  );
}

export default Headings;
