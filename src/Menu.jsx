import MenuItem from './MenuItem';

function Menu({setCPage = () => {}}) {
  const menuData = [
    { label:"Home", link:"home"},
    { label:"About", link:"about"},
    { label:"Products"},
    { label:"Services", link:"services"},
    { label:"Contact", link:"contact"}
  ];

  return (
      <ul style={{float:'right', listStyle:'none'}}>
        {
          menuData && menuData !== [] && menuData.length > 0 && menuData.map((menuItem)=>{
            if(menuItem.link){
              return(<MenuItem menuItem={menuItem} setCPage={setCPage} />)
            }
          })
        }
      </ul>
  );
}

export default Menu;
