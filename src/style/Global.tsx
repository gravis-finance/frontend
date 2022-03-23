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
  
  .object-contain {
    object-fit: contain;
  }
  
  @media (min-width: ${breakpoints.md}) {
    .md\\:sticky-content {
      position: sticky !important;
      top: 0;
      will-change: transform;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    .no-scroll-bar {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer 10+ */

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  
  .will-change {
    will-change: transform;
  }
  
  .rotate-180 {
    transform: rotate(180deg);
  }
`

export default GlobalStyle
