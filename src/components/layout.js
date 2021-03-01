/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const Container = styled.div`
  width: 100wh;
  height: 100vh;
  display: block;
  margin-left: 20px;
  margin-right: 50px;
  margin-top: 50px;

  /* Screen >= Tablets */
  @media (min-width: 768px) {
    margin-top: 150px;
}

`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  
    <Container>
         <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
