import React from 'react';
import { Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ErrorOutline } from '@mui/icons-material';

export const NotFound = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 6 }}>
      {/* Icono de error */}
      <Box mb={2}>
        <ErrorOutline color="error" sx={{ fontSize: 80 }} />
      </Box>

      {/* Mensaje principal */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        404 - Página no encontrada
      </Typography>

      {/* Mensaje secundario */}
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </Typography>

      {/* Botón para regresar */}
      <Box mt={3}>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/" 
          size="large"
          sx={{ borderRadius: 3, textTransform: 'none' }}
        >
          Volver a Inicio
        </Button>
      </Box>
    </Container>
  );
};

