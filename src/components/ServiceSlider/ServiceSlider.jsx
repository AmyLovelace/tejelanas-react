import { forwardRef, useEffect, useState } from 'react';

import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ServiceSlider = forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [isLoading, setIsLoading] = useState(true);
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('../../data/products-services.json'
          // , 
          // {
          //   method: 'GET',
          //   headers: {
          //     'Content-Type': 'application/json',
          //     'Authorization': 'Bearer ipss.get'
          //   },
          // }
        );
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log("SERVICE DATA",data);
        setServiceData(data.data.servicios);
        setIsLoading(false);
      }
      catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }
    fetchData();
  }
  , []);

  if (isLoading) {
    return (
      <Box mt={5} sx={{ width: '100vw', maxWidth: '700px', minWidth: '200px', margin: '0 auto', padding: 4 }} ref={ref}>
        <Typography variant="h4" component="h2" gutterBottom align="center" fontWeight="bold">
          Nuestros Servicios
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" height="400px">
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  return (
    <Box mt={5} sx={{width:'100vw',maxWidth: '700px', minWidth: '200px', margin: '0 auto', padding: 4 }} ref={ref}>
      <Typography variant="h4" component="h2" gutterBottom align="center" fontWeight="bold" sx={{ mb: 2 }}>
        Nuestros Servicios
      </Typography>
      <Slider {...settings}>
        {serviceData.map((el, index) => (
          <Card key={index} >
            <CardMedia
              component="img"
              height="400"
              image={el.imgs[0] || 'https://via.placeholder.com/400'}
              alt={el.nombre}
              sx={{ objectFit: 'fit' }}
            />
            <CardContent>
              <Typography variant="h6" component="div" align="center">
                {el.nombre}
              </Typography>

              <Box mt={2}>
                <Typography variant="subtitle2">Cupos disponibles:</Typography>
                <Box
                  sx={{
                    mt: 1,
                    px: 2,
                    py: 0.5,
                    borderRadius: '20px',
                    bgcolor: '#e1f5fe',
                    fontSize: '0.875rem',
                    color: '#01579b',
                    fontWeight: 'bold',
                    border: '1px solid #81d4fa',
                    display: 'inline-block',
                  }}
                >
                  {el.cupos}
                </Box>
              </Box>
              <Box mt={2}>
                <Typography variant="subtitle2">Fecha:</Typography>
                <Box
                  sx={{
                    mt: 1,
                    px: 2,
                    py: 0.5,
                    borderRadius: '20px',
                    bgcolor: '#f3e5f5',
                    fontSize: '0.875rem',
                    color: '#6a1b9a',
                    border: '1px solid #ce93d8',
                    display: 'inline-block',
                  }}
                >
                  📅 {el.fecha}
                </Box>
              </Box>
              <Box mt={2}>
                <Typography variant="subtitle2">Ubicación:</Typography>
                <Box
                  sx={{
                    mt: 1,
                    px: 2,
                    py: 0.5,
                    borderRadius: '20px',
                    bgcolor: '#e8f5e9',
                    fontSize: '0.875rem',
                    color: '#2e7d32',
                    border: '1px solid #a5d6a7',
                    display: 'inline-block',
                  }}
                >
                  📍 {el.ubicacion}
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
});

export default ServiceSlider;
