import styled from "styled-components";
import { deviceSize } from "../../constants";

export const MenuItem = styled.a`
font-size: 20px;
font-weight: ${(props)=> props.active ? "600" : "normal"};
color: #fff;
${(props)=> 
props.active && 
`border-bottom:2px solid #fff;`}
`;


export const MenuContainer = styled.nav`
display: flex;
font-family: Assistant;  
gap: 26px;
@media (max-width:${deviceSize.mobile}) {
  display: none;
}
`;

export const Hamburger = styled.img`
display: none;
cursor: pointer;
@media (max-width:${deviceSize.mobile}) {
  display: block;
}
`

export const StyledDrawerContainer = styled.div`
display: none;
@media (max-width:${deviceSize.mobile}) {
  display:block;
  
}
`