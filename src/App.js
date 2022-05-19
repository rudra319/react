import './App.css';
import Header from './Header';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sanghamitra from './pages/Sanghamitra/Sanghamitra';
import Deepti from './pages/Deepti/Deepti';

function App1() {
  const [cPage, setCPage] = useState("home")
  return (
    <>
      <Sanghamitra/>
     <Deepti />
    </>
  );
}

export default App;
