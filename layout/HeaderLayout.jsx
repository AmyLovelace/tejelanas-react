import { Stack, IconButton, Box, Grid, MenuItem, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { navItems } from './Config';

import { useMediaQuery, useTheme } from '@mui/material';
import { useScrollContext } from '../src/context/ScrollContext';


const HeaderLayout = ({ handleDrawerToggle, TOP_NAV_HEIGHT, mobileOpen, isScrolled }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { activeSection, setActiveSection } = useScrollContext();
    const { scrollToSection } = useScrollContext();

    const isSelected = (option) => { return activeSection === option ;}

    return (
        <Stack
            id="top-nav"
            alignItems="center"
            direction="row"
            display={'grid'}
            gridTemplateColumns={'1fr 8fr 1fr'}
            justifyContent="space-between"
            // spacing={2}
            width={'100%'}
            mr={2}
            sx={{
            minHeight: TOP_NAV_HEIGHT,
            }}
        >

            <Grid display={'flex'} alignItems={'left'} justifyContent={'flex-start'} gap={2} width={'100%'}>

                {/* Se muestra solo si es mobile */}
                {isMobile && (
                    <IconButton
                    color="#inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => {
                        handleDrawerToggle()
                    }}
                    // Acá se muestra el menú de hamburguesa - original sm
                    sx={{
                        p: '3px',
                        display: mobileOpen ? 'none' : 'block',
                        // backgroundColor: '#015f93',
                        opacity: 0.8,
                        borderRadius: 0,
                        ml: 2,
                    }}
                >
                    <MenuIcon htmlColor='white' />
                </IconButton >
                )

                }
                

            
            </Grid>
            
            {/* Se muestra si NO es mobile */}

            {!isMobile && (
                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} width={'100%'}>

                    {navItems.map((item, index) => (
                        <MenuItem  key={index} onClick={() => {setActiveSection(item.title); scrollToSection(item.id);}}>
                            <Typography 
                                className={isSelected(item.title) ? 'MenuOption selected' : 'MenuOption'} 
                                variant='subtitle2' color={'neutral.50'}
                            > 
                                {item.title} 
                            </Typography>
                        </MenuItem>
                    ))}  
                    
                </Grid>
            )}
            
            
                
            

            <Box 
                component={'div'}
                sx={{
                    display: mobileOpen ? 'none' : 'flex',
                    borderRadius: 0,
                    height: '50px',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    left: 20
                }}
            >

                <img id='nav-logo' height={40} 
                    src={!isScrolled ? '/assets/Logo-Vivi-1.png' : '/assets/Logo-Vivi-2.png'}
                    
                />

            </Box>

        </Stack>
    )
}

export default HeaderLayout