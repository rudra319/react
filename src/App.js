import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './pages/dashboard/Demo';
function App1() {
  const [cPage, setCPage] = useState("home")
  //console.log(cPage)
  return (
    <>
      {/* <Chinmayee/> */}
      {/* <Dashboard /> */}
      <Demo/>
     
    </>
  );
}

export default App1;
