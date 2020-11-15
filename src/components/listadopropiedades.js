import React, { useState, useEffect } from 'react';
import { css } from "@emotion/core";
import UsePropiedades from "../hooks/usePropiedades";
import PropiedadPreview from "../components/propiedadpreviwe";
import ListadoCSS from "../css/listadopropiedades.module.css";
import useBusqueda from "../hooks/useBusqueda";

const ListadoPropiedades = () => {
    const datos = UsePropiedades();

    //STATE que guarda los datos
    const [ propiedades ] = useState(datos);
    const [ filtradas, guardarFiltradas ] = useState([]);

    const { UiFiltro, busqueda } = useBusqueda(); 
    
    useEffect(() => {
        if(busqueda){
            const filtro = propiedades.filter( propiedad => propiedad.categorias.nombre ===  busqueda)
            guardarFiltradas(filtro);
        }else{
            guardarFiltradas(propiedades);
        }
    }, [busqueda, propiedades])

    return ( 
        <>
            <h2
                css = {css`
                    margin-top: 20px;
                `}
            >Nuestras Propiedades</h2>

            {UiFiltro()}

            <ul className={ListadoCSS.propiedades}>
                {filtradas.map( propiedad => (
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