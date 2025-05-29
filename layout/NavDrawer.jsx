import { Box, ListItem, ListItemButton, ListItemText, Typography, Divider } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./Config";
import { listItemStyle } from "../theme";
import DropdownListItem from "../src/components/DropdownListItem/DropdownListItem";
import { useScrollContext } from "../src/context/ScrollContext";

export const NavDrawer = ({handleDrawerMobile}) => {
  // const { loggedUser } = useContext(userContext);
  const [itemList, setItemList] = useState(navItems);
  const { scrollToSection } = useScrollContext();

  return (

    <Box 
      component={'div'}
      sx={{  
        bgcolor: "#5b008e",
        height: '100%',
        px:1,
        borderRight: 'none',
      }}
    >
      <Box 
            component={'div'}
            sx={{
                // display: mobileOpen ? 'none' : 'flex',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 0,
                // height: '50px',
                alignItems: 'center',
                mt: 5,
                left: 20
            }}
        >
            <img id='nav-logo' height={30} 
                src='/assets/Logo-Vivi-2.png'
            />
        </Box>

        <Box 
            component="nav"
            sx={{
              flexGrow: 1,
              pb:3,
              pt:1
            }}>
          <Box
            // borderBottom={'2px solid white'}
            mx={2}
            mb={6}
          />
            <Box mt={2}>
              {itemList.map((item, index) => (
                item.dropdown.length === 0 ? (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      id='nav-item' 
                      component={NavLink}
                      //to={item.path}
                      sx={{...listItemStyle}}
                      onClick={()=>{handleDrawerMobile() ; scrollToSection(item.id);}}
                    >
                      {item.icon}
                      <ListItemText style={{fontSize: '12px'}} key={index} primary={item.title} disableTypography/>
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <DropdownListItem key={index} drawerItem={item}></DropdownListItem>
                ) 
              ))}
              
            </Box>
        </Box>
      </Box>
)
} 
      
