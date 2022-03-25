import React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { BinanceNetworkIcon, Flex, PolygonNetworkIcon } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'

const TokenItemContainer = styled(Flex)<{ isActive: boolean } & SpaceProps>`
  background-color: ${({ isActive }) => (isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.05)')};
  border-radius: 48px;
  padding: 1rem 1.7rem 1rem 1rem;
  height: 4rem;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  > div {
    transition: color 200ms ease-in-out;
  }
  ${space}
`

type TokenItemProps = {
  isPolygon?: boolean
  isActive: boolean
  onClick: () => void
}

const NetworkItem: React.FC<TokenItemProps & SpaceProps> = ({ isPolygon, isActive, onClick, ...props }) => {
  return (
    <TokenItemContainer alignItems="center" onClick={onClick} isActive={isActive} {...props}>
      {isPolygon ? (
        <PolygonNetworkIcon width="2rem" height="2rem" />
      ) : (
        <BinanceNetworkIcon width="2.4rem" height="2.4rem" />
      )}
      <DefaultText color={isActive ? 'rgb(0,0,0)' : 'rgb(255, 255, 255)'} ml="1rem" fontWeight={600} fontSize="1.4rem">
        {isPolygon ? 'Polygon' : 'Binance'}
      </DefaultText>
    </TokenItemContainer>
  )
}

type Props = {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const TokenomicNetworksSwitcher: React.FC<Props> = ({ activeIndex, setActiveIndex }) => {
  return (
    <Flex>
      <NetworkItem isActive={activeIndex === 0} onClick={() => setActiveIndex(0)} mr="1rem" />
      <NetworkItem isActive={activeIndex === 1} onClick={() => setActiveIndex(1)} isPolygon />
    </Flex>
  )
}

export default TokenomicNetworksSwitcher
