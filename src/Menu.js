import MenuItem from './MenuItem';

function Menu() {
  const menuData = [
    { label:"Home", link:"https://www.google.tech/home"},
    { label:"About", link:"https://www.google.tech/home"},
    { label:"Products", link:"https://www.google.tech/home"},
    { label:"Services", link:"https://www.google.tech/home"},
    { label:"Contact", link:"https://www.google.tech/home"}
  ];

  return (
      <ul style={{float:'right', listStyle:'none'}}>
        
        <MenuItem menuItem={{ label:"Home", link:"https://www.google.tech/home"}} menuData={menuData} />
      </ul>
  );
}

export default Menu;
