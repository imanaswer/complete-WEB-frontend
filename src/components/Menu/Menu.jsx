import React from 'react';
import { data, images } from '../../constants';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css'; // Import the CSS file

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
            <Container>
                <Navbar.Brand href="/">
                    <img src={images.logo} alt="logo" />
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        {data.Menu.map((item, index) => (
                            <Nav.Link href={item.link} key={index} className={`nav-link ${item.className}`}>{item.text}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;
