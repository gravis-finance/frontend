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

  .object-cover {
    object-fit: cover;
  }
  
  @media (min-width: ${breakpoints.md}) {
    .md\\:sticky-content {
      position: sticky !important;
      top: 0;
      will-change: transform;
    }
  }
  
  @media (min-width: ${breakpoints.sm}) {
    .sm\\:sticky-content {
      position: sticky !important;
      top: 0;
      will-change: transform;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    .no-scroll-bar {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer 10+ */

      &::-webkit-scrollbar {
        display: none;
      }
    }
    
    .background-fixed {
      background-attachment: fixed;
    }
  }
  
  .will-change {
    will-change: transform;
  }
  
  .rotate-180 {
    transform: rotate(180deg);
  }
  
  .absolute-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyle
