import React, { useState } from 'react';
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

const Formulario = styled.form`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
    select{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        appearance: none;
        font-family: "Lato", sans-serif;
    }
`;

const useBusqueda = () => {

    const [busqueda, guardarBusqueda] = useState("");

    const resultado = useStaticQuery(graphql`
            query{
                allStrapiCategorias{
                    nodes{
                        nombre
                        id
                    }
                }
            }
    `);

    const categoria = resultado.allStrapiCategorias.nodes;
    //console.log(categoria);

    const UiFiltro = () => (
        <Formulario>
                <select
                     onChange={(e) => guardarBusqueda(e.target.value)}
                     value={busqueda}
                >
                    <option value=""> -- Filtrar --</option>
                    {categoria.map( tipo => (
                        <option key={tipo.id} value={tipo.nombre}>{tipo.nombre}</option>
                    ))}
                </select>
        </Formulario>
    );

    return {UiFiltro, busqueda};
}
 
export default useBusqueda;