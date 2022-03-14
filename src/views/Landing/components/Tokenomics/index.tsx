import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import TokensSwitcher from '../TokensSwitcher'
import TokenomicInfo from '../TokenomicInfo'
import { TokenomicsTokenType } from '../../../../config/constants/types'

const Container = styled.div`
  margin: 70px 80px;
  position: relative;
`

const TokenomicsInfoContainer = styled(Flex)<{ activeIndex: number }>`
  > div:first-child {
    position: absolute;
    left: ${({ activeIndex }) => (activeIndex ? 'calc(-100% - 80px)' : 0)};
    transition: left 500ms ease-in-out;
  }

  > div:last-child {
    position: absolute;
    right: ${({ activeIndex }) => (activeIndex ? 0 : 'calc(-100% - 80px)')};
    transition: right 500ms ease-in-out;
  }
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
      <TokenomicsInfoContainer activeIndex={activeIndex}>
        <TokenomicInfo />
        <TokenomicInfo token={TokenomicsTokenType.GRVX} />
      </TokenomicsInfoContainer>
    </Container>
  )
}

export default Tokenomics
