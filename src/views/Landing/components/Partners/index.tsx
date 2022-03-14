import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import PartnersItem from '../PartnersItem'
import PartnersConfig from '../../../../config/constants/partners'

const Container = styled.div`
  margin: 57px 80px;
`

const PartnersContainer = styled(Flex)`
  margin: -5px;
`

const Partners = () => {
  return (
    <Container>
      <DefaultText fontWeight="700" fontSize="44px" lineHeight="120%" textAlign="center">
        Partners
      </DefaultText>
      <DefaultText
        textTransform="uppercase"
        fontWeight="600"
        fontSize="11px"
        mt={13}
        mb={15}
        letterSpacing="0"
        ml="4px"
      >
        Backed By
      </DefaultText>
      <PartnersContainer flexWrap="wrap">
        {PartnersConfig.backed.map((image) => (
          <PartnersItem image={image} />
        ))}
      </PartnersContainer>
      <DefaultText
        textTransform="uppercase"
        fontWeight="600"
        fontSize="11px"
        mt={40}
        mb={15}
        letterSpacing="0"
        ml="4px"
      >
        Supported By
      </DefaultText>
      <PartnersContainer flexWrap="wrap">
        {PartnersConfig.supported.map((image) => (
          <PartnersItem image={image} />
        ))}
      </PartnersContainer>
      <DefaultText
        textTransform="uppercase"
        fontWeight="600"
        fontSize="11px"
        mt={40}
        mb={15}
        letterSpacing="0"
        ml="4px"
      >
        Powered By
      </DefaultText>
      <PartnersContainer flexWrap="wrap">
        {PartnersConfig.powered.map((image) => (
          <PartnersItem image={image} />
        ))}
      </PartnersContainer>
    </Container>
  )
}

export default Partners
