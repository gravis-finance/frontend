import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@gravis.finance/uikit'

const GrvxText = styled(Text)`
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;
`

const TokenInfo = ({ logo, title, text }) => {
  return (
    <Flex alignItems="center">
      {logo}
      <Flex flexDirection="column" ml="8px">
        <GrvxText color="rgba(255, 255, 255, 0.6)">{title}</GrvxText>
        {text}
      </Flex>
    </Flex>
  )
}

export default TokenInfo
