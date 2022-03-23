import React from 'react'
import { Box, Flex, Text } from '@gravis.finance/uikit'
import styled from 'styled-components'
import grvsHeader from 'assets/infographics/GRVSHeader.png'
import Page from '../../components/layout/Page'
import GRVSTokenUtility from './components/GRVSTokenUtility'
import GRVXTokenUtility from './components/GRVXTokenUtility'
import EvervoidGameAssetCycle from './components/EvervoidGameAssetCycle'

const Image = styled.img``

const Infographics = () => {
  return (
    <Page>
      <Box>
        <Text>Gravis Infographics</Text>
        <Text>Gravis finance Ecosystem</Text>
        <GRVSTokenUtility />
        <Box mt="128px">
          <GRVXTokenUtility />
        </Box>
        <Text>Gravis finance Evervoid</Text>
        <EvervoidGameAssetCycle />
      </Box>
    </Page>
  )
}

export default Infographics
