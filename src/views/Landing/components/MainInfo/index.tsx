import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Box } from '@gravis.finance/uikit'
import { BookmarkIcon, GravisBoldLogo } from '../../../../components/Svg'
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

const PublicRoundContainer = styled(Flex)`
  max-width: 100%;
  height: 6.5rem;
  left: 50.4rem;
  top: 78.2rem;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(45px);

  border-radius: 4.7rem;
  padding: 3.2rem 1.6rem 3.2rem 2.4rem;
`

const LinksFlex = styled(Flex)`
  > div:first-child {
    margin-right: 24px;
  }
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
    > div:first-child {
      margin-right: 0;
      margin-bottom: 16px;
    }
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
      <LinksFlex>
        <PublicRoundContainer
          alignItems="center"
          justifyContent="space-between"
          width={{ _: '33.5rem', md: '43.2rem' }}
        >
          <Flex alignItems="center">
            <BookmarkIcon style={{ minWidth: '2rem' }} />
            <Text
              fontSize="1.4rem"
              ml={{ _: '1rem', md: '0.8rem' }}
              mr={{ _: '4rem', md: 0 }}
              style={{ letterSpacing: '0' }}
            >
              Interview with CEO of Gravis Finance
            </Text>
          </Flex>
          <Button
            p="0 1.6rem"
            style={{ height: '3.5rem', fontSize: '1.2rem', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
            as="a"
            href="https://bitcourier.co.uk/news/gravis-finance-interview"
            target="_blank"
          >
            Read
          </Button>
        </PublicRoundContainer>
      </LinksFlex>
    </Flex>
  )
}

export default MainInfo
