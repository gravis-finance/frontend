import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@gravis.finance/uikit'
import GravisLogo from '../../../../components/Svg/Icons/GravisLogo'
// import TokenInfo from '../../../../components/TokenInfo'
// import { GRVSFilledLogo, GRVXFilledLogo } from '../../../../components/Svg'
import Apps from '../Apps'
// import { useGetTokensData } from '../../../../hooks/useTokenomicsConfig'
import { MenuItems, MenuItemBase } from '../MenuItems'
import * as styles from '../../styles'
import { MobileMenu } from '../MobileMenu'
import { Button } from '../Button'
import { CloseIcon } from '../Icons'

const Root = styled(Box).attrs((props) => ({
  zIndex: 3,
  height: { _: '5.5rem', md: '7rem' },
  ...props,
}))`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(500px);
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
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

// const TokensContainer = styled(Flex)`
//   > div:not(:last-child) {
//     margin-right: 2.2rem;
//   }
// `
//
// const TokenText = styled(MenuItem)`
//   font-size: 1.2rem;
//   line-height: 1.5rem;
//   color: white;
//   cursor: pointer;
//
//   :hover {
//     color: rgba(255, 255, 255, 0.5);
//   }
// `

const IconButton = styled(Button)`
  padding: 1rem;
  background-color: #3e4346;
  clip-path: polygon(0 0.5rem, 0.5rem 0, 100% 0, 100% calc(100% - 0.5rem), calc(100% - 0.5rem) 100%, 0 100%);
  border-radius: 0;
`

const MenuIcon = (props: React.ComponentProps<typeof Box>) => {
  return (
    <Box
      as="svg"
      width="1.5rem"
      height="1.2rem"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 1H15" stroke="white" strokeWidth="1.5" />
      <path d="M0 6H15" stroke="white" strokeWidth="1.5" />
      <path d="M0 11H15" stroke="white" strokeWidth="1.5" />
    </Box>
  )
}

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <Root zIndex={3} display={{ _: 'block', md: 'none' }}>
        <Flex {...styles.content} display="flex" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <IconButton onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <CloseIcon /> : <MenuIcon />}</IconButton>
            <GravisLogo width="9.1rem" height="3.184rem" ml="2rem" />
          </Flex>
          <Apps />
        </Flex>
      </Root>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

const Header = () => {
  // const { isLoading, data: tokensInfo } = useGetTokensData()

  // const foundGRVXAmount =
  //   (tokensInfo?.find((token) => token.symbol === 'GRVX' && token.chain === 'bsc').price +
  //     tokensInfo?.find((token) => token.symbol === 'GRVX' && token.chain === 'polygon').price) /
  //   2
  // const foundGRVSAmount = (tokensInfo?.find((token) => token.symbol === 'GRVS' && token.chain === 'bsc') + tokensInfo?.find((token) => token.symbol === 'GRVS' && token.chain === 'polygon')) / 2
  return (
    <>
      <Root display={{ _: 'none', md: 'block' }}>
        <Flex {...styles.content} alignItems="center">
          <StyledGravisLogo />
          <Flex justifyContent="space-between" alignItems="center" width="calc(100% - 10.8rem)">
            <Flex p="0 5.2rem" gridGap="2.55rem">
              <MenuItems ItemComponent={MenuItem} />
            </Flex>
            <Flex>
              {/*<TokensContainer mr="5.1rem">*/}
              {/*  <TokenInfo*/}
              {/*    logo={<GRVSFilledLogo />}*/}
              {/*    title="GRVS"*/}
              {/*    text={*/}
              {/*      <TokenText as="a" href={process.env.REACT_APP_PUBLIC_ROUND_URL} target="_blank">*/}
              {/*        Join Sale*/}
              {/*      </TokenText>*/}
              {/*    }*/}
              {/*  />*/}
              {/*  <TokenInfo*/}
              {/*    logo={<GRVXFilledLogo />}*/}
              {/*    title="GRVX"*/}
              {/*    text={*/}
              {/*      <TokenText*/}
              {/*        as="a"*/}
              {/*        href={`${process.env.REACT_APP_EXCHANGE_URL}/swap?network=56&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xa349fD455A457467D31cA8Db59052dAEBBBcc108`}*/}
              {/*        target="_blank"*/}
              {/*      >*/}
              {/*        {isLoading ? 'Loading...' : `$${foundGRVXAmount.toFixed(5)}`}*/}
              {/*      </TokenText>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</TokensContainer>*/}
              <Apps />
            </Flex>
          </Flex>
        </Flex>
      </Root>
      <MobileHeader />
    </>
  )
}

export default Header
