import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Navegacion from "./navegacion";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const ContenedorHeader = styled.header`
    background-color: #0D283B;
    div{
        max-width: 120rem;
        margin: 0 auto;
        text-align: center;
        @media screen and (min-width: 768px){
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`;

const Header = () => {
    const resultado = useStaticQuery(graphql`
        query{
            file(relativePath: { eq: "logo.svg" }){
            publicURL
            }
        }
    `);

    //console.log(resultado.file.publicURL);
        //<Logo to={"/"}>BIENES<span>RAICES</span></Logo
    return ( 
        <ContenedorHeader>
            <div>
                <Link to={"/"}>
                    <img src={resultado.file.publicURL} alt="logo"/>
                </Link>
                <Navegacion/>
            </div>
        </ContenedorHeader>
     );
}
 
export default Header;