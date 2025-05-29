import React, { forwardRef, useState } from 'react';
import { Box ,Typography,Grid,TextField, MenuItem,Select,Button,FormControl,InputLabel,TextareaAutosize} from '@mui/material';
import { alertConf, alertSwal } from '../../../utils/alerts';
import'./ContactForm.css';

const ContactForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validationMessages = {
    name: 'Nombre es un campo requerido',
    email: 'Email no válido',
    message: 'Mensaje es un campo requerido',
    successTitle: `Formulario enviado, ${formData.name}!`,
    successText: `Serás notificado a ${formData.email} en breve. Gracias por contactar con la Municipalidad de Cholchol.`,
    buttonText:'Entendido'
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return validationMessages.name;
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return validationMessages.email;
        break;
      case 'message':
        if (!value.trim()) return validationMessages.message;
        break;
      default:
        return '';
    }
    return '';
  };

  const showError = (message) => {
    alertSwal('error','Atención',message,null,'Entendido','#FEE4E2','#000000','#f27474')
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validationError = validateField(name, value);
    if (validationError) {
      showError(validationError);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const field in formData) {
      const validationError = validateField(field, formData[field]);
      if (validationError) {
        showError(validationError);
        return;
      }
    }

    const confirm = await alertConf(
        `<div style="font-size: 14px; text-align: left; display:flex; flex-direction:column; align-items:start">
        ¿Deseas enviar este mensaje con los siguientes datos?<br/>
        <strong>Nombre:</strong> ${formData.name} <br/>
        <strong>Email:</strong> ${formData.email} <br/>
        <strong>Mensaje:</strong> ${formData.message}
        </div>`,
        'Confirmar envío',
        'No enviar'
    );

    if (!confirm){
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      return
    }
    console.log('Formulario válido:', formData);
    alertSwal('success',validationMessages.successTitle,validationMessages.successText,null,validationMessages.buttonText)
  };
  return (
    <Box marginTop={4} id="hero" ref={ref} sx={{ my: 5 }} p={4}>
      <Typography variant="h4" gutterBottom>
        Contáctanos 🚀
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Dirección:
          </Typography>
          <Typography>José Joaquín Pérez, 449<br /> Cholchol, Araucanía, Chile</Typography>

          <Typography variant="subtitle1" mt={3}>
            Teléfono:
          </Typography>
          <Typography>452 - 7342008</Typography>
          <Typography variant="subtitle1" mt={3}>
            Email:
          </Typography>
          <a href="mailto:oficinadepartes@municholchol.cl">oficinadepartes@municholchol.cl</a>
        </Grid>

        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              required
            />
            <FormControl fullWidth margin="normal">
              <TextareaAutosize
                minRows={5}
                placeholder="Escribe tu mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  width: '100%',
                  padding: '16.5px 14px',
                  borderRadius: 4,
                  border: '1px solid rgba(0, 0, 0, 0.23)',
                  fontFamily: 'inherit'
                }}
                required
              />
            </FormControl>

            <Box textAlign="center" mt={3}>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
});

export default ContactForm;
