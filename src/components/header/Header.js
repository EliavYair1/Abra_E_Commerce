import {HeaderContainer , HeaderLogo,AccountLogo} from "./Headerstyles";
import logoImg from "../../Images/logo.png";
import accountImg from "../../Images/account_circle.png"
import Menu from "../Menu/Menu";
import React, { useState } from 'react';
// import { deviceSize } from "../../constants";
import styled from "styled-components";

export const defaultMenuConfig = [
  { id: 1, name: "BestSellers"},
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home" },
  { id: 4, name: "Office" },
  { id: 5, name: "Sports" },
];

const deviceSize = {
  mobile: "880px",
  desktop: "881px",
};

const Header = () => {
  const defaultMenuItem = 1;
      
  const onMenuItemChanged = (item) => {
    setActiveItem(item.id);
  }
  
  const [ActiveItem, setActiveItem] = useState(defaultMenuItem);
  
  return (<>
  <HeaderContainer>
<HeaderLogo src={logoImg} />
<StyledMenu activeId={ActiveItem} media={deviceSize}  onMenuItemChanged={onMenuItemChanged} menuItems={defaultMenuConfig}/>
<AccountLogo src={accountImg} />
  </HeaderContainer>

  </>  );
}
const StyledMenu = styled(Menu)`
    @media(max-width: ${deviceSize.mobile}) {
        padding-right: 66px;
        order: -1;
    }
` 
 
export default Header;