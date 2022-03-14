import React from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import { space, SpaceProps } from 'styled-system'
import { GRVSFilledLogo, GRVXFilledLogo } from '../../../../components/Svg'
import DefaultText from '../../../../components/DefaultText'

const Container = styled(Flex)``

const TokenItemContainer = styled(Flex)<{ isActive: boolean } & SpaceProps>`
  background-color: ${({ isActive }) => (isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.05)')};
  border-radius: 48px;
  padding: 10px;
  width: 120px;
  height: 50px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  > div {
    transition: color 200ms ease-in-out;
  }
  ${space}
`

type TokenItemProps = {
  isGrvx?: boolean
  isActive: boolean
  onClick: () => void
}

const TokenItem: React.FC<TokenItemProps & SpaceProps> = ({ isGrvx, isActive, onClick, ...props }) => {
  return (
    <TokenItemContainer alignItems="center" onClick={onClick} isActive={isActive} {...props}>
      {isGrvx ? <GRVXFilledLogo width={30} height={30} /> : <GRVSFilledLogo width={30} height={30} />}
      <DefaultText color={isActive ? 'rgb(0,0,0)' : 'rgb(255, 255, 255)'} ml={10} fontWeight={600} fontSize="18px">
        {isGrvx ? 'GRVX' : 'GRVS'}
      </DefaultText>
    </TokenItemContainer>
  )
}

type Props = {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const TokensSwitcher: React.FC<Props> = ({ activeIndex, setActiveIndex }) => {
  return (
    <Container>
      <TokenItem isActive={activeIndex === 0} onClick={() => setActiveIndex(0)} mr={10} />
      <TokenItem isActive={activeIndex === 1} onClick={() => setActiveIndex(1)} isGrvx />
    </Container>
  )
}

export default TokensSwitcher
