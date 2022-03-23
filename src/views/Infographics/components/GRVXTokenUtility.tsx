import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@gravis.finance/uikit'
import evervoid from '../../../assets/infographics/GRVXEvervoid.png'
import gswap from '../../../assets/infographics/GRVXGswap.png'
import grvxHeader from '../../../assets/infographics/GRVXHeader.png'

const StyledFlex = styled(Flex)`
  margin: -10px;
  justify-content: center;
  > img {
    margin: 10px;
  }
`

const Image = styled.img``

const GRVXTokenUtility = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Image src={grvxHeader} width="766.15px" height="102.83px" />
      </Flex>
      <Box mt="48px">
        <StyledFlex>
          <Image src={evervoid} width="772px" height="534px" />
          <Image src={gswap} width="428px" height="534px" />
        </StyledFlex>
      </Box>
    </>
  )
}

export default GRVXTokenUtility
