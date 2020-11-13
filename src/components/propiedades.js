import React from 'react';
import Iconos from "./iconos";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import Layout from "./layout";
import { graphql } from "gatsby";

export const query = graphql`
    query($id: String!){
        allStrapiPropiedades( filter: { id: { eq: $id }}){
            nodes {
                nombre
                descripcion
                wc
                estacionamiento
                habitaciones
                precio
                agentes {
                    nombre
                    telefono
                    email
                }
                imagen{
                    sharp: childImageSharp{
                        fluid ( maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    .precio{
        font-size: 2rem;
        color: #75AB00;
    }
    .agente{
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #fff;
        p{
            margin: 0;
        }
    }
`;

const Propiedades = ({data}) => {
    
    const { agentes, descripcion, estacionamiento, habitaciones, imagen, nombre, 
    precio, wc } = data.allStrapiPropiedades.nodes[0];

    return ( 
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <Image fluid={imagen.sharp.fluid}/>
                    <p>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className="precio">${precio}</p>
                    <Iconos
                        wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />
                    <div className="agente">
                        <h2>vendedor: </h2>
                        <p>{agentes.nombre}</p>
                        <p>{agentes.email}</p>
                        <p>{agentes.telefono}</p>
                    </div>
                </Sidebar>
            </Contenido>
        </Layout>
     );
}
 
export default Propiedades;