import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sanghamitra from './pages/Sanghamitra/Sanghamitra';
import Deepti from './pages/Deepti/Deepti';
import Lopita from './pages/Lopita/Lopita';
import Home from './pages/Home/Home';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Error from './pages/Error/Error';

function App() {
  const [cPage, setCPage] = useState("home")
  return (
    <>

      <h1>React Tutorial</h1>
           
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">View List</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Syllabus</Nav.Link>
        <Nav.Link href="#pricing">Tutorials</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      {/* <Deepti/> */}
      {/* <Sanghamitra/> */}
      



     
       <Lopita/>
       {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lopita />}>
          <Route index element={<Lopita />} />
          <Route path="sanghamitra" element={<Sanghamitra />} />
          <Route path="deepti" element={<Deepti />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
      

    </>
  );
}

export default App;
