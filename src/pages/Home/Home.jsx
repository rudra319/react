import React, { useState } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import Button1 from 'react-bootstrap/Button';
import './Home.css'

export default function Home (){

const [flag, setFlag] = useState(false);
    return(
        <Container fluid>
            <h1 className={flag ? "heading":'heading1'}>Dashboard</h1>
            <Button variant="danger" onClick={()=>setFlag(!flag)}>Click</Button>
            <Button1 variant="danger" onClick={()=>setFlag(!flag)}>Click</Button1>
    
            <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
</Container>
    )

};
