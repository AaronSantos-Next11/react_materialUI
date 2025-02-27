import React from "react";
import Grid from '@mui/material/Grid2';
import { Paper, Typography, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



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
                  // ! Acomodar el texto de las instrucciones
                  */}

                  {
                     data.map((resetaData, index) => (

                        <Grid key={index} size={{ xs:6, md: 4}} >
                           <Paper style={{padding: 10, }}>
                              <img src={resetaData.strMealThumb} alt="" width={280}/>
                              
                              <p> Comida: {resetaData.strMeal} </p>

                              <p> id: {resetaData.idMeal} </p>
                              
                              <Accordion>

                                 <AccordionSummary
                                 expandIcon={<ArrowDownwardIcon />}
                                 aria-controls="panel1-content"
                                 id="panel1-header"
                                 style={{backgroundColor: 'blanchedalmond'}}
                                 >
                                    <Typography>Ingredientes</Typography>
                                 </AccordionSummary>
                                 
                                 <AccordionDetails>
                                    <Typography>
                                       {resetaData.strIngredient1} - {resetaData.strMeasure1} <br/>
                                       {resetaData.strIngredient2} - {resetaData.strMeasure2} <br/>
                                       {resetaData.strIngredient3} - {resetaData.strMeasure3} <br/>
                                       {resetaData.strIngredient4} - {resetaData.strMeasure4} <br/>
                                       {resetaData.strIngredient5} - {resetaData.strMeasure5} <br/>
                                       {resetaData.strIngredient6} - {resetaData.strMeasure6} <br/>
                                       {resetaData.strIngredient7} - {resetaData.strMeasure7} <br/>
                                       {resetaData.strIngredient8} - {resetaData.strMeasure8} <br/>
                                       {resetaData.strIngredient9} - {resetaData.strMeasure9} <br/>
                                       {resetaData.strIngredient10} - {resetaData.strMeasure10} <br/>
                                    </Typography>
                                 </AccordionDetails>

                              </Accordion>

                              <Accordion>

                                 <AccordionSummary
                                 expandIcon={<ArrowDownwardIcon />}
                                 aria-controls="panel1-content"
                                 id="panel1-header"
                                 style={{backgroundColor: 'blanchedalmond'}}
                                 >
                                    <Typography>Instrucciones</Typography>
                                 </AccordionSummary>

                                 <AccordionDetails>
                                    <Typography variant="body2" sx={{ textAlign: "justify", whiteSpace: "pre-line" }}>
                                       {resetaData.strInstructions} <br/>

                                    </Typography>
                                 </AccordionDetails>

                              </Accordion>

                              <Button 
                                 variant="contained"
                                 target="_blank"
                                 style={{ marginTop:10, backgroundColor: 'green'}}
                                 href={resetaData.strYoutube} >
                                 Watch Video
                              </Button>
                                 
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