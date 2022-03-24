import React from 'react'
import styled from 'styled-components'
import { Box } from '@gravis.finance/uikit'
import { comingSoonPartners } from '../../../../config/constants/partners'
import DefaultText from '../../../../components/DefaultText'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Container = styled(Box)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(50px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.4rem;
  position: relative;
  padding: 2rem;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: ${breakpoints.sm}) {
    height: 11rem;
    padding: 3rem;
  }
`

type Props = {
  image: string
}

const PartnersItem: React.FC<Props> = ({ image }) => {
  return (
    <Container>
      <Box as="img" src={image} alt="" mb={comingSoonPartners.includes(image) ? '1rem' : ''} />
      {comingSoonPartners.includes(image) ? (
        <DefaultText
          letterSpacing="0"
          color="rgba(255, 255, 255, 0.5)"
          textTransform="uppercase"
          fontSize={{ _: '0.8rem', sm: '0.9rem' }}
          position="absolute"
          bottom="1.2rem"
        >
          Coming soon
        </DefaultText>
      ) : (
        ''
      )}
    </Container>
  )
}

export default PartnersItem
