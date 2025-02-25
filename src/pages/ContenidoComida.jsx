import React from "react";
import Grid from '@mui/material/Grid2';
import { Paper } from '@mui/material';

export default function ContenidoComida () {



   return(

      <div>
         Soy un componente contenido

         <Grid container spacing={2} paddingTop={4}>
            
            <Grid size = {{ xs:6, md:4 }} paddingLeft={2}>

               <Paper style={{padding: 13, backgroundColor: 'seagreen'}}>
                  Hola mundo
               </Paper>

            </Grid>

            <Grid size = {{ xs:6, md:4 }} paddingRight={2}>

               <Paper style={{padding: 13, backgroundColor: 'silver'}}>
                  Hola mundo
               </Paper>

            </Grid>

         </Grid>
      </div>

   )
}