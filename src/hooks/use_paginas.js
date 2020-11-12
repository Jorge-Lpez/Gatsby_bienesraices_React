import { graphql, useStaticQuery } from "gatsby";

const UsePaginas = () => {
    
    const resultado = useStaticQuery(graphql`
    query{
        allStrapiPaginas( filter: { nombre: { eq: "Inicio" } } ) { 
          nodes{
            nombre
            contenido
            imagen{
                Sharp: childImageSharp{
                    fluid ( maxWidth: 1500 duotone: {
                        highlight: "#222222", shadow:"#192550", opacity: 30
                    }){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
          }
        }
      }
    `);

    return resultado.allStrapiPaginas.nodes[0];
}
 
export default UsePaginas;