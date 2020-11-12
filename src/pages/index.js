import React from "react"
import Layout from "../components/layout" 
import UsePaginas from "../hooks/use_paginas";
import styled from "@emotion/styled";
import BackgroundImage from 'gatsby-background-image';
import { css } from "@emotion/core";

const ContenedorMain = styled.main`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    text-align: center;
`;

 const ImagenFondo = styled(BackgroundImage)`
        height: 600px;
        h1{
          margin: 0;
        }
 `;

const IndexPage = () => {
  const informacion = UsePaginas();
  console.log(informacion);
  const {nombre, contenido, imagen} = informacion;
  console.log(imagen.Sharp.fluid);
  return ( 
      <Layout>

          <ImagenFondo
              tag="section"
              fluid={imagen.Sharp.fluid}
              fadeIn="soft"
           >
              <div>
                <h1> Ventas de casa y departamentos exclusivos</h1>
              </div>
          </ImagenFondo>

          <ContenedorMain>
            <h1>{nombre}</h1>
            <p>{contenido}</p>
          </ContenedorMain>

      </Layout>
   );
}
 
export default IndexPage;
