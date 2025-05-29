import { forwardRef, useEffect, useState } from 'react';

import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
        console.log(data);
        setProductsData(data.data.productos);
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
      <Typography variant="h4" component="h2" gutterBottom align="center" fontWeight="bold">
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
              <Typography variant="h6" component="div" align="center">
                {el.nombre}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
});

export default ProductSlider;
