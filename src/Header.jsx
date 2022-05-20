import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Menu from './Menu';

function Header({setCPage = () => {}}) {

  return (
    <div class="row">
      <div class="col-md-4">
        <a style={{width:'200px', float:'left'}}><img style={{width:'150px'}} src={logo} /></a>
      </div>
      <div class="col-md-4 mt-4 text-center">
        <h1>React Demo</h1>
      </div>
      
      <div class="col-md-4 mt-4" style={{float:'right'}}>
        <Menu setCPage={setCPage} />
      </div>
    </div>
  );
}

export default Header;
