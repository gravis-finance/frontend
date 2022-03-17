import { createGlobalStyle } from 'styled-components'

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
`

export default GlobalStyle
