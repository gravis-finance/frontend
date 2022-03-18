import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Text, Box } from '@gravis.finance/uikit'
import { GravisBoldLogo, PublicRoundIcon } from '../../../../components/Svg'
import * as styles from '../../styles'
import { goTo } from '../MenuItems'
import { MouseIcon } from '../Icons'

const MainText = styled(Text)`
  font-family: 'Gotham Pro', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3.1016rem;
  line-height: 3.4rem;
  letter-spacing: -0.02em;
`

const Description = styled(Box).attrs(() => ({
  fontSize: { _: '1.4rem', md: '1.6rem' },
}))`
  text-align: center;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  line-height: 145%;
  letter-spacing: 0;
`

const ButtonsContainer = styled(Flex)``

const PublicRoundContainer = styled(Flex)`
  max-width: 100%;
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
    <Flex
      {...styles.content}
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      p={{ _: '2.5rem 0', md: '22.9rem 0 5.4rem 0' }}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        flex={{ _: 1, md: 'initial' }}
        mb="-3rem"
      >
        <Box alignItems="center" display={{ _: 'none', md: 'flex' }}>
          <GravisBoldLogo />
          <MainText ml="0.8rem">Gravis Finance</MainText>
        </Box>
        <Box fontSize={{ _: '3.2rem', md: '5.6rem' }} fontWeight="bold" mt="2.5rem" textAlign="center">
          Gamified DeFi Ecosystem
        </Box>
        <Description mt="1.3rem" maxWidth="59.1rem">
          Gravis Finance is an ecosystem that unites DeFi platform, NFT marketplace for in-game assets, and Evervoid
          game. We provide all the necessary instruments for managing your crypto assets on any chain.
        </Description>
        <ButtonsContainer mt={44}>
          <Button variant="blue" style={{ letterSpacing: '-0.02em' }} onClick={() => goTo('#products')}>
            Show Apps
          </Button>
          <Button
            variant="darkened"
            ml={16}
            style={{ letterSpacing: '-0.02em' }}
            as="a"
            href={process.env.REACT_APP_PITCH_DECK_URL}
            target="_blank"
          >
            Read Pitch Deck
          </Button>
        </ButtonsContainer>
      </Flex>
      <MouseIcon zIndex={2} mb="3rem" />
      <PublicRoundContainer alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <PublicRoundIcon />
          <Text fontSize="1.4rem" ml={{ _: '1rem', md: '0.8rem' }} style={{ letterSpacing: '0' }}>
            Public Round Whitelist Access
          </Text>
        </Flex>
        <Button
          variant="light"
          p="0 1.6rem"
          style={{ height: '3.5rem', fontSize: '1.2rem', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
          as="a"
          href="https://public.gravis.finance"
          target="_blank"
        >
          Join IDO
        </Button>
      </PublicRoundContainer>
    </Flex>
  )
}

export default MainInfo
