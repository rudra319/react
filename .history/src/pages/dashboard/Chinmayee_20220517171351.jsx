import React, { useState } from 'react';
import {Button, Container, Row, Col, Card, CardGroup} from 'react-bootstrap';
import Button1 from 'react-bootstrap/Button';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import './Chinmayee.css'

export default function Chinmayee (){

const [flag, setFlag] = useState(false);
    return(
        <Container fluid>
            {/* <h1 className={flag ? "heading":'heading1'}>Chinmayee</h1>
            <Button variant="danger" onClick={()=>setFlag(!flag)}>Click</Button>
            <Button1 variant="danger" onClick={()=>setFlag(!flag)}>Click</Button1>
     */}
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                        <h5 class="card-title">#01 Card</h5> 
                        </CardHeader>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Button variant="primary" onClick={()=>setFlag(!flag)}>Click</Button>
                    </Card>
                </Col>
                
                <Col><Card></Card></Col>
            </Row>
</Container>
    )

};
