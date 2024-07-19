import { useState, useEffect } from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import linkedin from '../assets/img/linkedin.png';
import gmail from '../assets/img/gmail.png'
import github from '../assets/img/github.png'
import {HashLink} from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true); 
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
    }, [])


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                {/* <Navbar.Brand href="/">
                    <img alt="Logo" />
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                    <div className="social-icon">
                        <a className='nav-icon' href="https://github.com/chhavx1618"><img src={github} alt="linkedin" /></a>
                        <a href="mailto:chhavi.cw.1618@gmail.com"><img src={gmail}alt="" /></a>
                    </div>
                    <HashLink to='#connect'>
                        <button href="https://www.linkedin.com/in/chhavi-arora-b2483127a/" className="vvd"><span>Let's Connect</span></button>
                    </HashLink>
                    </span>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}