import React from 'react'
import styled from 'styled-components'
import { Box } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import PartnersItem from '../PartnersItem'
import PartnersConfig from '../../../../config/constants/partners'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Container = styled.div`
  background-color: #090d11;
  padding-bottom: 2.4rem;

  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 9rem;
  }
`

const PartnersContainer = styled(Box).attrs(() => ({
  mt: { _: '1rem', md: '1.5rem' },
  gridTemplateColumns: {
    _: 'repeat(auto-fill, minmax(10.8rem, 1fr))',
    md: 'repeat(auto-fill, minmax(17.4rem, 1fr))',
  },
  gridGap: { _: '0.5rem', md: '1rem' },
}))`
  display: grid;
`

const StyledDefaultText = styled(DefaultText)`
  @media screen and (max-width: 852px) {
    text-align: center;
  }
`

const Partners = () => {
  return (
    <Container>
      <DefaultText fontWeight="700" fontSize={{ _: '3.2rem', md: '4.4rem' }} lineHeight="120%" textAlign="center">
        Partners
      </DefaultText>
      <StyledDefaultText
        textTransform="uppercase"
        fontWeight="600"
        fontSize="1.1rem"
        mt={13}
        mb={15}
        letterSpacing="0"
        ml="0.4rem"
      >
        Backed By
      </StyledDefaultText>
      <PartnersContainer flexWrap="wrap">
        {PartnersConfig.backed.map((image) => (
          <PartnersItem image={image} key={image} />
        ))}
      </PartnersContainer>
      <StyledDefaultText
        textTransform="uppercase"
        fontWeight="600"
        fontSize="1.1rem"
        mt={40}
        mb={15}
        letterSpacing="0"
        ml="0.4rem"
      >
        Supported By
      </StyledDefaultText>
      <PartnersContainer flexWrap="wrap">
        {PartnersConfig.supported.map((image) => (
          <PartnersItem image={image} key={image} />
        ))}
      </PartnersContainer>
      <StyledDefaultText
        textTransform="uppercase"
        fontWeight="600"
        fontSize="1.1rem"
        mt={40}
        mb={15}
        letterSpacing="0"
        ml="0.4rem"
      >
        Powered By
      </StyledDefaultText>
      <PartnersContainer flexWrap="wrap">
        {PartnersConfig.powered.map((image) => (
          <PartnersItem image={image} key={image} />
        ))}
      </PartnersContainer>
    </Container>
  )
}

export default Partners
