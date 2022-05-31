import React, {  useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Col, Form, Row, Table } from 'react-bootstrap';
import {getFeedBackData} from '../action'


function Home () {

    const dispatch = useDispatch();
    const rootState =  useSelector(state => state);

    const {feedbackLoading=false, feedbackData:distRes = []  , feedbackError = false, feedbackMsg = ""} = rootState || {};
    
    useEffect(()=>{
        getFeedBackData(dispatch) 
    },[]);

    return (<>
            <Row>
                <Col md="4">  
                <div class="card">
                    <div className="card-body">
                    <h5 className="card-title">About</h5>
                    “Every life is precious...” has always been the guiding principle of Hon’ble Chief Minister Naveen Patnaik. The vision of Hon’ble Chief Minister has been to provide assurance of quality health care to all the citizens of the State, especially the vulnerable sections. With this objective, Biju Swasthya Kal
                    </div>
                </div>
                </Col>
                <Col md="4">  
                <div class="card">
                    <div className="card-body">
                    <h5 className="card-title">Services</h5>
                    State Government will bear full cost of all health services delivered to all patients (irrespective of income, status or residence) in all State Government health care facilities starting from Sub centre level to District Head Quarter and Government Medical College Hospital and Blood Bank level.
                    </div>
                </div>
                </Col>
                <Col md="4">  
                <div className="card">
                    <div className="card-body">
                    <h5 class="card-title">Benefits</h5>
                    State Government will bear the cost of healthcare provided in empanelled private hospitalsfor over 96.5 lakh economically vulnerable families in the State, amounting to Annual Health coverage of Rs. 5 lakh per family and additional Rs. 5lakh for the women members of the family after exhaust of initial limit.
                    </div>
                </div>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col className='content'  md="12">
                <h5 className="card-title">Feedback List</h5>
                    <Table striped bordered hover>
                        <thead>
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
                        {
                        distRes
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
                    </Table>
                    {feedbackLoading == true && (<h1>Loading....</h1>)}
                    {feedbackError == true && (<h1>Error :( {feedbackMsg}</h1>)}
                </Col>
            </Row>
            </>
    );
}

export default Home;