import React from 'react';
import Iconos from "./iconos";
import styled from "@emotion/styled";
import Image from "gatsby-image";

const Card = styled.div`
    border: 1px solid #e1e1e1;
    img{
        max-width: 100%;
    } 
`;

const Contenido = styled.div`
    padding: 2rem;
    h3{
        font-family: "Lato", sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .precio{
        font-size: 2rem;
        color: #75AB00;
    }
`;

const PropiedadPreview = ({propiedad}) => {
    //console.log(propiedad);
    const { nombre, precio, wc, estacionamiento, habitaciones, imagen } = propiedad;
    //console.log(imagen);
    return ( 
        <Card>
            <Image 
                fluid={imagen.sharp.fluid}
            />
            <Contenido>
                <h3>{nombre}</h3>
                <p className="precio">{precio}</p>
                <Iconos
                    wc = {wc}
                    estacionamiento = {estacionamiento}
                    habitaciones = {habitaciones}
                />
            </Contenido>
        </Card>
    );
}
 
export default PropiedadPreview;

/**
 * 
 */