import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Text } from '@gravis.finance/uikit'
import { GravisBoldLogo, PublicRoundIcon } from '../../../../components/Svg'

const Container = styled(Flex)`
  height: 100%;
  padding: 22.9rem 0 5.4rem 0;
`

const MainText = styled(Text)`
  font-family: 'Gotham Pro', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3.1016rem;
  line-height: 3.4rem;
  letter-spacing: -0.02em;
`

const Description = styled(Text)`
  text-align: center;
  font-weight: 500;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 145%;
  letter-spacing: 0;
`

const ButtonsContainer = styled(Flex)``

const PublicRoundContainer = styled(Flex)`
  width: 43.2rem;
  height: 6.5rem;
  left: 50.4rem;
  top: 78.2rem;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(45px);

  border-radius: 4.7rem;
  padding: 3.2rem 1.6rem 3.2rem 2.4rem;
`

const MainInfo = () => {
  return (
    <Container justifyContent="space-between" alignItems="center" flexDirection="column">
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Flex alignItems="center">
          <GravisBoldLogo />
          <MainText ml="0.8rem">Gravis Finance</MainText>
        </Flex>
        <Text fontSize="5.6rem" bold mt="1.2rem" style={{ letterSpacing: '-0.02em' }}>
          Gamified DeFi Ecosystem
        </Text>
        <Description>
          {'Gravis Finance is an ecosystem that unites DeFi platform, NFT marketplace\n for in-game assets, and Evervoid game. We provide all the necessary\n instruments for managing your crypto assets on any chain.'
            .split('\n')
            .map((str) => (
              <p key={str}>{str}</p>
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
      </Flex>
      <PublicRoundContainer alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <PublicRoundIcon />
          <Text fontSize="1.4rem" ml="0.8rem" style={{ letterSpacing: '0' }}>
            Public Round Whitelist Access
          </Text>
        </Flex>
        <Button variant="light" p="0 1.6rem" style={{ height: '3.5rem', fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
          Learn more
        </Button>
      </PublicRoundContainer>
    </Container>
  )
}

export default MainInfo
