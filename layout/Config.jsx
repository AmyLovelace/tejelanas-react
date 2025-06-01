import { SvgIcon } from '@mui/material';
import {HomeIcon, EnvelopeIcon, MapIcon} from '@heroicons/react/24/outline'
import { Checkroom, School } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

export const navItems = [
    {
      title: 'Inicio',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ChartBarIcon/> */}
          <HomeIcon/>
        </SvgIcon>
      ),
      id:'Inicio',
      dropdown: [],
      role: []
    },
    {
      title: 'Nosotros',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ListBulletIcon /> */}
          <GroupsIcon />
          </SvgIcon>
      ),
      id: 'Nosotros',
      dropdown: [],
      role: ['admin', 'user']
    },
    {
      title: 'Productos',
      icon: (
        <SvgIcon fontSize='small' sx={{mr:1}}>
          {/* <FolderPlusIcon/> */}
          <Checkroom />
        </SvgIcon>
      ),
      id: 'Productos',
      dropdown: [],
      role: []
    },
    {
      title: 'Servicios',
      icon: (
        <SvgIcon fontSize='small' sx={{mr:1}}>
          {/* <FolderPlusIcon/> */}
          <School />
        </SvgIcon>
      ),
      id: 'Servicios',
      dropdown: [],
      role: []
    },
    {
      title: 'Preguntas',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ListBulletIcon /> */}
          <LiveHelpIcon />
          </SvgIcon>
      ),
      id: 'Preguntas',
      dropdown: [],
      role: ['admin', 'user']
    },
    {
      title: 'Contacto',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ListBulletIcon /> */}
          <EnvelopeIcon />
        </SvgIcon>
      ),
      id: 'Contacto',
      dropdown: [],
      role: ['admin', 'user']
    },
    {
      title: 'Mapa',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ListBulletIcon /> */}
          <MapIcon />
        </SvgIcon>
      ),
      id: 'Mapa',
      dropdown: [],
      role: ['admin', 'user']
    }
  ];