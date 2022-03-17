import { Box } from '@gravis.finance/uikit'
import React from 'react'
import styled from 'styled-components'

import { MenuItemBase, MenuItems } from '../MenuItems'
import * as styles from '../../styles'

type Props = {
  open?: boolean
  onClose?: () => void
}

const MenuItem = styled(MenuItemBase)<{ onClose?: any }>`
  font-size: 2rem;
  font-weight: ${(props) => (props.active ? 600 : 500)};
  color: white;

  &[data-active='true'] {
    color: rgba(27, 205, 130, 1);
  }
`

export const MobileMenu = styled(({ open, onClose, ...props }: Props) => {
  React.useLayoutEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <Box {...props}>
      <Box {...styles.content}>
        <MenuItems ItemComponent={MenuItem} onClick={onClose} mt="2.5rem" />
      </Box>
    </Box>
  )
})`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #16181a;
  transform: translateX(${(props) => (props.open ? '0' : '-100%')});
  padding-top: 5.5rem;
  z-index: 2;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-out;
`
