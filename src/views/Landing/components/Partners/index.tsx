import React from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import PartnersItem from '../PartnersItem'
import PartnersConfig from '../../../../config/constants/partners'

const Container = styled.div`
  margin: 5.7rem 7.5rem 9rem 8rem;
`

const PartnersContainer = styled(Flex)`
  margin: -0.5rem;
`

const Partners = () => {
  return (
    <Container>
      <DefaultText fontWeight="700" fontSize="4.4rem" lineHeight="120%" textAlign="center">
        Partners
      </DefaultText>
      <DefaultText
        textTransform="uppercase"
        fontWeight="600"
        fontSize="1.1rem"
        mt={13}
        mb={15}
        letterSpacing="0"
        ml="0.4rem"
      >
        Backed By
      </DefaultText>
      <PartnersContainer flexWrap="wrap">
        {PartnersConfig.backed.map((image) => (
          <PartnersItem image={image} key={image} />
        ))}
      </PartnersContainer>
      <DefaultText
        textTransform="uppercase"
        fontWeight="600"
        fontSize="1.1rem"
        mt={40}
        mb={15}
        letterSpacing="0"
        ml="0.4rem"
      >
        Supported By
      </DefaultText>
      <PartnersContainer flexWrap="wrap">
        {PartnersConfig.supported.map((image) => (
          <PartnersItem image={image} key={image} />
        ))}
      </PartnersContainer>
      <DefaultText
        textTransform="uppercase"
        fontWeight="600"
        fontSize="1.1rem"
        mt={40}
        mb={15}
        letterSpacing="0"
        ml="0.4rem"
      >
        Powered By
      </DefaultText>
      <PartnersContainer flexWrap="wrap">
        {PartnersConfig.powered.map((image) => (
          <PartnersItem image={image} key={image} />
        ))}
      </PartnersContainer>
    </Container>
  )
}

export default Partners
