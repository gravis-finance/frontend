import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@gravis.finance/uikit'
import evervoid from '../../../assets/infographics/Evervoid.png'
import gmart from '../../../assets/infographics/Gmart.png'
import gswap from '../../../assets/infographics/Gswap.png'
import dao from '../../../assets/infographics/Dao.png'
import staking from '../../../assets/infographics/Staking.png'
import grvsHeader from '../../../assets/infographics/GRVSHeader.png'

const StyledFlex = styled(Flex)`
  margin: -10px;
  justify-content: center;
  > img {
    margin: 10px;
  }
`

const Image = styled.img``

const GRVSTokenUtility = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Image src={grvsHeader} width="761.79px" height="103.47px" />
      </Flex>
      <Box mt="48px">
        <StyledFlex>
          <Image src={evervoid} width="816px" height="640px" />
          <Image src={gmart} width="383px" height="640px" />
        </StyledFlex>
        <StyledFlex style={{ marginTop: '10px' }}>
          <Image src={gswap} width="412px" height="558px" />
          <Image src={dao} width="384px" height="558px" />
          <Image src={staking} width="384px" height="558px" />
        </StyledFlex>
      </Box>
    </>
  )
}

export default GRVSTokenUtility
