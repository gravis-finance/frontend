import React from 'react'
import styled from 'styled-components'
import { Flex, privacyAndPoliceLink, termsOfUseLink } from '@gravis.finance/uikit'
import { DiscordIcon, GithubIcon } from '@gravis.finance/uikit/dist/cjs/components/SocialNetworks/social-icons'
import DefaultText from '../../../../components/DefaultText'
import { MediumIcon, TelegramIcon, TwitterIcon } from '../../../../components/Svg'

const Container = styled(Flex)`
  height: 180px;

  background: rgba(255, 255, 255, 0.03);
`

const StyledWrapper = styled(Flex)`
  > *:not(:last-child) {
    margin-right: 10px;
  }
`

const LinkItem = styled.a`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 49px;
  padding: 22px 22px 18px 22px;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const FooterNetworks = () => {
  return (
    <StyledWrapper alignItems="center">
      <LinkItem href="https://github.com/gravis-finance" target="_blank" rel="noopener  noreferrer">
        <GithubIcon />
      </LinkItem>
      <LinkItem href="https://t.me/Gravis_Finance_En" target="_blank" rel="noopener  noreferrer">
        <TelegramIcon />
      </LinkItem>
      <LinkItem href="https://twitter.com/gravis_finance" target="_blank" rel="noopener  noreferrer">
        <TwitterIcon />
      </LinkItem>
      <LinkItem href="https://gravis-finance.medium.com/" target="_blank" rel="noopener  noreferrer">
        <MediumIcon />
      </LinkItem>
      <LinkItem
        href="https://discord.gg/GravisFinance"
        target="_blank"
        rel="noopener  noreferrer"
        style={{ padding: '22px 19.5px 19px 19.5px' }}
      >
        <DiscordIcon />
      </LinkItem>
    </StyledWrapper>
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
    <Container p="60px 80px" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <LinkedDefaultText
          color="rgba(255,255,255,0.7)"
          fontSize="14px"
          fontWeight={500}
          as="a"
          href={privacyAndPoliceLink}
          target="_blank"
          rel="noopener  noreferrer"
        >
          Privacy & Policy
        </LinkedDefaultText>
        <DefaultText color="rgba(255,255,255,0.1)" fontSize="14px" m="0 20px" fontWeight={500}>
          |
        </DefaultText>
        <LinkedDefaultText
          color="rgba(255,255,255,0.7)"
          fontSize="14px"
          fontWeight={500}
          as="a"
          href={termsOfUseLink}
          target="_blank"
          rel="noopener  noreferrer"
        >
          Terms of Use
        </LinkedDefaultText>
      </Flex>
      <FooterNetworks />
      <Flex>
        <DefaultText color="rgba(255,255,255,0.7)" fontSize="14px" fontWeight={500}>
          All rights reserved. © 2022 Gravis Finance
        </DefaultText>
      </Flex>
    </Container>
  )
}

export default Footer
