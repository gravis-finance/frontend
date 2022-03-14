import React from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'

const Container = styled(Flex)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  width: 300px;
  height: 156px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const DefaultTokenomicItem = ({ icon, text }) => {
  const Icon = icon

  return (
    <Container m="5px">
      <Icon />
      <DefaultText fontSize="14px" textAlign="center" mt="18px" fontWeight={500}>
        {text.split('\n').map((str) => (
          <p>{str}</p>
        ))}
      </DefaultText>
    </Container>
  )
}

export default DefaultTokenomicItem
