import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListaProductoDialogo from './ListaProductoDialogo'

export default function ListaVerduras() {

   const data = {
      "store": {
          "book": [
              {
                  "category": "reference",
                  "author": "Nigel Rees",
                  "title": "Sayings of the Century",
                  "price": 8.95,
                  "in-stock": true,
                  "sold": true
              },
              {
                  "category": "fiction",
                  "author": "Evelyn Waugh",
                  "title": "Sword of Honour",
                  "price": 12.99,
                  "in-stock": false,
                  "sold": true
              },
              {
                  "category": "fiction",
                  "author": "Herman Melville",
                  "title": "Moby Dick",
                  "isbn": "0-553-21311-3",
                  "price": 8.99,
                  "in-stock": true,
                  "sold": false
              },
              {
                  "category": "fiction",
                  "author": "J. R. R. Tolkien",
                  "title": "The Lord of the Rings",
                  "isbn": "0-395-19395-8",
                  "price": 22.99,
                  "in-stock": false,
                  "sold": false
              }
          ],
          "bicycle": {
              "color": "red",
              "price": 19.95,
              "instock": true,
              "sold": false
          }
      }
  };

   const verduras = [
      { id: '1', nombre: 'Lechuga', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 23, cantidad: 12 },
      { id: '2', nombre: 'Tomate', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 25, cantidad: 17 },
      { id: '3', nombre: 'Papa', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 17, cantidad: 8 },
      { id: '4', nombre: 'Zanahoria', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 22, cantidad: 4 },
      { id: '5', nombre: 'Cebolla', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 30, cantidad: 10 },
      { id: '6', nombre: 'Espinaca', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 36, cantidad: 3 },
   ];

   const [verduraSeleccionada, setVerduraSeleccionada] = useState('');

   return (
      <div>
         <h2>Lista de Verduras</h2>
         
         {verduras.length > 0 ? (
            <ul>
               {verduras.map((data) => (
                  <li key={data.id}>
                     {data.id} | {data.nombre} | {data.descripcion} | ${data.precio} {' '}
                     <Button 
                        onClick={() => alert(`Stock disponible: ${data.cantidad}`)} 
                        variant="contained" 
                        color="primary"
                     >
                        Ver stock
                     </Button>
                  </li>
               ))}
            </ul>
         ) : (
            <p>No hay datos almacenados</p>
         )}

         <Divider style={{ margin: '20px 0' }} />

         <h2>Tabla de Verduras</h2>
         {verduras.length > 0 ? (
            <table 
               border="1" 
               cellPadding="8" 
               cellSpacing="0" 
               style={{ width: '50%', textAlign: 'left', borderCollapse: 'collapse' }}
            >
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Nombre</th>
                     <th>Descripción</th>
                     <th>Precio</th>
                     <th>Acción</th>
                  </tr>
               </thead>
               <tbody>
                  {
                  verduras.map((data) => (
                     <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.nombre}</td>
                        <td>{data.descripcion}</td>
                        <td>${data.precio}</td>
                        <td>
                           <Button 
                              onClick={() => alert(`Stock disponible: ${data.cantidad}`)} 
                              variant="contained" 
                              color="primary"
                           >
                              Ver stock
                           </Button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         ) : (
            <p>No hay datos almacenados</p>
         )}

         <Divider style={{ margin: '20px 0' }} />

         <h2>Selecciona una Verdura</h2>
         <FormControl style={{ minWidth: 200, marginLeft: 20 }} variant='standard'>
            <InputLabel id="select-verdura-label">Verdura</InputLabel>
            <Select
               labelId="select-verdura-label"
               value={verduraSeleccionada}
               onChange={(event) => setVerduraSeleccionada(event.target.value)}
            >
               {verduras.map((verdura) => (
                  <MenuItem key={verdura.id} value={verdura.nombre}>
                     {verdura.nombre}
                  </MenuItem>
               ))}
            </Select>
         <br />
         </FormControl>


         <Divider color={'primary'}></Divider>

         {/* Creamos una prop, primero llamando al componente como etiqueta,
            y luego añadimos un "atributo" que es igual a la constante  
         */}
         <ListaProductoDialogo data={data.store} ></ListaProductoDialogo>

      </div>

   );
}
