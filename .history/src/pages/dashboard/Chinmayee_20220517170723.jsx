import React, { useState } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import Button1 from 'react-bootstrap/Button';
import './Chinmayee.css'

export default function Chinmayee (){

const [flag, setFlag] = useState(false);
    return(
        <Container fluid>
            {/* <h1 className={flag ? "heading":'heading1'}>Chinmayee</h1> */}
            <Row>
                <Col>1 of 3</Col>
                
                <Col>3 of 3</Col>
            </Row>
</Container>
    )

};
