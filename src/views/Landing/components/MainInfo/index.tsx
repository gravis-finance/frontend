import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Box } from '@gravis.finance/uikit'
import { GravisBoldLogo } from '../../../../components/Svg'
import * as styles from '../../styles'
import { goTo } from '../MenuItems'
import { MouseIcon } from '../Icons'
import { FooterNetworks } from '../Footer'
import { breakpoints } from '../../../../contexts/ThemeContext'
import { Button } from '../Button'

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

const StyledMouseIcon = styled(MouseIcon)`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: block;
    margin-top: 5.6rem;
  }
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
        <Box fontSize={{ _: '4rem', md: '5.6rem' }} fontWeight="bold" mt="2.5rem" textAlign="center">
          Gamified DeFi Ecosystem
        </Box>
        <Description mt="1.3rem" maxWidth="59.1rem">
          Gravis Finance is an ecosystem that unites DeFi platform, NFT marketplace for in-game assets, and Evervoid
          game. We provide all the necessary instruments for managing your crypto assets on any chain.
        </Description>
        <Box mt="3.2rem">
          <FooterNetworks mainScreen />
        </Box>
        <Box
          display={{ _: 'grid', md: 'flex' }}
          mt="4.4rem"
          gridTemplateColumns="1fr 1fr"
          width={{ _: '33.5rem', md: 'initial' }}
          gridGap="1.6rem"
        >
          <Button
            width={{ _: '100%', md: 'max-content' }}
            variant="blue"
            style={{ letterSpacing: '-0.02em', fontSize: '1.4rem', height: '4.8rem', padding: '0 2.4rem' }}
            onClick={() => goTo('#whyus')}
          >
            Show Apps
          </Button>
          <Button
            variant="dark"
            width={{ _: '100%', md: 'max-content' }}
            style={{ letterSpacing: '-0.02em', fontSize: '1.4rem', height: '4.8rem', padding: '0 2.4rem' }}
            as="a"
            href={process.env.REACT_APP_PITCH_DECK_URL}
            target="_blank"
          >
            Read Pitch Deck
          </Button>
        </Box>
      </Flex>
      <StyledMouseIcon mb="3rem" />
    </Flex>
  )
}

export default MainInfo
