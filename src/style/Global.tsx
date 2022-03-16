import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    img {
      height: auto;
      max-width: 100%;
    }
  }
  
  .sticky-container {
    position: sticky !important;
    top: 0;
  }
`

export default GlobalStyle
