import React from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'

const Container = styled(Flex)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  width: 30rem;
  height: 15.6rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const DefaultTokenomicItem = ({ icon, text }) => {
  const Icon = icon

  return (
    <Container m="0.5rem">
      <Icon />
      <DefaultText fontSize="1.4rem" textAlign="center" mt="1.8rem" fontWeight={500}>
        {text.split('\n').map((str, index) => (
          <p key={index}>{str}</p>
        ))}
      </DefaultText>
    </Container>
  )
}

export default DefaultTokenomicItem
