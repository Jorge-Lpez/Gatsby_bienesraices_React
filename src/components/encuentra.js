import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import Estilosmodule from "../css/estilos.module.css";

const ImageBackground = styled(BackgroundImage)`
     height: 300px; 
`;

const Encuentra = () => {

    const informacion = useStaticQuery(graphql`
        query{
            file(relativePath: { eq: "encuentra.jpg"}){
                sharp: childImageSharp{
                    fluid( maxWidth: 1500 ){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    //console.log(informacion);

    return ( 
        <ImageBackground tag="section" fluid={informacion.file.sharp.fluid} fadeIn="soft">
            <div className={Estilosmodule.div_imagen}>
                <h3 className={Estilosmodule.titulo}>Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia</p>
            </div>
        </ImageBackground>
     );
}
 
export default Encuentra;