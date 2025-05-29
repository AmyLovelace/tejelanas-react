import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText, SvgIcon, Collapse, List } from "@mui/material"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { listItemStyle } from "../../../theme";
import {ClipboardDocumentIcon, DocumentTextIcon} from '@heroicons/react/24/outline'


export default function DropdownListItem(props) {
    const {handleDrawerMobile, drawerItem} = props;

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }


    return(
        <>
    <ListItem disablePadding>

      <ListItemButton 
        onClick={() => {toggleMenu()}}
        id='nav-item' 
        sx={{...listItemStyle}}
      >

        {/* Ícono del menú */}
        {drawerItem.icon}

        {/* Texto del menú */}
        <ListItemText style={{fontSize: '12px'}} primary={drawerItem.title} disableTypography/>
        {openMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </ListItem>
    <Collapse in={openMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {/* Sub-Item 1 || url y texto */}
            {drawerItem.dropdown.map((item, idx) => (
                <ListItemButton
                key={idx}
                id='nav-item' 
                component={NavLink}
                to={item.path}
                sx={{...listItemStyle, pl: 5}}
                onClick={handleDrawerMobile}
                >
                    <ListItemText style={{fontSize: '12px'}} primary={item.title} disableTypography/>
                </ListItemButton>
            ))

            }
            
        </List>
    </Collapse>
    </>
    ) 
};
