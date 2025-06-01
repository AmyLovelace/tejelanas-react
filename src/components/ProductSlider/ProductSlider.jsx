import { forwardRef, useEffect, useState } from 'react';

import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getPastelColor } from '../../../utils/general';
import { getProductServices } from '../../api/service';


const ProductSlider = forwardRef((props, ref) => {
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
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProductServices()
        .then(data => {
          console.log('Datos recibidos:', data);
          setProductsData(data.data.productos);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
  }
  , []);

  if (isLoading) {
    return (
      <Box mt={5} sx={{ width: '100vw', maxWidth: '700px', minWidth: '200px', margin: '0 auto', padding: 4 }} ref={ref}>
        <Typography variant="h4" component="h2" gutterBottom align="center" fontWeight="bold">
          Nuestros Productos
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
        Nuestros Productos
      </Typography>
      <Slider {...settings}>
        {productsData.map((el, index) => (
          <Card key={index} >
            <CardMedia
              component="img"
              height="400"
              image={el.imgs[0] || 'https://via.placeholder.com/400'}
              alt={el.nombre}
              sx={{ objectFit: 'fit' }}
            />
            <CardContent>
              <Typography variant="h6" component="div" align="center"sx={{ mb: 2 }}>
                {el.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {el.descripcion}
            </Typography>
              <Box display="flex" flexWrap="wrap" gap={1} mb={1}>
                <Typography variant="subtitle2" sx={{ width: '100%' }}>
                  Colores disponibles:
                </Typography>
                {el.colores?.length > 0 ? (
                  el.colores.map((color, i) => (
                    <Box
                      key={i}
                      sx={{
                        px: 2,
                        py: 0.5,
                        borderRadius: '20px',
                        bgcolor:  getPastelColor(color),
                        fontSize: '0.875rem',
                        color: '#333',
                        border: '1px solid #ccc',
                      }}
                    >
                      {color}
                    </Box>
                  ))
                ) : (
                  <Box
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      bgcolor: '#f0f0f0',
                      fontSize: '0.875rem',
                      color: '#555',
                      fontStyle: 'italic',
                      border: '1px solid #ccc',
                    }}
                  >
                    Color único
                  </Box>
                )}
              </Box>
              <Box display="flex" flexWrap="wrap" gap={1}>
                <Typography variant="subtitle2" sx={{ width: '100%' }}>
                  Tallas disponibles:
                </Typography>
                {el.tallas?.length > 0 ? (
                  el.tallas.map((talla, i) => (
                    <Box
                      key={i}
                      sx={{
                        px: 1.5,
                        py: 0.25,
                        borderRadius: '16px',
                        bgcolor: '#e8f5e9',
                        color: '#2e7d32',
                        fontSize: '0.8rem',
                        border: '1px solid #81c784',
                      }}
                    >
                      {talla}
                    </Box>
                  ))
                ) : (
                  <Box
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      bgcolor: '#e0f2f1',
                      fontSize: '0.875rem',
                      color: '#004d40',
                      fontStyle: 'italic',
                      border: '1px solid #26a69a',
                    }}
                  >
                    Talla única
                  </Box>
                )}
              </Box>
              <Box mt={2}>
              <Typography variant="subtitle2" sx={{ width: '100%' }}>
                Precio:
              </Typography>
              <Box
                sx={{
                  px: 2,
                  py: 0.75,
                  borderRadius: '20px',
                  bgcolor: '#fff3e0',
                  fontSize: '1rem',
                  color: '#e65100',
                  fontWeight: 'bold',
                  border: '1px solid #ffb74d',
                  display: 'inline-block',
                  mt: 1,
                }}
              >
                {el.precio ? `$${el.precio}` : 'Precio no disponible'}
              </Box>
            </Box>


            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
});

export default ProductSlider;
