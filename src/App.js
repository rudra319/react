import {  Routes, Route, Link  } from 'react-router-dom';
import './App.css';
import Sanghamitra from './pages/Sanghamitra/Sanghamitra';
import Deepti from './pages/Deepti/Deepti';
import Home from './pages/Home/Home';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Error from './pages/Error/Error';
import Avinash from './pages/avinash/pages';
import Legends from './pages/Legends/Legends';
import { AppProvider } from './context/app';

function App() {
  return (
    <>
    <AppProvider>
      <h1>React Tutorial</h1>
      
      
      <Navbar bg="dark" variant="dark">
        <Container>
        {/* <Navbar.Brand href="#home">View List</Navbar.Brand> */}
        <Nav className="me-auto">
        <Link to="/">Home</Link> 
        <Link to="/legends" >Legends</Link> 
        <Link to="/legends/sanghamitra">Sanghamitra</Link> 
        <Link to="/legends/deepti">Deepti</Link> 
        <Link to="/legends/Avinash">Avinash</Link> 
        </Nav>
        </Container>
      </Navbar>


      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/legends">
            <Route index element={<Legends />} />
            <Route path=":id" element={<Legends />} />
            <Route path="deepti" element={<Deepti />} />
            <Route path="avinash" element={<Avinash />} />
          </Route>
          {/* <Route path="legends/:lang/list/:id" element={<Legends />}>
            <Route path="avinash" element={<Avinash />} />
          </Route> */}
          
          {/* <Route path="legends/sanghamitra" element={<Sanghamitra />} /> */}
         
          <Route path="*" element={<Error />} />
        </Routes> 
        </AppProvider>
    </>
  );
}

export default App;
