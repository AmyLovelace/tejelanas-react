import { NavLink } from 'react-router-dom';
import { useMsal } from "@azure/msal-react";
import { ListItem, ListItemButton, ListItemText, SvgIcon } from '@mui/material';  
import { listItemStyle } from '../../../theme';
import {LockClosedIcon} from '@heroicons/react/24/outline'


export default function LogoutButton() {

    const { instance } = useMsal();
    
    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        });
    }


  return (
    <ListItem key={52} disablePadding>
    <ListItemButton
        id='nav-item' 
        component={NavLink}
        sx={{...listItemStyle}}
        onClick={handleLogout}>
        {<SvgIcon fontSize="small" sx={{mr:1}}>
        <LockClosedIcon />
        </SvgIcon>}
        <ListItemText style={{fontSize: '12px'}} primary={'Cerrar Sesión'} disableTypography/>
    </ListItemButton>
    </ListItem>
  )  

}
