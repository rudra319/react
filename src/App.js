import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/dashboard/Dashboard';
import Chinmayee from './pages/Chinmayee/Chinmayee';
import { Card } from 'react-bootstrap';
function App1() {
  const [cPage, setCPage] = useState("home");

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

  return (
    <>
      <div>
        <Header setCPage={setCPage} />
      </div>
      <h1>{feedbackData.status}</h1>
      {distRes.map(item=>{
        return(<Card>
        <h2>{item.vchName}</h2>
        </Card>)
      })}
      <Chinmayee/>
      <Dashboard />
      {cPage !== "" && (cPage === 'home' || cPage === "Home") && (
        <>
          <h1>Home Page Contentr</h1>
          <p>Lorem ipsum dolr site amitdemo text.</p>
        </>
      )}
      {cPage === 'about' && (
        <>
          <h1>About Page Contentr</h1>
          <p>Lorem ipsum dolr site amitdemo text.</p>
        </>
      )}
      {cPage === 'products' && (
        <>
          <h1>Products Page Contentr</h1>
          <p>Lorem ipsum dolr site amitdemo text.</p>  
        </>
      )} 
      {cPage === 'services' && (
        <>
          <h1>Services Page Contentr</h1>
          <p>Lorem ipsum dolr site amitdemo text.</p>  
        </>
      )} 
      {cPage === 'contact' && (
        <>
          <h1>Contact Page Contentr</h1>
          <p>Lorem ipsum dolr site amitdemo text.</p> 
        </>
      )}
    </>
  );
}

export default App1;
