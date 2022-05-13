import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Menu from './Menu';

function Header(props) {

  const [name, setName] = useState("");

  let nameVar = "CSM Admin nameVar";

  useEffect(() => {
    setName("CSM Admin name")
    nameVar = "Test"
  },[]);


  return (
    <div>
      <a><img style={{width:'100px'}} src={logo} /></a>
      <Menu />
      <h1>{name}</h1>
      <h1>{nameVar}</h1>
    </div>
  );
}

export default Header;
