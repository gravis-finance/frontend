import React from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import { GRVSFilledLogo } from '../Svg'

const Container = styled(Flex)`
  background: linear-gradient(180deg, #009ce1 0%, #1c77ff 100%), #c4c4c4;
  border-radius: 100%;

  > svg {
    > circle:first-child {
      display: none;
    }
  }
`

const GRVSFilledLogoWithBackground: React.FC<{ props?: any }> = ({ props }) => {
  return (
    <Container justifyContent="center">
      <GRVSFilledLogo {...props} />
    </Container>
  )
}

export default GRVSFilledLogoWithBackground
