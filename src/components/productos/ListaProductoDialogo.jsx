import Grid from '@mui/material/Grid2';

import React from 'react'
import { Typography , Card, CardHeader, Avatar, IconButton } from '@mui/material';
import MiDialogo from './MiDialogo';

export default function ListaProductoDialogo (props) {
const data = props.data
   console.log(data)
  return (
    <div>
        <h2>Consumo de un objeto</h2>

        <Grid container spacing={3}>
            <Grid size={{sm:12, md: 6}}>
                <Card variant='outlined' color='primary' style={{padding:15}}>
                    <Typography variant='h4' color='initial'>Bicicla en promo</Typography>
                    <Typography variant='h5' color='initial'>Precio mas bajo: {data.bicycle.price} </Typography>
                    <Typography variant='h5' color='initial'>Stock:  {data.bicycle.instock ? "Disponible" : "No hay" }</Typography>
                    <Typography variant='h5' color='initial'>Color: {data.bicycle.color}</Typography>
                </Card>
            </Grid>
        </Grid>


        <Grid container spacing={3}>

         {
         
            data.book.map(
            
               (libro,index) => (

                  <Grid size={{sm:12, md: 6}} key={index}>
                     <Card variant='outlined' color='primary' style={{padding:15}}>
                        <Typography variant='h4' color='initial'>Libro</Typography>

                        <CardHeader
                        avatar={
                           <Avatar aria-label="">
                              
                           </Avatar>
                        }
                        action={
                           <IconButton aria-label="">
                              
                           </IconButton>
                        }
                        title=""
                        subheader=""
                        
                        />
                        <Typography variant='h5' color='initial'>Title: {libro.title} </Typography>
                        <Typography variant='h5' color='initial'>Author:  {libro.author}</Typography>
                        <Typography variant='h5' color='initial'>Categoria {libro.category}</Typography>

                        <MiDialogo datos={libro} ></MiDialogo>
                     </Card>
                  </Grid>
               ) 
            )
         }


        </Grid>
    </div>
  )
}