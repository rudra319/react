import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function FeedbackForm (){

    const [formData, setFormData]= useState({});

    

    const formBtnClick = () => {
        console.log("formData:::",formData);
        const requestOptions = {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch("http://164.164.122.169:8090/state-dashboard/api/BskyData/saveFeedback/97d7f7d0-2c6e-4f80-bce2-0d8b5cfaab5b", requestOptions)
        .then(res => res.json())
        .then(
            resData => console.log(resData)
        )
    }
    

    return (
        <div className="card">
        <div className="card-body">
            <h5 class="card-title">Feedback Form</h5>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setFormData({...formData,"vchName":e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobile">
                    <Form.Label>Contact No.</Form.Label>
                    <Form.Control type="text" placeholder="Mobile Number" onChange={(e)=>setFormData({...formData,"intMobile":e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setFormData({...formData,"vchMail":e.target.value})} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control type="text" placeholder="Your Feedback"  onChange={(e)=>setFormData({...formData,"vchFeedback":e.target.value})} />
                </Form.Group>
                <Form.Control onClick={formBtnClick} type="button" variant="primary"  className='btn btn-success' />

                {/* <Button variant="primary" className="btn-primary">Primary</Button> */}


            </Form>
        </div>
    </div>
    )

}