import React, { Component, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AddFeedback from './AddFeedback';

export default function Deepti (){

  const [feedbackData, setFeedbackData] = useState({});
  const [distRes, setDistRes] = useState([]);

  const getFeedbackData = async() => {
    await fetch("http://164.164.122.169:8090/state-dashboard/api/BskyData/getFeedback/97d7f7d0-2c6e-4f80-bce2-0d8b5cfaab5b")
      .then(response => response.json())
      .then(data => {
          console.log("data::::",data);
          setFeedbackData(data);
      });
  }
    
  useEffect(()=>{
    getFeedbackData();
  },[]);

  useEffect(()=>{
    if(feedbackData.distRes){
      setDistRes(feedbackData.distRes);
    }
  },[feedbackData]);

    return(
      <>
      <Helmet>
        <title>Deepti</title>
      </Helmet>
      <div className='container'>
        <h1>Deepti</h1>
        <div className="row mt-4">
          <AddFeedback />
          <div className="col-md-7 offset-md-1 table-responsive">
            <h4>View User</h4>
            <table className="table table-hover table-bordered">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Remarks</th>
                  <th>Given On</th>
                </tr>
              </thead>
              <tbody>

              {distRes
                .filter((item) => item.vchName != '')
                .map((item,index)=>{
                  return(<tr>
                    <td>{index+1}</td>
                    <td>{item.vchName}</td>
                    <td>{item.vchMail}</td>
                    <td>{item.intMobile}</td>
                    <td>{item.vchFeedback}</td>
                    <td>{item.dtmCreatedOn}</td>
                  </tr>)                  
              })}           
                
              </tbody>
            </table>
          </div>

        </div>
      </div>
   </> 
   )
}