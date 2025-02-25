import React, { useState } from 'react';
import './tablesStyles.css';
import ShowData from './ShowData_child';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function MyProject() {
    
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
                "in-stock": true,
                "sold": false
            }
        }
    };

    const [DatosStorage, setDatosStorage] = useState(false);
    const [showBike, setShowBike] = useState(false);
    const [opinion, setOpinion] = useState("");

    const changeState = () => {
        setDatosStorage(!DatosStorage);
        console.log('Tu switch está:', !DatosStorage);
    };

    const toggleBikeInfo = () => {
        setShowBike(!showBike);
    };

    const handleOpinionChange = (event) => {
        setOpinion(event.target.value);
    };

    const submitOpinion = () => {
        if (opinion.trim() === "") {
            alert("Por favor, escribe tu opinión antes de enviarla.");
        } else {
            alert("¡Gracias por tu opinión! Se ha enviado correctamente.");
            setOpinion(""); // Limpiar input después de enviar
        }
    };

    return (
        <div id="home">
            <h1 className="Title">
                Hola, ¿qué tal? ¿Desea ver el listado <br />
                de objetos en el mercado?
            </h1>

            <Switch
                checked={DatosStorage}
                onChange={changeState}
                inputProps={{ "aria-label": "Mostrar datos" }}
            />

            {DatosStorage ? <ShowData books={data.store.book} bicycle={showBike ? data.store.bicycle : null} /> : <h1>Sin datos</h1>}

            <h2>¿Le gustaría consultar el precio de nuestra bicicleta de la tienda?</h2>
            <Button variant="contained" color="primary" onClick={toggleBikeInfo}>
                {showBike ? "Ocultar Bicicleta" : "Ver Bicicleta"}
            </Button>

            {/* Sección para la opinión del usuario */}
            <h2>¿Cómo fue tu experiencia en nuestra web?</h2>
            <TextField
                label="Escribe tu opinión"
                variant="outlined"
                value={opinion}
                onChange={handleOpinionChange}
                style={{ marginBottom: "10px" , width: "500px"}}
            />
            <Button variant="contained" color="secondary" onClick={submitOpinion}>
                Enviar Opinión
            </Button>
        </div>
    );
}

export default MyProject;
