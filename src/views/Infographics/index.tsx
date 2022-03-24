import React, { useEffect } from 'react'
import { Box, Flex } from '@gravis.finance/uikit'
import styled from 'styled-components'
import t02 from 'assets/infographics/t02.png'
import ecosystem from 'assets/infographics/ecosystem.png'
import Page from '../../components/layout/Page'
import GRVSTokenUtility from './components/GRVSTokenUtility'
import GRVXTokenUtility from './components/GRVXTokenUtility'
import EvervoidGameAssetCycle from './components/EvervoidGameAssetCycle'
import { PlayText } from '../../components/PlayText'
import Roadmap from '../Landing/components/Roadmap'
import useMediaQuery from '../../hooks/useMediaQuery'
import { breakpoints } from '../../contexts/ThemeContext'

const Image = styled.img`
  width: fit-content;
  max-width: 40%;
`

const Container = styled(Box).attrs((props) => ({
  position: 'relative',
  ...props,
}))`
  width: 100%;
  color: white;
  background-color: #1c1c1c;

  > div {
    padding: 0;
    > div:last-child {
      > div {
        > div {
          background: #282828;
        }
      }
    }
  }
`

const Infographics = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`)
  useEffect(() => {
    if (isMobile)
      document.documentElement.style.fontSize = 'min(calc(10 * 1vw * 100 / 375), calc(10 * var(--vh, 1vh) * 100 / 675))'
    else document.documentElement.style.fontSize = 'min(0.694444vw, 1.11111vh)'
  }, [isMobile])
  return (
    <Page style={{ overflowX: 'hidden' }}>
      <Box>
        <PlayText fontSize="64px" mb="48px">
          Gravis Finance Infographics
        </PlayText>
        <PlayText fontSize="48px" mb="24px">
          Ecosystem
        </PlayText>
        <Flex justifyContent="center" mb="64px">
          <Image src={ecosystem} style={{ maxWidth: '80%' }} />
        </Flex>
        <GRVSTokenUtility />
        <Box mt="64px">
          <GRVXTokenUtility />
        </Box>
        <Container mt="64px">
          <Roadmap />
        </Container>
        <PlayText fontSize="48px" mt="64px" mb="16px">
          Evervoid
        </PlayText>
        <EvervoidGameAssetCycle />
        <PlayText fontSize="36px" mb="16px" mt="32px">
          T02 NFT Crafting
        </PlayText>
        <Flex justifyContent="center">
          <Image src={t02} />
        </Flex>
      </Box>
    </Page>
  )
}

export default Infographics
