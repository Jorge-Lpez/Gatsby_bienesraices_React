import React from 'react';
import { Link } from "gatsby"
import styled from "@emotion/styled";

const LinkNav = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 10px;
    &.pagina-actual{
        border-bottom: 2px solid #ffffff;
    }
`;

const Navegacion = () => {
    return ( 
            <nav>
                <LinkNav to={"/"} activeClassName="pagina-actual">Inicio</LinkNav>
                <LinkNav to={"/nosotros"} activeClassName="pagina-actual">Nosotros</LinkNav>
                <LinkNav to={"/propiedades"} activeClassName="pagina-actual">Propiedades</LinkNav>
            </nav>
     );
}
 
export default Navegacion;