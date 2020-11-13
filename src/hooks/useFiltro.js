import React, { useState } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

const Formulario = styled.form`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    border: 1px solid black;
    margin-top: 10px;
    select{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        appearance: none;
        border: none;
        font-family: "Lato", sans-serif;
    }
`;

const useFiltro = () => {

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

    const [busqueda, guardarBusqueda] = useState("");

    const buscar = (e) => {
        guardarBusqueda(e.target.value);
    };

    //console.log(resultado.allStrapiCategorias.nodes);
    const FlitroUI = ()=>(
        <Formulario>
            <select
                onChange={buscar}
                value={busqueda}
            >
                <option value="" > -- Filtrar --</option>
                {resultado.allStrapiCategorias.nodes.map(categoria => ((
                    <option key={categoria.id} value= {categoria.nombre} > {categoria.nombre} </option>
                )))}
            </select>
        </Formulario>
    )

    return {
        busqueda,
        FlitroUI
    };
}
 
export default useFiltro;