import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
//import "./layout.css"
import { Helmet } from "react-helmet";
import { Global, css } from "@emotion/core"
import Header from "./header";

const Layout = ({ children }) => {

  return (
    <>
      <Global
          styles = {css`
                html{
                  box-sizing: border-box;
                  font-size: 62.5%;
                  
                }

                *, *:after, *:before{
                  box-sizing: inherit;
                  margin: 0;
                  padding: 0;
                }

                body{
                  font-size: 1.6rem;
                  line-height: 2;
                  font-family: "Lato", sans-serif;
                }

                h1, h2, h3 {
                  line-height:1.5;
                }

                h1,h2 {
                  text-align: center;
                  font-family: "Lato", sans-serif;
                  font-weight: 300;
                }
                ul{
                  list-style: none;
                  margin: 0;
                  padding: 0;
                }
                img{
                  max-width: 100%;
                }
          `}
      />

      <Helmet
        title="Hola mundo"
        description="Sitio web de bienes raices en Gatsby"
      >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@300;700&display=swap" rel="stylesheet"/>
      </Helmet>

      <div>
          <Header/>

          <main className="contenido-principal">
            {children}
          </main>

      </div>
    </>
  )
}

export default Layout;
