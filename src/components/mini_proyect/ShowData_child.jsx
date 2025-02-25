import React from 'react';
import Button from '@mui/material/Button';
import './tablesStyles.css';

export default function ShowData_child({ books, bicycle }) {
    return (
        <>
            <h3 className="subtitle">Show data file</h3>

            <table className="table_ShowData" border="1" cellPadding="8" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Autor</th>
                        <th>Título</th>
                        <th>Precio</th>
                        <th>Disponibilidad</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.category}</td>
                            <td>{book.author}</td>
                            <td>{book.title}</td>
                            <td>${book.price.toFixed(2)}</td>
                            <td>{book["in-stock"] ? "Disponible" : "No disponible"}</td>
                            <td>
                                <Button variant="contained" color="primary">
                                    Comprar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Sección de la bicicleta */}
            {bicycle && (
                <div className="bicycle-info">
                    <h3>Información de la Bicicleta</h3>
                    <ul>
                        <li><strong>Color:</strong> {bicycle.color}</li>
                        <li><strong>Precio:</strong> ${bicycle.price.toFixed(2)}</li>
                        <li><strong>Disponibilidad:</strong> {bicycle["in-stock"] ? "Disponible" : "No disponible"}</li>
                    </ul>
                </div>
            )}
        </>
    );
}
