import { Box, Grid, Typography, Container } from "@mui/material";
import { forwardRef } from "react";

const Map = forwardRef((props, ref) => {
  
  return (
    <Container  maxWidth="lg" sx={{ my: 5}} ref={ref} >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align="left" >
            ¿Cómo llegar?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d267.66767158710115!2d-71.42584894881011!3d-32.62950190196371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1748726040647!5m2!1ses!2scl"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            sx={{
              width: '100%',
              minHeight: {
                xs: 400,
                sm: 500,
                md: 600,
                lg: 700,
              },
              border: 0,
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
});

export default Map;
