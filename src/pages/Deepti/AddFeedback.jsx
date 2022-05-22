import React from 'react';

export default function AddFeedback (){
    return(
      <>
        <div className="col-md-4">
          <h4>Add User</h4>
          <form>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form3Example1" className="form-control" />
                  <label className="form-label">First name</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form3Example2" className="form-control" />
                  <label className="form-label">Last name</label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" />
              <label className="form-label">Email address</label>
            </div>

            <div className="form-outline mb-4">
              <input type="number" id="form3Example4" className="form-control" />
              <label className="form-label">Contact No</label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>

          </form>
        </div>
        

      </> 
   )
}