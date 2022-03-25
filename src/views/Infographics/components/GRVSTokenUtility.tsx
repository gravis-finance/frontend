import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@gravis.finance/uikit'
import grvsTokenomics from 'assets/infographics/grvsTokenomics.png'
import grvsIno from 'assets/infographics/grvsIno.png'
import grvsEmission from 'assets/infographics/grvsEmission.png'
import evervoid from '../../../assets/infographics/Evervoid.png'
import gmart from '../../../assets/infographics/Gmart.png'
import gswap from '../../../assets/infographics/Gswap.png'
import dao from '../../../assets/infographics/Dao.png'
import staking from '../../../assets/infographics/Staking.png'
import grvsHeader from '../../../assets/infographics/GRVSHeader.png'

const StyledFlex = styled(Flex)`
  margin: -10px;
  justify-content: center;
  flex-wrap: wrap;
  > img {
    margin: 10px;
  }
`

const Image = styled.img`
  width: fit-content;
`

const GRVSTokenUtility = () => {
  return (
    <Box p="0 24px">
      <Flex justifyContent="center">
        <Image src={grvsHeader} style={{ maxWidth: '50%' }} />
      </Flex>
      <Box mt="48px">
        <StyledFlex>
          <Image src={evervoid} />
          <Image src={gmart} />
        </StyledFlex>
        <StyledFlex style={{ marginTop: '10px' }}>
          <Image src={gswap} />
          <Image src={dao} />
          <Image src={staking} />
        </StyledFlex>
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <Image src={grvsTokenomics} />
          <Image src={grvsIno} />
          <Image src={grvsEmission} />
        </Flex>
      </Box>
    </Box>
  )
}

export default GRVSTokenUtility
