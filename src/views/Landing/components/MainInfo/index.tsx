import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Text } from '@gravis.finance/uikit'
import { GravisBoldLogo, PublicRoundIcon } from '../../../../components/Svg'

const Container = styled(Flex)`
  height: 100%;
  padding: 298px 0 54px 0;
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

const PublicRoundContainer = styled(Flex)`
  width: 432px;
  height: 65px;
  left: 504px;
  top: 782px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(45px);

  border-radius: 47px;
  padding: 32px 16px 32px 24px;
`

const MainInfo = () => {
  return (
    <Container justifyContent="space-between" alignItems="center" flexDirection="column">
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
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
      </Flex>
      <PublicRoundContainer alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <PublicRoundIcon />
          <Text fontSize="14px" ml="8px" style={{ letterSpacing: '0' }}>
            Public Round Whitelist Access
          </Text>
        </Flex>
        <Button variant="light" p="0 16px" style={{ height: '35px', fontSize: '12px', letterSpacing: '-0.02em' }}>
          Learn more
        </Button>
      </PublicRoundContainer>
    </Container>
  )
}

export default MainInfo
