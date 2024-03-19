import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Process, Services, Team, CTA } from './container';

import { Menu } from './components';
import Appdev from './container/Appdev/Appdev';
import Webdev from './container/Webdev/Webdev';
import Aiml from './container/Aiml/Aiml';
import Cloud from './container/Cloud/Cloud';
import Blockchain from './container/Blockchain/Blockchain';
import Cyber from './container/Cyber/Cyber';
import About from './container/About/About';

const App = () => (
  <Router>
    <div className="container">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Appdev"  element={<Appdev />} />
        <Route path="/Webdev"  element={<Webdev />} />
        <Route path="/Aiml"  element={<Aiml />} />
        <Route path="/Cloud"  element={<Cloud />} />
        <Route path="/Blockchain"  element={<Blockchain />} />
        <Route path="/Cyber"  element={<Cyber />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/About" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/process" element={<Process />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  </Router>
);

const Home = () => (
  <>
    <Hero />
    <Services />
    <CTA />
    <CaseStudies />
    <Process />
    <Team />
    <Testimonials />
    <Contact />
    <Footer />
    
  </>
);

export default App;