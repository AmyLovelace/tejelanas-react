import { forwardRef, useEffect, useState } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';

const AboutUsSection = forwardRef((props, ref) => {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('../../data/about-us.json')
          if (!res.ok) {
          throw new Error('Error al obtener datos');
        }
        const data = await res.json();
        console.log('ABOUT DATA:', data);
        setAboutData(data.data); 
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching about data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);



  if (!aboutData) {
    return (
      <Box ref={ref} py={8} px={2} textAlign="center">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Sobre Nosotros
        </Typography>
        <Typography variant="body1" color="text.secondary">
          No se pudo cargar la información.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: { xs: 6, md: 10 },
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src={'/assets/tejiendo.jpg'}
        alt="About us background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          filter: 'blur(8px) grayscale(100%)',
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
          
        }}
      />

      <Box sx={{ zIndex: 2 }} style={{padding:'40px'}}>
        <Typography variant="h1" component="h2" gutterBottom fontWeight="bold">
          Sobre nosotros
        </Typography>
        <Typography variant="title" sx={{ lineHeight: 1.7 }}>
          {aboutData}
        </Typography>
      </Box>
    </Box>
  );
});

export default AboutUsSection;
