import styled from "styled-components";
import { useMedia } from "../../Hooks/useMedia";
import {MenuItem,MenuContainer,StyledDrawerContainer , Hamburger} from "./MenuStyles"
// import { deviceSize } from "../../constants";
// import HamburgerImg from "../../Images/menu.png";
import DrawerMenu from"./DrawerMenu";
// import {useState } from "react";



const Menu = ({
  menuItems,
  activeId,
  className,
  onMenuItemChanged,
  humburgerResolution = 880
}) => {


  
  const breakPoints = [
    { min: 0, max:humburgerResolution, name: "mobile" },
    { min:humburgerResolution + 1 , max: 10000, name: "desktop" },
  ];
  const breakPoint = useMedia(breakPoints);

  return (
    <>
      <MenuContainer className={className}>
        {breakPoint?.name === "mobile" &&  (
<>
{DrawerMenu && (
<DrawerMenu menuItems={menuItems} />
  )}
</>
    
        )}

{breakPoint?.name === "desktop" && 
<>
{menuItems.map((item)=> {
  return (
    <MenuItem 
    key={item.id} 
    onClick={()=>onMenuItemChanged(item)}
    active={activeId === item.id}
    href="#">
      {item.name}
    </MenuItem>
  )
})}
</>
}
      </MenuContainer>
    </>
  );
};





export default Menu;
