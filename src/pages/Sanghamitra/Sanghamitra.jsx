import React, { useState,useEffect } from 'react';
import {Button, Container, Row, Col,Navbar,Nav,striped,bordered ,hover ,Table,Card} from 'react-bootstrap';
import Button1 from 'react-bootstrap/Button';
import './Sanghamitra.css'

export default function Demo (){
    const [feedbackData, setFeedbackData] = useState({});
    const [distRes, setDistRes] = useState([]);
    const [count, setCount] = useState(1);
    const getFeedBackData= async()=>{
        // "Fetch" is a Promise Function used to get API responses.
        // "await" is used to wait untill we get a response.

        /******************* METHOD 1**************************** */ 
        // const getFeedback = await fetch("http://164.164.122.169:8090/state-dashboard/api/BskyData/getFeedback/97d7f7d0-2c6e-4f80-bce2-0d8b5cfaab5b");
        // console.log("getFeedback::",getFeedback);
        /******************* METHOD 2**************************** */ 

        await fetch("http://164.164.122.169:8090/state-dashboard/api/BskyData/getFeedback/97d7f7d0-2c6e-4f80-bce2-0d8b5cfaab5b")
            .then(response =>  
            response.json()
            )
            .then(data => {
            console.log("data::::",data);
            setFeedbackData(data);
        });
        console.log("getFeedback1:::",feedbackData.status)    
        
      }
      useEffect(()=>{
        getFeedBackData();
      },[]);   
      
      useEffect(()=>{
        if(feedbackData.distRes){
          setDistRes(feedbackData.distRes);
        }
      },[feedbackData]);

const [flag, setFlag] = useState(false);
    return(
       <div className='Demo'>
           <h1>React Tutorial</h1>
           
           <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">View List</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Syllabus</Nav.Link>
                <Nav.Link href="#pricing">Tutorials</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <br></br>
           <Button variant='primary'>View</Button>{' '}
           <Button variant='danger'>Hide</Button>
           <br></br>&nbsp;&nbsp;&nbsp;

           <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>SL.NO#</th>
                    <th>Citizen Id</th>
                    <th>Citizen Name</th>
                    <th>Citizen Email</th>
                    <th>Citizen Mobile</th>
                    </tr>
                </thead>
                <tbody>
                {distRes.map((item, index)=>{
                  
                    return(<tr>
                    <td>{index+1}</td>
                    <td>{item.intId?item.intId:"NA"}</td>
                    <td>{item.vchName?item.vchName:"NA"}</td>
                    <td>{item.vchMail?item.vchMail:"NA"}</td>
                    <td>{item.intMobile?item.intMobile:"NA"}</td>
                    </tr>)

                })}
                </tbody>
            </Table>
           
       </div>

    )

};
