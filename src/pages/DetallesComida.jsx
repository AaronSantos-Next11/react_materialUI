import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Paper, Typography, Box} from '@mui/material'

export default function DetallesComida (props) {

   const { idMeal } = useParams(); // Obtenemos el ID desde la URL
   const [detalleComida, setDetalleComida] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`); 
            const data = await response.json();
            if (data.meals) {
               setDetalleComida(data.meals[0]);
            }
         } catch (error) {
            console.error("Error al cargar los detalles de la comida:", error);
         }
      };

      fetchData();
   }, [idMeal]);

   if (!detalleComida) return <Typography>Cargando detalles...</Typography>;

   return (
      <Box sx={{ padding: 3 }}>
         <Paper sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
               {detalleComida.strMeal}
            </Typography>

            <img 
               src={detalleComida.strMealThumb} 
               alt={detalleComida.strMeal} 
               width="30%" 
               style={{ borderRadius: 8 }} 
            />

            <Typography variant="h6" mt={2}> Categoría: </Typography>
            <Typography>{detalleComida.strCategory}</Typography>

            <Typography variant="h6" mt={2}>Región:</Typography>
            <Typography>{detalleComida.strArea}</Typography>

            <Typography variant="h6" mt={2}>Ingredientes:</Typography>
            {Array.from({ length: 20 }, (_, i) => (
               detalleComida[`strIngredient${i + 1}`] &&
               <Typography key={i}>
                  {detalleComida[`strIngredient${i + 1}`]} - {detalleComida[`strMeasure${i + 1}`]}
               </Typography>
            ))}

            <Typography variant="h6" mt={2}>Instrucciones:</Typography>
            <Typography sx={{ whiteSpace: "pre-line" }}>
               {detalleComida.strInstructions}
            </Typography>

         </Paper>
      </Box>
   );
}