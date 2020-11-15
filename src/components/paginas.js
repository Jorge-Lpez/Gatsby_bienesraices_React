import React from 'react';
import Layout from "./layout";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import ListadoPropiedades from "./listadopropiedades";

export const query = graphql`
    query($id: String!){
        allStrapiPaginas( filter: { id: { eq: $id }}){
            nodes {
                nombre
                contenido
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

const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Paginas = ({data}) => {

    const { nombre, contenido, imagen } = data.allStrapiPaginas.nodes[0];

    return ( 
        <Layout>
            <main>
                <h1>{nombre}</h1>
                <ContenidoPagina>
                    <Image fluid={imagen.sharp.fluid}/>
                    <p>{contenido}</p>
                </ContenidoPagina>
                {nombre === "Propiedades" 
                ? 
                    <ListadoPropiedades/>
                : 
                    null
                }
            </main>
        </Layout>
     );
}
 
export default Paginas;
