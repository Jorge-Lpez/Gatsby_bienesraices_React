import { graphql, useStaticQuery } from "gatsby";


const UsePropiedades = () => {

    const resultado = useStaticQuery(graphql`
        query{
            allStrapiPropiedades{
            nodes {
                nombre
                descripcion
                id 
                wc
                precio
                estacionamiento
                habitaciones
                    agentes{
                        nombre
                        email
                        telefono
                    }
                    categorias{
                        nombre
                    }
                imagen{
                    sharp: childImageSharp {
                        fluid( maxWidth: 600, maxHeight: 400){
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                }
            }
        }
    `);

    return resultado.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        imagen: propiedad.imagen,
        id: propiedad.id,
        wc: propiedad.wc,
        estacionamiento: propiedad.estacionamiento,
        habitaciones: propiedad.habitaciones,
        agentes: propiedad.agentes,
        precio: propiedad.precio,
        categorias: propiedad.categorias
    }));
}
 
export default UsePropiedades;