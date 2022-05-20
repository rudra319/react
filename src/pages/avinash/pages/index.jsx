import React, { Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import Home from '../../../pages/avinash/pages/Home';

import Footer from '../../../pages/avinash/includes/Footer';
import { Container } from 'react-bootstrap';
import Header from '../../../pages/avinash/includes/Header';


function Avinash() {
    return (
        <Container>
        <Header />
        <Home />
        <Footer />
        </Container>
        );
}

export default Avinash;