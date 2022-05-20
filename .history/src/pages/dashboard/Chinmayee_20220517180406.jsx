import React, { useState } from 'react';
import {Button, Container, Row, Col, Card, CardGroup, CardImg} from 'react-bootstrap';
import Button1 from 'react-bootstrap/Button';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import './Chinmayee.css';
import logo from '../../logo.svg';

export default function Chinmayee (){

const [show, setShow] = useState(true);


    return(
        <Container fluid>
            {/* <h1 className={flag ? "heading":'heading1'}>Chinmayee</h1>
            <Button variant="danger" onClick={()=>setFlag(!flag)}>Click</Button>
            <Button1 variant="danger" onClick={()=>setFlag(!flag)}>Click</Button1>
     */}
            <Row>
                <Col>
                    <Card className="bg-dark text-white" style={{height: "315px",width:"300px"}}  > 
                        <CardGroup>                            
                            <h5 className="card-title">card #01 </h5>
                            <span style={{height: "200px"}} >
                                {show === true && (
                                <>
                                        <CardImg src={logo}>

                                        </CardImg>
                                </>
                                )}
                            </span>
                            <p className="card-text">An example of toggle image.</p>
                            <Button variant="info" className="btn-sm" onClick={() => setShow(!show)} >Toggle Image</Button>
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
