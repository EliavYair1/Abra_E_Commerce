
import {Drawer,Typography,Box,IconButton } from "@mui/material";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { useState } from "react";
import styled from "styled-components";
import { deviceSize } from "../../constants";


const DrawerMenu = ({menuItems}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
<>

<StyledDrawerContainer>

<IconButton  edge="start"  color="default" aria-label="logo" onClick={()=> setIsDrawerOpen(true)}>
<DensitySmallIcon />
</IconButton>
<Drawer anchor="left" open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)} >
  
<Box p={2} width="250px" textAlign="center" role="presentation">
<Typography variant="h6" component="div">
  <ul>

{menuItems.map(item=>{
  return (
    
    <li key={item.id}>
 
{item.name}
    </li>
  
  )}
  )}
</ul>
</Typography>
</Box>
</Drawer>
  </StyledDrawerContainer>

</>
  );
}
 
const StyledDrawerContainer = styled.div`
display: none;
@media (max-width:${deviceSize.mobile}) {
  display: block;
}
`
export default DrawerMenu;