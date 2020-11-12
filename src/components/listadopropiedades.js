import React, { useState, useEffect } from 'react';
import { css } from "@emotion/core";
import UsePropiedades from "../hooks/usePropiedades";
import PropiedadPreview from "../components/propiedadpreviwe";
import ListadoCSS from "../css/listadopropiedades.module.css";

const ListadoPropiedades = () => {
    const datos = UsePropiedades();
    //STATE que guarda los datos
    const [propiedades, guardarPropiedades] = useState([]);
    //Actualizando state al momento de cargar propiedades
    useEffect(() => {
        guardarPropiedades(datos);
    }, [])
    //console.log(informacion);
    return ( 
        <>
            <h2
                css = {css`
                    margin-top: 20px;
                `}
            >Nuestras Propiedades</h2>

            <ul className={ListadoCSS.propiedades}>
                {propiedades.map( propiedad => (
                    <PropiedadPreview
                        key= {propiedad.id}
                        propiedad = {propiedad}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default ListadoPropiedades;