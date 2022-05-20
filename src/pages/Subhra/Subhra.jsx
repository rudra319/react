import React, { useState,useEffect } from 'react';
import {Button, Container, Row, Col, Card, CardGroup, CardImg} from 'react-bootstrap';
import Button1 from 'react-bootstrap/Button';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import './subhra.css';
import logo from '../../logo.svg';

export default function Subhra (){

const [show, setShow] = useState(true);

const [feedbackData, setFeedbackData] = useState({});
const [distRes, setDistRes] = useState([]);
const getFeedBackData= async()=>{

  // const getFeedback = await fetch("http://164.164.122.169:8090/state-dashboard/api/BskyData/getFeedback/97d7f7d0-2c6e-4f80-bce2-0d8b5cfaab5b");
  // console.log("getFeedback::::",getFeedback);

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

    return(
        <div >
     <div class="Banner-Background">
       
        <h1>This platform aims to register your grievance and assist you in its redressal</h1>
        <form>
  <label>
    Name: 
    <input type="text" name="name" />
  </label><br></br><br></br>

    <label>
      District:  
      <select>
      {distRes.map(item=>{
        if(item.vchName){  
        return(
        <option value="{item.vchName}">{item.vchName}</option>)
        }
      })}
        </select>
  </label>
  <br></br><br></br> 
  <label> Complain : <textarea name="complain" id="" ></textarea>
  </label> <br></br><br></br> 
  <input type="submit" value="Submit" class="btn btn-primary"/>
</form>
      </div>
    </div>
    )

};
