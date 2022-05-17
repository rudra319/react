import React, { useState } from 'react';
import {Button, Container, Row, Col, Card, CardGroup, CardImg} from 'react-bootstrap';
import Button1 from 'react-bootstrap/Button';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import './Chinmayee.css';
import logo from '../../logo.svg';

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
                    <Card className="bg-dark text-white" style={{width: "18rem"}}  > 
                        <CardGroup>
                            
                            <h5 className="card-title">card #01 </h5>
                            <CardImg src={logo}>
                                
                            </CardImg>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Button variant="info" className="btn-sm" onClick={()=>setFlag(!flag)}>Toggle Image</Button>
                        </CardGroup>
                            
                    </Card>



                </Col>
                
                <Col>
                {/* <div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Special title treatment</h5>
<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
                 */}
                </Col>
            </Row>
</Container>
    )

};
