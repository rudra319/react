import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function AddFeedback (){

  const [formData, setFormData] = useState({});

  const formBtnClick = () => {
    console.log("form data :: ",formData);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    fetch("http://164.164.122.169:8090/state-dashboard/api/BskyData/saveFeedback/97d7f7d0-2c6e-4f80-bce2-0d8b5cfaab5b", requestOptions)
    .then(res => res.json())
    .then(
        resData => console.log(resData)
    )

  }

    return(
      <>
        <div className="col-md-4">
          <h4>Add User</h4>
          <Form>

            <div className="form-outline mb-4">
              <label className="form-label">Name</label>
              <input type="text" id="form3Example3" className="form-control" onChange={(e)=>setFormData({...formData, "vchName":e.target.value})} />              
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Contact No</label>
              <input type="number" id="form3Example4" className="form-control" onChange={(e)=>setFormData({...formData, "intMobile":e.target.value})} />              
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Email address</label>
              <input type="email" id="form3Example3" className="form-control" onChange={(e)=>setFormData({...formData, "vchMail":e.target.value})}  />              
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Feedback</label>
              <input type="text" id="form3Example4" className="form-control" onChange={(e)=>setFormData({...formData, "vchFeedback":e.target.value})}  />              
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4" onClick={formBtnClick} >Submit</button>

          </Form>
        </div>
        

      </> 
   )
}