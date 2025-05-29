import { forwardRef } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const cardData = [
  {
    titulo: 'Servicios',
    descripcion: 'Descubre los servicios que ofrecemos para los ciudadanos de Chonchon.',
    imagen: '/assets/servicios.jpg',
  },
  {
    titulo: 'Noticias',
    descripcion: 'Mantente informado con las últimas noticias de nuestra municipalidad.',
    imagen: '/assets/noticias.jpg',
  },
  {
    titulo: 'Actividades',
    descripcion: 'Participa en las actividades y eventos organizados en Chonchon.',
    imagen: '/assets/activvidad.jpg',
  },
  {
    titulo: 'Cultura',
    descripcion: 'Explora nuestra herencia cultural y eventos tradicionales.',
    imagen: '/assets/cultura.jpeg',
  },
  {
    titulo: 'Educación',
    descripcion: 'Información sobre escuelas, becas y programas educativos.',
    imagen: '/assets/educacion.jpg',
  },
  {
    titulo: 'Deportes',
    descripcion: 'Promovemos el deporte con espacios y actividades para todas las edades.',
    imagen: '/assets/deportes.jpg',
  },
];

const Municipio = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
<Typography
  variant="body1"
  paragraph
  sx={{
    textAlign: 'justify',
    lineHeight: 1.9,
    fontSize: '1.1rem',
    fontWeight: 400,
    fontFamily: 'Montserrat, sans-serif',
    textIndent: '2em',
    backgroundColor: '#f5f5f5',
    borderLeft: '5px solid #1976d2',
    padding: '1.2em',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    color: '#333'
  }}
>
  Bienvenidos al sitio oficial de la Municipalidad de Cholchol. Aquí encontrarás información sobre los servicios, noticias y actividades de nuestra ciudad.
</Typography>

      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="160"
                image={card.imagen}
                alt={card.titulo}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {card.titulo}
                </Typography>
                <Typography variant="body2">
                  {card.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

export default Municipio;
