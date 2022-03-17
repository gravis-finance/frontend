import { Box, ModalContainer, ModalOverlay } from '@gravis.finance/uikit'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(1.1);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

const Overlay = styled(ModalOverlay)`
  background: rgba(0, 0, 0, 0.5);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`

export const Modal = styled(Box).attrs(() => ({
  Overlay,
  as: ModalContainer,
}))<React.ComponentProps<typeof ModalContainer>>`
  color: white;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(200px);
  animation: ${appear} 0.3s ease-out;
  clip-path: polygon(0 1rem, 1rem 0, 100% 0, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0 100%);
`
