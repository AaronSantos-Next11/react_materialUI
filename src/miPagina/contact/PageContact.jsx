import React from 'react';
import { Typography, TextField, Button, Container, Box } from '@mui/material';

export default function PageContact() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 6 }}>
      {/* Título de la página */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Contáctanos
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        ¿Tienes alguna pregunta o sugerencia? Déjanos tu mensaje.
      </Typography>

      {/* Formulario */}
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Nombre"
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          label="Correo electrónico"
          margin="normal"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          fullWidth
          label="Mensaje"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          required
        />

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, borderRadius: 3, textTransform: 'none' }}
        >
          Enviar mensaje
        </Button>
      </Box>
    </Container>
  );
}

