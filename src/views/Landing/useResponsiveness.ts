import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useMediaQuery from '../../hooks/useMediaQuery'
import { breakpoints } from '../../contexts/ThemeContext'

export const useResponsiveness = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`)

  React.useLayoutEffect(() => {
    let tId = 0
    document.documentElement.style.fontSize = isMobile
      ? 'min(10px, min(calc(10 * 1vw * 100 / 375), calc(10 * var(--vh, 1vh) * 100 / 675)))'
      : 'min(calc(10 * 1vw * 100 / 1440), calc(10 * 1vh * 100 / 900))'

    const setVh = () => {
      tId = window.setTimeout(() => {
        if (isMobile) {
          document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`)
        }
        ScrollTrigger.refresh()
      }, 300)
    }

    setVh()
    window.addEventListener('resize', setVh)
    window.addEventListener('orientationchange', setVh)

    return () => {
      window.clearTimeout(tId)
      document.documentElement.style.fontSize = ''
      document.documentElement.style.removeProperty('--vh')
      window.removeEventListener('resize', setVh)
      window.removeEventListener('orientationchange', setVh)
    }
  }, [isMobile])

  return isMobile
}
