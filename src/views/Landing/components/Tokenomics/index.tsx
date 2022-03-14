import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import TokensSwitcher from '../TokensSwitcher'
import TokenomicInfo from '../TokenomicInfo'

const Container = styled.div`
  margin: 70px 80px;
`

const Tokenomics = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <Container>
      <Flex justifyContent="center" alignItems="center" mb={80}>
        <DefaultText fontWeight={700} fontSize="44px" mr={25}>
          Tokenomics
        </DefaultText>
        <TokensSwitcher activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </Flex>
      <TokenomicInfo />
    </Container>
  )
}

export default Tokenomics
