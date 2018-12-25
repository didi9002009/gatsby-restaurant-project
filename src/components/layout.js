import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/Global/Navbar'

// import '../styles/sass/layout.scss'

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Navbar />
    {children}
  </div>
)

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  // font-family: 'Caveat', cursive;
  // color:red;
  // font-size:3rem;
  font-family: 'Roboto', sans-serif;
  color:#262626;
  background:#fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
