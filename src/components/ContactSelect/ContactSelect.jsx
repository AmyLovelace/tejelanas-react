import React, { useState } from "react";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  Grid,
} from "@mui/material";

const contactos = [
  { nombre: "INFORMACIONES", telefono: "452 734200" },
  { nombre: "OMIL", telefono: "234-567-890" },
  { nombre: "SUBSIDIOS Y PENSIONES 1", telefono: "345-678-901" },
  { nombre: "PROGRAMA MUJER TRABAJADORA Y JEFAS DE HOGAR", telefono: "456-789-012" },
  { nombre: "HIDRICO", telefono: "567-890-123" },
  { nombre: "RENTAS Y PATENTES DAF", telefono: "452 734200" },
  { nombre: "DIRECCIÓN DE OBRAS MUNICIPAL", telefono: "234-567-890" },
  { nombre: "PROGRAMAS EXTRA PRESUPUESTARIOS", telefono: "345-678-901" },
  { nombre: "ENCARGADO VIVIENDA", telefono: "456-789-012" },
  { nombre: "ASESOR JURÍDICO", telefono: "567-890-123" },
  { nombre: "HIDRICO", telefono: "567-890-123" },
  { nombre: "SECRETARIA MUNICIPAL", telefono: "452 734200" },
  { nombre: "TESORERIA", telefono: "234-567-890" },
  { nombre: "REGISTRO SOCIAL DE HOGARES", telefono: "345-678-901" },
  { nombre: "DISCAPACIDAD", telefono: "456-789-012" },
  { nombre: "SECRETARIA DEFICIT HIDRICO", telefono: "567-890-123" },
];

const ContactSelect = () => {
  const [busqueda, setBusqueda] = useState("");

  const contactosFiltrados = contactos
    .filter((c) =>
      c.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
    .slice(0, 3); // Limita a 3 resultados

  return (
    <Container maxWidth="sm" disableGutters sx={{ mt: 5 }}>
      <Box sx={{ position: 'relative', zIndex: 1 }} >
        <TextField
            id="outlined-suffix-shrink"
            fullWidth
            label="Buscar contacto"
            variant="filled"
            value={busqueda}
            placeholder="Buscar anexo municipal"
            onChange={(e) => setBusqueda(e.target.value)}
        />
      </Box>
      <Box mt={3}>
        <Grid container spacing={2}>
          {contactosFiltrados.map((contacto, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 2 ,padding:'0px'}} className="CARD">
                <CardContent>
                  <Typography variant="body1" p={0}>{contacto.nombre}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {contacto.telefono}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactSelect;
