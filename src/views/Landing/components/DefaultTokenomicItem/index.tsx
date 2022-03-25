import React from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'

const Container = styled(Flex)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  justify-content: center;
  flex-direction: column;
`

const DefaultTokenomicItem = ({ icon, text }) => {
  const Icon = icon

  return (
    <Container
      m="0.5rem"
      width={{ _: '28rem', md: '30rem' }}
      height={{ _: '13.6rem', md: '15.6rem' }}
      px={{ _: '2.5rem', md: 'initial' }}
      alignItems={{ _: 'flex-start', md: 'center' }}
    >
      <Icon />
      <DefaultText fontSize="1.4rem" textAlign={{ md: 'center' }} mt="1.8rem" fontWeight={500} lineHeight="150%">
        {text.split('\n').map((str, index) => (
          <p key={index}>{str}</p>
        ))}
      </DefaultText>
    </Container>
  )
}

export default DefaultTokenomicItem
