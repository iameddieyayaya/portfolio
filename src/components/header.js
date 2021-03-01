import PropTypes from "prop-types"
import React from "react"

import resume from '../GomezE_Dev_2021_v2.pdf'

const Header = ({ siteTitle }) => (

      <header
      style={{
            marginBottom: `1.45rem`,
          }}
      >
      <h1>{siteTitle}</h1>
      <p
      > 
      Hi, I'm Eduardo, a frontend developer. Eager to learn and be more techie.
      </p>
          <a href="mailto: eddieegomez4@gmail.com">Email</a>
          <br />
          <a href="https://github.com/iameddieyayaya" target="_blank" rel="noreferrer">Github</a>
          <br />
          <a href="https://www.linkedin.com/in/eduardo-gomez-ab3464a5/" target="_blank" rel="noreferrer">Linkedin</a>
          <br />
          <a href={resume} target="_blank" rel="noreferrer" >Resume</a>
          
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
