import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Text } from '@gravis.finance/uikit'
import { GravisBoldLogo } from '../../../../components/Svg'

const Container = styled(Flex)`
  padding-top: 70px;
  height: 100%;
`

const MainText = styled(Text)`
  font-family: 'Gotham Pro', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 31.016px;
  line-height: 34px;
  letter-spacing: -0.02em;
`

const Description = styled(Text)`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 145%;
  letter-spacing: 0;
`

const ButtonsContainer = styled(Flex)``

const MainInfo = () => {
  return (
    <Container justifyContent="center" alignItems="center" flexDirection="column">
      <Flex alignItems="center">
        <GravisBoldLogo />
        <MainText ml="8px">Gravis Finance</MainText>
      </Flex>
      <Text fontSize="56px" bold mt="12px" style={{ letterSpacing: '-0.02em' }}>
        Gamified DeFi Ecosystem
      </Text>
      <Description>
        {'Gravis Finance is an ecosystem that unites DeFi platform, NFT marketplace\n for in-game assets, and Evervoid game. We provide all the necessary\n instruments for managing your crypto assets on any chain.'
          .split('\n')
          .map((str) => (
            <p>{str}</p>
          ))}
      </Description>
      <ButtonsContainer mt={44}>
        <Button variant="blue" style={{ letterSpacing: '-0.02em' }}>
          Show Apps
        </Button>
        <Button variant="darkened" ml={16} style={{ letterSpacing: '-0.02em' }}>
          Read Pitch Deck
        </Button>
      </ButtonsContainer>
    </Container>
  )
}

export default MainInfo
