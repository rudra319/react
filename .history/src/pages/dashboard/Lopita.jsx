import React, { useState } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import './Dashboard.css'
import Image from 'react-bootstrap/Image'

export default function Dashboard (){

const [flag, setFlag] = useState(false);
    return(
        <div class="container">
       
            <h1 className={flag ? "heading":'heading1'}>   Contact Form </h1>
            {/* <Button variant="danger" onClick={()=>setFlag(!flag)}>Submit</Button> */}
            <div class="row mt-5"></div>
            <form method="post">
          <div class="mb-3 mt-3">
            <label for="name">Name:</label>
            <input type="name" class="form-control" id="name" placeholder="Enter name" name="name" />
          </div>
         
          <div class="mb-3">
            <label for="add">Address:</label>
            <input type="textbox" class="form-control" id="add" placeholder="Enter address" name="add" />
          </div>
          <div class="mb-3">
            <label for="mobile">Contact:</label>
            <input type="mobile" class="form-control" id="mobile" placeholder="Enter mobile" name="mobile" />
          </div>
          <div class="mb-3">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
         
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    
            

    )

};
