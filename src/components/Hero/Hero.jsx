import './Hero.css';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useState, useEffect, forwardRef } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Hero = forwardRef((props, ref) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box ref={ref} 
            className="hero"
            sx={{
                backgroundImage: isMobile 
                    ? `url('/assets/hero-lanas-mob.webp')` 
                    : `url('/assets/hero-lanas.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '800px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}
        >
            {/* <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent={{md: 'left', sm: 'center', xs: 'center'}} alignItems="center">
                    <Grid item xs={12} md={6} justifyContent={'center'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Typography className='highlight-text' variant={!isMobile ? "h2" : "h3"} color="white" gutterBottom>
                            Municipalidad de Cholchol
                        </Typography>
                        <Typography variant={!isMobile ? "h5" : "h6"} color="white" paragraph>
                            Descubre cómo la tecnología transforma nuestra ciudad.
                        </Typography>
                    </Grid>
                </Grid>
            </Container> */}
        </Box>
    )
});
export default Hero;