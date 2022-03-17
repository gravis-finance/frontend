import { createGlobalStyle } from 'styled-components'
import { breakpoints } from '../contexts/ThemeContext'

const GlobalStyle = createGlobalStyle`
  html, body {
    img {
      height: auto;
      max-width: 100%;
    }
  }
  
  .sticky-content {
    position: sticky !important;
    top: 0;
    will-change: transform;
  }
  
  .sticky-container {
    position: relative;
    height: auto
  }
  
  .pointer-events-none {
    pointer-events: none;
  }
  
  @media (min-width: ${breakpoints.md}) {
    .md\\:sticky-content {
      position: sticky !important;
      top: 0;
      will-change: transform;
    }
  }
`

export default GlobalStyle
