import React from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'

import metalImage from 'assets/resources/metal.png'
import fuelImage from 'assets/resources/fuel.jpg'
import sbpImage from 'assets/resources/container.jpg'
import matrixImage from 'assets/resources/matrix.jpg'

import DefaultText from '../../../../components/DefaultText'

const Container = styled(Flex)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  width: 61rem;
  height: 15.6rem;
  justify-content: center;
  align-items: center;
`

const ElementsContainer = styled(Flex)`
  //width: 211px;
  > img:nth-child(2) {
    position: relative;
    left: -1.2rem;
  }
  > img:nth-child(3) {
    position: relative;
    left: -2.5rem;
  }
  > img:nth-child(4) {
    position: relative;
    left: -3.8rem;
  }
`

const ElementImage = styled.img`
  width: 6.5rem;
  height: 6.5rem;
  border: 0.5rem solid #222529;
  border-radius: 6.6rem;
`

const Elements = [metalImage, fuelImage, sbpImage, matrixImage]

const GRVXTokenomicItem: React.FC = () => {
  return (
    <Container m="0.5rem">
      <ElementsContainer>
        {Elements.map((element) => (
          <ElementImage src={element} alt="" key={element} />
        ))}
      </ElementsContainer>
      <DefaultText fontSize="1.4rem" fontWeight={500} ml="-2rem">
        {'Stake GRVX token\nto get useful valuable resources '.split('\n').map((str, index) => (
          <p key={index}>{str}</p>
        ))}
      </DefaultText>
    </Container>
  )
}

export default GRVXTokenomicItem
