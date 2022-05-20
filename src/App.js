import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sanghamitra from './pages/Sanghamitra/Sanghamitra';
import Deepti from './pages/Deepti/Deepti';
import Home from './pages/Home/Home';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Error from './pages/Error/Error';
import Avinash from './pages/avinash/pages';

function App() {
  const [cPage, setCPage] = useState("home")
  return (
    <>
      <h1>React Tutorial</h1>
           
      <Navbar bg="dark" variant="dark">
        <Container>
        {/* <Navbar.Brand href="#home">View List</Navbar.Brand> */}
        <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/sanghamitra">Sanghamitra</Nav.Link>
        <Nav.Link href="deepti">Deepti</Nav.Link>
        <Nav.Link href="/avinash">Avinash</Nav.Link>
        </Nav>
        </Container>
      </Navbar>


      <BrowserRouter>
      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/sanghamitra" element={<Sanghamitra />} />
          <Route path="/deepti" element={<Deepti />} />
          <Route path="/avinash" element={<Avinash />} />
          <Route path="*" element={<Error />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
