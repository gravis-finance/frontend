import { ButtonBase } from '@gravis.finance/uikit'
import styled from 'styled-components'
import { variant } from 'styled-system'

export const Button = styled(ButtonBase).attrs((props) => ({
  p: '1.45rem 2.5rem',
  ...props,
}))<{
  variant?: 'dark' | 'blue'
  p?: any
}>`
  background-color: white;
  font-weight: 600;
  color: black;
  border-radius: 4.6rem;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  line-height: 150%;
  transition: background 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s, border 0.2s ease-in-out 0s;

  &:hover {
    color: #282828;
  }

  &:disabled {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.7;
  }

  ${variant({
    prop: 'variant',
    variants: {
      blue: {
        background: 'rgb(23, 172, 255)',
        color: 'white',
        '&:hover': {
          background: 'rgb(11, 134, 208)',
          color: 'white',
        },
      },
      dark: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(15px)',
        color: 'white',
        '&:hover': {
          color: 'white',
        },
      },
    },
  })};
`
