import React from 'react'
import styled from 'styled-components'
import { Flex, privacyAndPoliceLink, termsOfUseLink, Box } from '@gravis.finance/uikit'
import { DiscordIcon, GithubIcon } from '@gravis.finance/uikit/dist/cjs/components/SocialNetworks/social-icons'
import DefaultText from '../../../../components/DefaultText'
import { MediumIcon, TelegramIcon, TwitterIcon } from '../../../../components/Svg'
import * as styles from '../../styles'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Container = styled(Box)`
  background: #111518;
`

const LinkItem = styled.a`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 49px;
  transition: background-color 200ms ease-in-out;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: ${breakpoints.md}) {
    width: 6rem;
    height: 6rem;
  }
`

export const FooterNetworks = (props: any) => {
  return (
    <Box alignItems="center" gridGap="1rem" display="flex" {...props}>
      <LinkItem href="https://github.com/gravis-finance" target="_blank" rel="noopener  noreferrer">
        <GithubIcon />
      </LinkItem>
      <LinkItem href="https://t.me/Gravis_Finance_En" target="_blank" rel="noopener  noreferrer">
        <TelegramIcon />
      </LinkItem>
      <LinkItem href="https://twitter.com/gammarosigma" target="_blank" rel="noopener  noreferrer">
        <TwitterIcon />
      </LinkItem>
      <LinkItem href="https://gravis-finance.medium.com/" target="_blank" rel="noopener  noreferrer">
        <MediumIcon />
      </LinkItem>
      <LinkItem href="https://discord.gg/GravisFinance" target="_blank" rel="noopener  noreferrer">
        <DiscordIcon />
      </LinkItem>
    </Box>
  )
}

const LinkedDefaultText = styled(DefaultText)`
  transition: color 200ms ease-in-out;
  :hover {
    color: rgba(255, 255, 255, 0.9);
  }
`

const Footer: React.FC = () => {
  return (
    <Container pb={{ _: '2rem', md: 0 }} height={{ _: '21rem', md: '18rem' }}>
      <Flex {...styles.content}>
        <Flex
          alignItems="center"
          justifyContent={{ _: 'center', md: 'space-between' }}
          gridGap={{ _: '3rem', md: 0 }}
          width="100%"
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <FooterNetworks display={{ _: 'flex', md: 'none' }} />
          <Flex alignItems="center">
            <LinkedDefaultText
              color="rgba(255,255,255,0.7)"
              fontSize="1.4rem"
              fontWeight={500}
              as="a"
              href={privacyAndPoliceLink}
              target="_blank"
              rel="noopener  noreferrer"
            >
              Privacy & Policy
            </LinkedDefaultText>
            <DefaultText color="rgba(255,255,255,0.1)" fontSize="1.4rem" m="0 2rem" fontWeight={500}>
              |
            </DefaultText>
            <LinkedDefaultText
              color="rgba(255,255,255,0.7)"
              fontSize="1.4rem"
              fontWeight={500}
              as="a"
              href={termsOfUseLink}
              target="_blank"
              rel="noopener  noreferrer"
            >
              Terms of Use
            </LinkedDefaultText>
          </Flex>
          <FooterNetworks display={{ _: 'none', md: 'flex' }} />
          <Flex>
            <DefaultText color="rgba(255,255,255,0.7)" fontSize="1.4rem" fontWeight={500}>
              All rights reserved. © 2022 Gravis Finance
            </DefaultText>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Footer
