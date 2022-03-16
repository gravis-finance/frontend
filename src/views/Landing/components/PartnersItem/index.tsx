import React from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import { space, SpaceProps } from 'styled-system'
import { comingSoonPartners } from '../../../../config/constants/partners'
import DefaultText from '../../../../components/DefaultText'

const Container = styled(Flex)`
  width: 174.14px;
  height: 110px;
  left: 0px;
  top: 0px;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin: 5px;

  //transition: transform 200ms ease-in-out;
  //
  //:hover {
  //  transform: scale(1.2);
  //}
`

const Image = styled.img<SpaceProps>`
  max-height: 60px;
  max-width: 80px;
  width: auto;
  object-fit: contain;
  ${space}//filter: grayscale(1);
`

type Props = {
  image: string
}

const PartnersItem: React.FC<Props> = ({ image }) => {
  return (
    <Container alignItems="center" justifyContent="center" flexDirection="column" position="relative">
      <Image src={image} alt="" mb={comingSoonPartners.includes(image) ? '10px' : ''} />
      {comingSoonPartners.includes(image) ? (
        <DefaultText
          letterSpacing="0"
          color="rgba(255, 255, 255, 0.5)"
          textTransform="uppercase"
          fontSize="9px"
          position="absolute"
          bottom="12px"
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
