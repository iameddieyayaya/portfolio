import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

import Projects from '../components/projects'
import Eddie from '../components/eddie'

import PROJECTS_DATA from '../pages/projects.data'


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  top: 0;
  margin: 0;
  padding: 0;

  /* Screen >= Tablets */
  @media (max-width: 768px) {
   display: block;
}
`

const Container = styled.div`

`

const IndexPage = () => {
  
  return (
    <Layout>
      <SEO title="Home" />
      
      <Container>

        <Eddie />
        <h1>Projects</h1>
        <Wrapper>
          {
            PROJECTS_DATA.items.map(({id, link, image, title, description, github }) => 
                <Projects key={id} link={link} image={image} title={title} description={description} github={github} />
            )
          }
        </Wrapper>
      </Container>

      
    </Layout>
  )

}

export default IndexPage
