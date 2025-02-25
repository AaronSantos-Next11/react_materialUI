import { Typography } from '@mui/material';
import React from 'react'
import { ContentAprobado } from '../alumnos_pass/ContentAprobado';
import { ContentReprobado } from '../alumnos_pass/ContentReprobado';

export const AlumnoPromedio = () => {

    const materia1 = 9;
    const materia2 = 6;

    const resultado = (materia1 + materia2) / 2

    if(resultado >= 8) {
        return (
            <>
            <ContentAprobado/>
            <p>Resultado: {resultado} </p>
            </>
            
        );
    } else {
        return (
            <div>
                <ContentReprobado/>
                <p>Resultado: {resultado} </p>
            </div>
        );
    }

  return (
    <div>AlumnoPromedio</div>
  )
}
