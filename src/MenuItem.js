import logo from './logo.svg';
import { useEffect } from 'react';

function MenuItem({menuItem = {}, menuData = []}) {
  const {label, link} = menuItem;
  useEffect(()=>{
    
  console.log("Menu Props:::",link);
  },[])
  return (
    <>
    a
      {menuData.map((item)=>{
        return(
        <li style={{display:'inline-block', margin: '0 5px'}}>
          <a>{item.label}</a>
        </li>
        )
      })}  
      {/* <li style={{display:'inline-block', margin: '0 5px'}}>
        <a href={link}>{label}</a>
      </li> */}
    </>  
  );
}

export default MenuItem;
