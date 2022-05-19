// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Dashboard from './pages/dashboard/Dashboard';
// import Chinmayee from './pages/dashboard/Chinmayee';
// function App1() {
//   const [cPage, setCPage] = useState("home")
//   //console.log(cPage)
//   return (
//     <>
//       <div>
//         <Header setCPage={setCPage} />
//       </div>
//       <Chinmayee/>
//       <Dashboard />
//       {cPage !== "" && (cPage === 'home' || cPage === "Home") && (
//         <>
//           <h1>Home Page Contentr</h1>
//           <p>Lorem ipsum dolr site amitdemo text.</p>
//         </>
//       )}
//       {cPage === 'about' && (
//         <>
//           <h1>About Page Contentr</h1>
//           <p>Lorem ipsum dolr site amitdemo text.</p>
//         </>
//       )}
//       {cPage === 'products' && (
//         <>
//           <h1>Products Page Contentr</h1>
//           <p>Lorem ipsum dolr site amitdemo text.</p>  
//         </>
//       )} 
//       {cPage === 'services' && (
//         <>
//           <h1>Services Page Contentr</h1>
//           <p>Lorem ipsum dolr site amitdemo text.</p>  
//         </>
//       )} 
//       {cPage === 'contact' && (
//         <>
//           <h1>Contact Page Contentr</h1>
//           <p>Lorem ipsum dolr site amitdemo text.</p> 
//         </>
//       )}
//     </>
//   );
// }

// export default App1;



import React, { Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/avinash/css/style.css';
import Home from './pages/avinash/pages/Home';

import Header from './pages/avinash/includes/Header';
import Footer from './pages/avinash/includes/Footer';
import { Container } from 'react-bootstrap';



function App (){

    return (
    <Container>
    <Header/>
    <Home />
    <Footer />
    </Container>
    );
}
export default App;