import React from 'react'
import DefaultTokenomicItem from '../views/Landing/components/DefaultTokenomicItem'
import {
  AprIcon,
  CoinsIcon,
  CrownIcon,
  DatabaseIcon,
  DroneIcon,
  LockIcon,
  MountainsIcon,
  NavigationIcon,
  RobotIcon,
  SaleIcon,
  ShoppingBasketIcon,
  TargetIcon,
  TowersIcon,
} from '../components/Svg'
import { TokenomicsTokenType } from '../config/constants/types'
import GRVXTokenomicItem from '../views/Landing/components/GRVXTokenomicItem'

const useTokenomicsConfig = () => {
  return React.useMemo(() => {
    return {
      cells: {
        [TokenomicsTokenType.GRVS]: [
          {
            title: 'Price',
            text: '$0.03',
          },
          {
            title: 'Chains',
            text: 'BSC, Polygon',
          },
          {
            title: 'Max supply',
            text: '1 000 000',
          },
          {
            title: 'Circulation supply',
            text: '802 923 423',
          },
          {
            title: 'Burned',
            text: '23 812 912',
          },
        ],
        [TokenomicsTokenType.GRVX]: [
          {
            title: 'Price',
            text: '$0.03',
          },
          {
            title: 'Chains',
            text: 'BSC, Polygon',
          },
          {
            title: 'Circulation supply',
            text: '802 923 423',
          },
          {
            title: 'Burned',
            text: '23 812 912',
          },
        ],
      },
      tokenomicsConfig: {
        [TokenomicsTokenType.GRVS]: [
          <DefaultTokenomicItem
            icon={CrownIcon}
            text="Purchases of premium assets
in Evervoid 2.0"
          />,
          <DefaultTokenomicItem
            icon={ShoppingBasketIcon}
            text="Buying items
to create and grow clans"
          />,
          <DefaultTokenomicItem
            icon={AprIcon}
            text="APR increase up to X2 if GRVS
is transferred to resource staking"
          />,
          <DefaultTokenomicItem
            icon={DatabaseIcon}
            text="Creating a portal between
universes (blockchains)"
          />,
          <DefaultTokenomicItem
            icon={MountainsIcon}
            text="Selling lands
in Evervoid 2.0"
          />,
          <DefaultTokenomicItem
            icon={LockIcon}
            text="Access to special events
and locations"
          />,
          <DefaultTokenomicItem
            icon={SaleIcon}
            text="Sale of skins for ships,
captains, lands"
          />,
          <DefaultTokenomicItem
            icon={DroneIcon}
            text="Boosters for the second
drone mission"
          />,
        ],
        [TokenomicsTokenType.GRVX]: [
          <DefaultTokenomicItem
            icon={TowersIcon}
            text="Construction of building
and improvements in Evervoid 2.0"
          />,
          <DefaultTokenomicItem
            icon={TargetIcon}
            text="Required to participate
in new missions"
          />,
          <DefaultTokenomicItem
            icon={RobotIcon}
            text="Required for Type 01
and Type 02 missions"
          />,
          <DefaultTokenomicItem
            icon={ShoppingBasketIcon}
            text="Buying
loot boxes"
          />,
          <DefaultTokenomicItem icon={CoinsIcon} text="Ship and drone mission reward" />,
          <DefaultTokenomicItem icon={NavigationIcon} text="Required to upgrade drones" />,
          <GRVXTokenomicItem />,
        ],
      },
    }
  }, [])
}

export default useTokenomicsConfig
