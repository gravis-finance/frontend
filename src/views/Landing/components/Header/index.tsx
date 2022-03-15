import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@gravis.finance/uikit'
import { useLocation } from 'react-router-dom'
import GravisLogo from '../../../../components/Svg/Icons/GravisLogo'
import TokenInfo from '../../../../components/TokenInfo'
import { GRVSFilledLogo, GRVXFilledLogo } from '../../../../components/Svg'
import Apps from '../Apps'

const Container = styled(Flex)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(500px);
  width: 100%;
  height: 70px;
  padding: 18px 80px;
  position: fixed;
`

const StyledGravisLogo = styled(GravisLogo)`
  width: 108px;
`

const AnchorFlex = styled(Flex)`
  > a:not(:last-child) {
    margin-right: 25.5px;
  }
`

const AnchorText = styled(Text)<{ isActive?: boolean }>`
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -0.02em;
  transition: color 100ms ease-in-out;
  color: ${({ isActive }) => (isActive ? 'white' : 'rgba(255, 255, 255, 0.5)')};

  :hover {
    color: white;
  }
`

const TokensContainer = styled(Flex)`
  > div:not(:last-child) {
    margin-right: 22px;
  }
`

const TokenText = styled(AnchorText)`
  font-size: 12px;
  line-height: 15px;
`

const links = [
  {
    text: 'Why Us',
    href: '#whyus',
  },
  {
    text: 'Products',
    href: '#products',
  },
  {
    text: 'Mobile Wallet',
    href: '#mobilewallet',
  },
  {
    text: 'Roadmap',
    href: '#roadmap',
  },
  {
    text: 'Team',
    href: '#team',
  },
  {
    text: 'Tokenomics',
    href: '#tokenomics',
  },
  {
    text: 'Partners',
    href: '#partners',
  },
]

const Header = () => {
  const location = useLocation()
  return (
    <Container alignItems="center">
      <StyledGravisLogo />
      <Flex justifyContent="space-between" alignItems="center" width="calc(100% - 108px)">
        <AnchorFlex p="0 52px">
          {links.map((link) => (
            <AnchorText as="a" href={link.href} isActive={location.hash === link.href}>
              {link.text}
            </AnchorText>
          ))}
        </AnchorFlex>
        <Flex>
          <TokensContainer mr={51}>
            <TokenInfo logo={<GRVXFilledLogo />} title="GRVX" text={<TokenText>$0.00006</TokenText>} />
            <TokenInfo logo={<GRVSFilledLogo />} title="GRVS" text={<TokenText>Join Sale</TokenText>} />
          </TokensContainer>
          <Apps />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Header
