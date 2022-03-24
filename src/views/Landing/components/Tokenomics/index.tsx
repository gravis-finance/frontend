import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import TokensSwitcher from '../TokensSwitcher'
import TokenomicInfo from '../TokenomicInfo'
import { TokenomicsTokenType } from '../../../../config/constants/types'
import TokenomicNetworksSwitcher from '../TokenomicNetworksSwitcher'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 2.7rem;

  @media (min-width: ${breakpoints.md}) {
    padding-top: 4rem;
  }
`

const TokenomicsInfoContainer = styled(Flex)<{ activeIndex: number; containerHeight?: number }>`
  //height: 55.5rem;
  display: block;
  position: relative;

  > div:first-child {
    position: relative;
    left: ${({ activeIndex }) => (activeIndex ? 'calc(-100% - 8rem)' : 0)};
    transition: left 500ms ease-in-out;
  }

  > div:last-child {
    top: 0;
    position: absolute;
    right: ${({ activeIndex }) => (activeIndex ? 0 : 'calc(-100% - 8rem)')};
    transition: right 500ms ease-in-out;
  }

  @media screen and (max-width: 852px) {
    //height: ${({ activeIndex }) => (activeIndex ? '170.5rem' : '190.5rem')};
    //height: 100%;
    height: ${({ containerHeight }) => `${containerHeight}px` || '100%'};
  }
`

const StyledDefaultText = styled(DefaultText)`
  margin-right: 2.5rem;

  @media (max-width: ${breakpoints.md}) {
    margin-right: 0;
    margin-bottom: 1.6rem;
  }
`

const Tokenomics = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeNetworkIndex, setActiveNetworkIndex] = useState(0)

  const containerRef = useRef(null)
  const [containerHeight, setContainerHeight] = useState(null)

  useEffect(() => {
    setContainerHeight(containerRef?.current?.childNodes[activeIndex].offsetHeight)
  }, [activeIndex, containerRef])

  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" flexDirection="column" mb="4rem">
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          <StyledDefaultText fontWeight={700} fontSize={{ _: '3.2rem', md: '4.4rem' }}>
            Tokenomics
          </StyledDefaultText>
          <TokensSwitcher activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </Flex>
        <Flex mt="2rem">
          <TokenomicNetworksSwitcher activeIndex={activeNetworkIndex} setActiveIndex={setActiveNetworkIndex} />
        </Flex>
      </Flex>
      <TokenomicsInfoContainer activeIndex={activeIndex} ref={containerRef} containerHeight={containerHeight}>
        <TokenomicInfo network={activeNetworkIndex === 0 ? 'bsc' : 'polygon'} />
        <TokenomicInfo token={TokenomicsTokenType.GRVX} network={activeNetworkIndex === 0 ? 'bsc' : 'polygon'} />
      </TokenomicsInfoContainer>
    </Container>
  )
}

export default Tokenomics
