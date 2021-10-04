import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <NavLink to="/home"><i className="fas fa-university"></i> <strong>Online Education</strong></NavLink>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="m-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <ul className="nav-menu">
                                    <li> <NavLink to="/home"> Home </NavLink></li>
                                    <li> <NavLink to="/About">About </NavLink></li>
                                    <li> <NavLink to="/services/Course"> Services </NavLink></li>
                                    <li> <NavLink to="/teachers"> Teachers </NavLink></li>
                                    <li> <NavLink to="/testimonial"> Testimonial </NavLink></li>
                                </ul>

                            </Nav>
                            <Form className="d-flex search-area">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <Button className="search-icon" variant="outline-success"><i className="fas fa-search"></i></Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div >
    );
};

export default Header;