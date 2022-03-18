import React from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import { space, SpaceProps } from 'styled-system'
import { comingSoonPartners } from '../../../../config/constants/partners'
import DefaultText from '../../../../components/DefaultText'

const Container = styled(Flex)`
  width: 17.414rem;
  height: 11rem;
  left: 0px;
  top: 0px;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  margin: 0.5rem;

  @media screen and (max-width: 608px) {
    width: 12.5rem;
    height: 9rem;
  }

  //transition: transform 200ms ease-in-out;
  //
  //:hover {
  //  transform: scale(1.2);
  //}
`

const Image = styled.img<SpaceProps>`
  max-height: 6rem;
  max-width: 8rem;
  width: auto;
  object-fit: contain;
  ${space} //filter: grayscale(1);

  @media screen and (max-width: 608px) {
    max-height: 5rem;
    max-width: 7rem;
  }
`

type Props = {
  image: string
}

const PartnersItem: React.FC<Props> = ({ image }) => {
  return (
    <Container alignItems="center" justifyContent="center" flexDirection="column" position="relative">
      <Image src={image} alt="" mb={comingSoonPartners.includes(image) ? '1rem' : ''} />
      {comingSoonPartners.includes(image) ? (
        <DefaultText
          letterSpacing="0"
          color="rgba(255, 255, 255, 0.5)"
          textTransform="uppercase"
          fontSize="0.9rem"
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
