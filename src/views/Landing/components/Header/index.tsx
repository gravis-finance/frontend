import React from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import GravisLogo from '../../../../components/Svg/Icons/GravisLogo'
import TokenInfo from '../../../../components/TokenInfo'
import { GRVSFilledLogo, GRVXFilledLogo } from '../../../../components/Svg'
import Apps from '../Apps'
import { useGetTokensData } from '../../../../hooks/useTokenomicsConfig'
import { MenuItems, MenuItemBase } from '../MenuItems'

const Container = styled(Flex)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(500px);
  width: 100%;
  height: 7rem;
  padding: 1.8rem 8rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3 !important;
`

const StyledGravisLogo = styled(GravisLogo)`
  width: 10.8rem;
`

const MenuItem = styled(MenuItemBase)<{ active?: boolean }>`
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 100%;
  letter-spacing: -0.02em;
  transition: color 100ms ease-in-out;
  color: rgba(255, 255, 255, 0.5);

  :hover,
  &[data-active='true'] {
    color: white;
  }
`

const TokensContainer = styled(Flex)`
  > div:not(:last-child) {
    margin-right: 2.2rem;
  }
`

const TokenText = styled(MenuItem)`
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: white;
  cursor: pointer;

  :hover {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Header = () => {
  const { isLoading, data: tokensInfo } = useGetTokensData()

  const foundGRVXAmount =
    (tokensInfo?.find((token) => token.symbol === 'GRVX' && token.chain === 'bsc').price +
      tokensInfo?.find((token) => token.symbol === 'GRVX' && token.chain === 'polygon').price) /
    2
  // const foundGRVSAmount = (tokensInfo?.find((token) => token.symbol === 'GRVS' && token.chain === 'bsc') + tokensInfo?.find((token) => token.symbol === 'GRVS' && token.chain === 'polygon')) / 2
  return (
    <Container alignItems="center">
      <StyledGravisLogo />
      <Flex justifyContent="space-between" alignItems="center" width="calc(100% - 10.8rem)">
        <Flex p="0 5.2rem" gridGap="2.55rem">
          <MenuItems ItemComponent={MenuItem} />
        </Flex>
        <Flex>
          <TokensContainer mr="5.1rem">
            <TokenInfo
              logo={<GRVSFilledLogo />}
              title="GRVS"
              text={
                <TokenText as="a" href={process.env.REACT_APP_PUBLIC_ROUND_URL} target="_blank">
                  Join Sale
                </TokenText>
              }
            />
            <TokenInfo
              logo={<GRVXFilledLogo />}
              title="GRVX"
              text={
                <TokenText
                  as="a"
                  href={`${process.env.REACT_APP_EXCHANGE_URL}/swap?network=56&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xa349fD455A457467D31cA8Db59052dAEBBBcc108`}
                  target="_blank"
                >
                  {isLoading ? 'Loading...' : `$${foundGRVXAmount.toFixed(5)}`}
                </TokenText>
              }
            />
          </TokensContainer>
          <Apps />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Header
