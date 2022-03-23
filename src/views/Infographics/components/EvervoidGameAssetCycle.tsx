import React from 'react'
import styled from 'styled-components'
import assetStaking from 'assets/infographics/assetStaking.png'
import generalCycle from 'assets/infographics/generalCycle.png'
import boostersForDrones from 'assets/infographics/boostersForDrones.png'
import dronesCrafting from 'assets/infographics/dronesCrafting.png'
import shipsCrafting from 'assets/infographics/shipsCrafting.png'
import equipment from 'assets/infographics/equipment.png'
import boostersForShips from 'assets/infographics/boostersForShips.png'
import { Flex } from '@gravis.finance/uikit'
import { PlayText } from '../../../components/PlayText'

const StyledFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
  > img:not(:last-child) {
    margin-bottom: 32px;
  }
`

const Image = styled.img`
  width: fit-content;
  max-width: 50%;
`

const EvervoidGameAssetCycle = () => {
  return (
    <>
      <PlayText fontSize="36px" mb="16px">
        Game Asset Cycle
      </PlayText>
      <StyledFlex flexDirection="column">
        <Image src={assetStaking} />
        <Image src={generalCycle} />
        <Image src={boostersForDrones} />
        <Image src={dronesCrafting} />
        <Image src={shipsCrafting} />
        <Image src={equipment} />
        <Image src={boostersForShips} />
      </StyledFlex>
    </>
  )
}

export default EvervoidGameAssetCycle
