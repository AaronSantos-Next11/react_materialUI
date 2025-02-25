import React from "react";
import Grid from '@mui/material/Grid2';
import { Paper, Typography } from '@mui/material';


export default function ContenidoComida ({data}) {

   console.log('Datos desde padre:', data)

   return(

      <div>
         Soy un componente contenido
         {   
            !data || data.length === 0 ? (
            <Typography variant="h4" color="initial"> No hay datos que mostrar</Typography>) 
            : (
               <Grid container padding={4} spacing={3}>

                  {/*
                  // ! Agregar los ingredientes, las intrucciones,un boton para ver el video en YouTube y acomodarlo bien
                  */}

                  {
                     data.map((resetaData, index) => (

                        <Grid key={index} size={{ xs:6, md: 4}} >
                           <Paper>
                              <img src={resetaData.strMealThumb} alt="" width={280}/>
                              
                              <p> Comida: {resetaData.strMeal} </p>

                              <p> id: {resetaData.idMeal} </p>

                              <p></p>
                              
                           </Paper>
                        </Grid>

                     ))
                  }

               </Grid>
            )
         }
      </div>

   )
}