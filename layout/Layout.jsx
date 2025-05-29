import { useState, useEffect } from 'react';
import { Toolbar, Drawer, Box, AppBar, Typography  } from '@mui/material';
import { NavDrawer } from './NavDrawer';
import HeaderLayout from './HeaderLayout';
import Footer from './Footer';

const TOP_NAV_HEIGHT = 100;
const versionInfo = 'Desarrollo Frontend' 
const authorInfo = 'IPSS - 2025'

export default function Layout({ children }, props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100); // Cambia a true después de 100px
    };

    // Agregar el event listener cuando el componente se monta
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setDrawerWidth(!mobileOpen ? '300px' : 0);
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerMobile = () => {
    if (mobileOpen === true) {
      setDrawerWidth(0);
      setMobileOpen(false)

    }
  }



  return (

    <Box className='external-main'   sx={{ display: 'flex', flexDirection: 'column' }} justifyContent={'center'} minWidth={'100%'} >
      <AppBar
        style={{ 
          background: isScrolled ? '#5b008e' : 'rgba(0, 0, 0, 0.28)', 
          boxShadow: 'none', 
          color: '#6C737F',
          transition: 'background 0.3s ease-in-out'
        }}
        position="fixed"
      >
        <Toolbar 
          sx={{
            paddingLeft: '0px',
            paddingRight: '0px', 
            backdropFilter: 'blur(10px)',
          }}
        >
            {/* NAVBAR SUPERIOR */}
            <HeaderLayout handleDrawerToggle={handleDrawerToggle} TOP_NAV_HEIGHT={TOP_NAV_HEIGHT} mobileOpen={mobileOpen} isScrolled={isScrolled}/>
            {/* NAVBAR SUPERIOR */}

        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: 0, md: 0, lg: 0, xl: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          className='DRAWER'
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={() => { handleDrawerToggle() }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >

          <NavDrawer handleDrawerMobile={handleDrawerMobile} />
          
          <Box bgcolor={'#5b008e'} py={1}>
            
            <Box mb={1} borderBottom={'1px solid white'} mx={2}>
              
            </Box>
            
            {/* <Typography variant={'body2'} color={'white'} pl={2}>{loggedUser.user.name}</Typography> */}
            <Typography variant={'body2'} fontSize={12} color={'white'} pl={2}>{versionInfo}</Typography>
            <Typography variant={'body2'} fontSize={12} color={'white'} pl={2}>{authorInfo}</Typography>
          </Box>
        </Drawer>
        
        <Drawer
          id="nav666"
          variant="permanent"
          sx={{
            display: { xxs: 'none', xs: 'none', sm: 'block',  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none' }
          }}
          open
        >

          {/* Genera un background momentáneo de la altura del Header para corregir bug de fondo permanente al cambiar a menú desplegable */}
          <Box bgcolor={'#5b008e'} height={TOP_NAV_HEIGHT}>
            
          </Box>
        </Drawer>
      </Box>

      <Box
        className='main-app-container'
        component="main"
        display={'flex'}
        justifyItems={'center'}

        sx={{ 
          p: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, 
          mr:{xl:'0px'}, 
          mt: 6
        }}
      >


        {/* ====== ACÁ SE RENDERIZA LA APP ======== */}
        {children}


      </Box>
      <Footer/>
    </Box>
  );
}