import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function PageAbout() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 6 }}>
      {/* Título principal */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Sobre Nosotros
      </Typography>

      {/* Texto descriptivo */}
      <Typography variant="body1" color="warning" paragraph>
        Bienvenido a nuestra aplicación. En <strong>SearchFood</strong>, nos apasiona conectar a las personas 
        con los mejores platillos de todo el mundo. Creemos que la comida es una experiencia que une culturas 
        y queremos ayudarte a descubrir nuevos sabores.
      </Typography>

      <Typography variant="body1" color="warning">
        Nuestro equipo trabaja continuamente para brindarte una experiencia única y fácil de usar. 
        ¡Esperamos que disfrutes tu búsqueda culinaria con nosotros!
      </Typography>

      {/* Imagen decorativa */}
      <Box mt={4} display="flex" justifyContent="center">
        <img 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Fequipo-desarrolladores-que-trabajan-juntos-codigo-espacio-trabajo-colaborativo-plan-abierto_868783-50515.jpg&f=1&nofb=1&ipt=f6cc899435086c05f6a31ebb1b1e1e1237d6313de180482c0b4e50b0394426f5&ipo=images" 
          alt="Comida deliciosa"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' }}
        />
      </Box>
    </Container>
  );
}
