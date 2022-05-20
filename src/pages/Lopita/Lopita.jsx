import React, { useState,useEffect } from 'react';
import {Button, Container, Row, Col,Navbar,Nav,striped,bordered ,hover ,Table,Card, Form} from 'react-bootstrap';
import Button1 from 'react-bootstrap/Button';
import './Lopita.css';

export default function Main (){
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
        <div className='main'>
          <h1>Lopita</h1>
          <hr className="line"/>
          <h1>Form</h1>
           <Form method='POST'>
          <div className='card'>             
 <div class="row mx-0">
        <div class="form-group col-3">   
           
               <label>Name</label>
               <input id="username" type="name" name="name"                 
               class="form-control"                                               
               placeholder="Name" required></input>
         
       </div>
       <div class="form-group col-3">
           
              <label>Mobile</label>
              <input type="text" id="mobile" 
              name="mobile"class="form-control" 
              placeholder="Mobile" required></input>
           
       </div>
       <div class="form-group col-3">
           
              <label>Email</label>
              <input type="email" id="email" 
              name="email"class="form-control" 
              placeholder="Email" required></input>
           
       </div>
       
       <div class="form-group col-3">
           
            
              
              <Button variant ='primary'  >Submit</Button>
              <Button variant ='danger'>Reset</Button>
       </div>
       
    </div>
    </div>
    </Form>
          <br></br>&nbsp;&nbsp;&nbsp;
          <div className='main'> 
          <h1>VIEW</h1>
          

           <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>SL.NO#</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                {distRes
                .filter(item => item.vchName !== '')
                .map((item, index)=>{
                  
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
       </div>
       

    )

};
