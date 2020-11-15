const urlSlug = require("url-slug");

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query{
            allStrapiPaginas {
                nodes {
                    nombre
                    id
                }
            }
            allStrapiPropiedades{
            nodes{
                id
                nombre
            }
            }
        }
    `);

    //console.log(JSON.stringify(resultado.data.allStrapiPropiedades));

    //Si no hay resultados
    if(resultado.errors){
        reporter.panic("No hubo resultados", resultado.errors);
    }

    //Si hay resultados generar los archivos estaticos
    const propiedades = resultado.data.allStrapiPropiedades.nodes;
    const paginas = resultado.data.allStrapiPaginas.nodes;
    //console.log(propiedades);

    //Crear tempplates de la paginas
    paginas.forEach( pagina => {
        //console.log( urlSlug(propiedad.nombre));
        actions.createPage({
            path: urlSlug( pagina.nombre ),
            component: require.resolve("./src/components/paginas.js"),
            context: { 
                id: pagina.id
            }
        })
    } );

    //Crear tempplates de la propiedades
    propiedades.forEach( propiedad => {
        //console.log( urlSlug(propiedad.nombre));
        actions.createPage({
            path: urlSlug( propiedad.nombre ),
            component: require.resolve("./src/components/propiedades.js"),
            context: { 
                id: propiedad.id
            }
        })
    } );
}

