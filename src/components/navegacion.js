import React from 'react';
import { Link } from "gatsby"
import styled from "@emotion/styled";

const LinkNav = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 10px;
    margin-right: 1rem;
    font-weight: 700;
    font-family: "PT Sans", sans-serif;
    &::last-of-type{
        margin-right: 0;
    }
    @media screen and  (min-width: 768px){
        &.pagina-actual{ 
            border-bottom: 2px solid #ffffff;
        }
    }
`;

const Nav = styled.nav`
    display:flex;
    flex-direction: column;
    padding-bottom: 10px;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const Navegacion = () => {
    
    
    return ( 
            <Nav>
                <LinkNav to={"/"} activeClassName="pagina-actual">Inicio</LinkNav>
                <LinkNav to={"/nosotros"} activeClassName="pagina-actual">Nosotros</LinkNav>
                <LinkNav to={"/propiedades"} activeClassName="pagina-actual">Propiedades</LinkNav>
            </Nav>
     );
}
 
export default Navegacion;