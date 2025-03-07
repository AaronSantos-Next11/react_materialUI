import React from 'react';
import { Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function PageHome() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 4 }}>
      {/* Título principal */}
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Bienvenido a SearchFood
      </Typography>

      {/* Subtítulo */}
      <Typography variant="h5" color="text.secondary" gutterBottom>
        El mejor buscador de platillos internacionales
      </Typography>

      {/* Botón centrado */}
      <Box mt={3}>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/recetas"
          size="large"
          sx={{ borderRadius: 3, textTransform: 'none', fontSize: '1.1rem' }}
        >
          Ver recetas
        </Button>
      </Box>

      {/* Imagen centrada */}
      <Box mt={4} display="flex" justifyContent="center">
        <img 
          src="https://image.freepik.com/foto-gratis/mesa-servida-restaurante-platos-carne-diferentes-platos_135427-6156.jpg"
          alt="Platos de comida"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' }}
        />
      </Box>
    </Container>
  );
}
