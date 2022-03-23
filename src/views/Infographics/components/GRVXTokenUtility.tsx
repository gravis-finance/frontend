import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@gravis.finance/uikit'
import evervoid from '../../../assets/infographics/GRVXEvervoid.png'
import gswap from '../../../assets/infographics/GRVXGswap.png'
import grvxHeader from '../../../assets/infographics/GRVXHeader.png'

const StyledFlex = styled(Flex)`
  margin: -10px;
  justify-content: center;
  flex-wrap: wrap;
  > img {
    margin: 10px;
  }
`

const Image = styled.img``

const GRVXTokenUtility = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Image src={grvxHeader} style={{ maxWidth: '600px' }} />
      </Flex>
      <Box mt="48px">
        <StyledFlex>
          <Image src={evervoid} />
          <Image src={gswap} />
        </StyledFlex>
      </Box>
    </>
  )
}

export default GRVXTokenUtility
