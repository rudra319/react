import React, {Component} from 'react';
import logo from '../img/logo.png';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

export default function Header() {
    return (
        <header id="header" class="header">
            <Row>
                <Col sm={4} style={{padding:'20px'}}><a><img style={{width:'100px'}} src={logo} /></a></Col>
                <Col sm={8} style={{padding:'30px'}}><h1>Biju Swasthya Kalyan Yojana</h1><br></br>
                <Navbar bg="light" expand="lg" className="pull-right">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Dashboard</Nav.Link>
                        <Nav.Link href="#link">Hospitals</Nav.Link>
                        <Nav.Link href="#link">Mo-Seva Kendra</Nav.Link>
                        <NavDropdown title="Card" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Card Details</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Card Related Issue</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Feedback</NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                </Col>
            </Row>
        </header>
    )
}