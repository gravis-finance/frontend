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
  border-radius: 20px;
  width: 610px;
  height: 156px;
  justify-content: center;
  align-items: center;
`

const ElementsContainer = styled(Flex)`
  //width: 211px;
  > img:nth-child(2) {
    position: relative;
    left: -12px;
  }
  > img:nth-child(3) {
    position: relative;
    left: -25px;
  }
  > img:nth-child(4) {
    position: relative;
    left: -38px;
  }
`

const ElementImage = styled.img`
  width: 65px;
  height: 65px;
  border: 5px solid #222529;
  border-radius: 66px;
`

const Elements = [metalImage, fuelImage, sbpImage, matrixImage]

const GRVXTokenomicItem: React.FC = () => {
  return (
    <Container m="5px">
      <ElementsContainer>
        {Elements.map((element) => (
          <ElementImage src={element} alt="" />
        ))}
      </ElementsContainer>
      <DefaultText fontSize="14px" fontWeight={500} ml="-20px">
        {'Stake GRVX token\nto get useful valuable resources '.split('\n').map((str) => (
          <p>{str}</p>
        ))}
      </DefaultText>
    </Container>
  )
}

export default GRVXTokenomicItem
