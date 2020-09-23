import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (

      <header
      style={{
            marginBottom: `1.45rem`,
          }}
      >
      <h1>{siteTitle}</h1>
      <p
      > 
      Hi, I'm Eduardo, a front end software developer. Eager to learn and be more tech-y.
      </p>
          <a href="mailto: eddieegomez4@gmail.com">Email</a>
          <br />
          <a href="https://github.com/iameddieyayaya" target="_blank" rel="noreferrer">Github</a>
          <br />
          <a href="https://www.linkedin.com/in/eduardo-gomez-ab3464a5/" target="_blank" rel="noreferrer">Linkedin</a>
          
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
