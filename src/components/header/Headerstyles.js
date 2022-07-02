import styled from "styled-components"
import { deviceSize } from "../../constants";
 export const HeaderContainer = styled.header`
 background-color: #1a223e;
  display: flex;
  padding: 21px 0px;
  padding-left: 64px;
  align-items: flex-end;
  @media (max-width: ${deviceSize.mobile}) {
    padding-left: 18px;
  }
`;

export const HeaderLogo = styled.img`
padding-right:98px ; 
`;
export const AccountLogo = styled.img`
margin-left: auto;
padding-right: 24px;
`;

