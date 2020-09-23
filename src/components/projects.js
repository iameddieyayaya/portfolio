import React from 'react'
import styled from 'styled-components'
import githubLogo from '../images/GitHub-Mark-64px.png'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex: 1 0 21%;
    flex-direction: column;
    
    img {
        width: 350px;
        height: 200px;

    }

    a {
        color: inherit;
        text-decoration: none; /* no underline */
      }
 
`

const P = styled.p`
      font-size: 0.7rem;
      text-align: left;
      width: 275px;
`

const Projects = ({image, link, title, description, github}) => {

    return (
        <Wrapper>
            <a href={link} target="_blank" rel="noreferrer"><img src={image} /></a>
            <div>
                    <a href={link} target="_blank" rel="noreferrer">{title}</a>
                    <a href={github} target="_blank" rel="noreferrer">
                        <img src={githubLogo} style={{ maxWidth: '24px', maxHeight: '24px', marginLeft: '10px', cursor: 'pointer'}} alt="Logo" />
                    </a>
                    <P>{description}</P>
            </div>
        </Wrapper>
    )
}

export default Projects