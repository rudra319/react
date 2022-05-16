import logo from './logo.svg';
import { useEffect } from 'react';

function MenuItem({menuItem = {}, setCPage = () => {}}) {
  const {label, link} = menuItem;
  
  const handleSetCPage = (e) => {
    if(e.target){
        setCPage(e.target.name);
    }
  }
  return (
    <>
      <li style={{display:'inline-block', margin: '0 5px'}}>
        <a onClick={(e)=>handleSetCPage(e)} name={link}>{label}</a>
      </li>
    </>  
  );
}

export default MenuItem;
