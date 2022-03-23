import React from 'react'
import { Box, Flex } from '@gravis.finance/uikit'
import styled from 'styled-components'
import t02 from 'assets/infographics/t02.png'
import Page from '../../components/layout/Page'
import GRVSTokenUtility from './components/GRVSTokenUtility'
import GRVXTokenUtility from './components/GRVXTokenUtility'
import EvervoidGameAssetCycle from './components/EvervoidGameAssetCycle'
import { PlayText } from '../../components/PlayText'
// import * as styles from '../Landing/styles'

const Image = styled.img`
  width: fit-content;
  max-width: 600px;
`

// const Container = styled(Box).attrs((props) => ({
//   position: 'relative',
//   pt: styles.headerHeight,
//   height: { md: styles.vh100 } as any,
//   ...props,
// }))`
//   width: 100%;
//   color: white;
//   background-color: #1c1c1c;
// `

const Infographics = () => {
  return (
    <Page>
      <Box>
        <PlayText fontSize="64px" mb="48px">
          Gravis Finance Infographics
        </PlayText>
        <PlayText fontSize="48px" mb="24px">
          Ecosystem
        </PlayText>
        <GRVSTokenUtility />
        <Box mt="64px">
          <GRVXTokenUtility />
        </Box>
        {/* <Container mt="64px">
          <Roadmap />
        </Container> */}
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
