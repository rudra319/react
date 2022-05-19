import React from 'react';

export default function Deepti (){
    return(
        <div class="row mt-4">
        <div class="col-md-4">
          <h4>Add User</h4>
          <form>

            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="form3Example1" class="form-control" />
                  <label class="form-label" for="form3Example1">First name</label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="form3Example2" class="form-control" />
                  <label class="form-label" for="form3Example2">Last name</label>
                </div>
              </div>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control" />
              <label class="form-label" for="form3Example3">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="number" id="form3Example4" class="form-control" />
              <label class="form-label" for="form3Example4">Contact No</label>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
 
          </form>
        </div>
        
        <div class="col-md-7 offset-md-1 table-responsive">
          <h4>View User</h4>
          <table class="table table-hover table-bordered">
            <thead class="table-light">
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Contact No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td>0987654321</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
                <td>0987654321</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>0987654321</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
                <td>0987654321</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>0987654321</td>
              </tr>
              
            </tbody>
          </table>
        </div>

      </div>
    )
}