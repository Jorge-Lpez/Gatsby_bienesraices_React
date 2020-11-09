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

const Logo = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 30px ;
    font-family: "Roboto";
    span{
        font-weight: bold;
    }
`;

const Header = () => {
    /*const resultado = useStaticQuery(graphql`
        query{
            paginas{
            nombre
            }
        }
    `);

    console.log(resultado);*/

    return ( 
        <ContenedorHeader>
            <div>
                <Logo to={"/"}>BIENES<span>RAICES</span></Logo>
                <Navegacion/>
            </div>
        </ContenedorHeader>
     );
}
 
export default Header;