import './App.css';
import Header from './Header';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deepti from './pages/Deepti/Deepti';

function App() {
  const [cPage, setCPage] = useState("home")
  //console.log(cPage)
  return (
    <div class="container">
      
      <Header setCPage={setCPage} />

      <Deepti />

      <div class="row mt-4">
        {cPage !== "" && (cPage === 'home' || cPage === "Home") && (
          <>
            <h2>Home Page </h2>
          </>
        )}
        {cPage === 'about' && (
          <>
            <h2>About Page</h2>
          </>
        )}
        {cPage === 'products' && (
          <>
            <h2>Products Page</h2> 
          </>
        )} 
        {cPage === 'services' && (
          <>
            <h2>Services Page</h2> 
          </>
        )} 
        {cPage === 'contact' && (
          <>
            <h2>Contact Page</h2> 
          </>
        )}

      </div>

      
      
    </div>
  );
}

export default App;
