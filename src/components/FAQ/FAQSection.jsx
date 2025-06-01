import { useEffect, useState, forwardRef } from 'react';
import {
  Box,
  Typography,
  Container,
  Collapse,
  Paper,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const FAQSection = forwardRef((props, ref) => {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const res = await fetch('../../data/faq.json')
        const json = await res.json();
        setFaqData(json.data.filter(q => q.activo));
        setLoading(false);
      } catch (err) {
        console.error('Error loading FAQ:', err);
        setLoading(false);
      }
    };
    fetchFAQ();
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container ref={ref} sx={{ py: 8 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Preguntas Frecuentes
      </Typography>

      {loading ? (
        <Typography align="center" sx={{ mt: 4 }}>Cargando...</Typography>
      ) : (
        faqData.map((item, index) => (
          <Paper
            key={item.id}
            elevation={3}
            sx={{
              my: 2,
              borderRadius: 4,
              px: 3,
              py: 2,
              bgcolor: '#fefefe',
              transition: 'all 0.3s ease',
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              onClick={() => toggle(index)}
              sx={{
                cursor: 'pointer',
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                {item.titulo}
              </Typography>
              <IconButton>
                {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
            <Collapse in={openIndex === index}>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  px: 1,
                  color: '#555',
                  lineHeight: 1.6,
                }}
              >
                {item.respuesta}
              </Typography>
            </Collapse>
          </Paper>
        ))
      )}
    </Container>
  );
});

export default FAQSection;