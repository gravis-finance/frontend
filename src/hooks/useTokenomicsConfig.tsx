import React from 'react'
import { useQuery } from 'react-query'
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
import { GRVS_ADDRESSES, GRVX_ADDRESSES } from '../config/constants/tokensAddresses'
import { numberWithSpaces } from '../utils/numberWithSpaces'

export const useGetTokensData = () => {
  const fetchTokens = async () => {
    const result = await fetch(`${process.env.REACT_APP_ASSETS_API_URL}/tokens`)
    const fetchedResult = await result.json()

    return [
      ...fetchedResult.data.filter((token) =>
        Object.values(GRVX_ADDRESSES).find((address) => token.token_address === address.toLowerCase()),
      ),
      ...fetchedResult.data.filter((token) =>
        Object.values(GRVS_ADDRESSES).find((address) => token.token_address === address.toLowerCase()),
      ),
    ]
  }

  return useQuery('getTokens', fetchTokens)
}

const chainsTitles = {
  bsc: 'Binance',
  polygon: 'Polygon',
}

const useTokenomicsConfig = (chain = 'bsc') => {
  const { isLoading, data: tokensInfo } = useGetTokensData()

  const foundGRVX = tokensInfo?.find((token) => token.symbol === 'GRVX' && token.chain === chain)
  const foundGRVS = tokensInfo?.find((token) => token.symbol === 'GRVS' && token.chain === chain)

  return React.useMemo(() => {
    return {
      isLoading,
      links: {
        [TokenomicsTokenType.GRVS]: {
          seeMore: [],
          buyToken: process.env.REACT_APP_PUBLIC_ROUND_URL,
        },
        [TokenomicsTokenType.GRVX]: {
          seeMore: [
            {
              text: `DEX Guru (${chainsTitles[chain]} Network)`,
              link:
                chain === 'bsc'
                  ? 'https://dex.guru/token/0xa349fd455a457467d31ca8db59052daebbbcc108-bsc'
                  : 'https://dex.guru/token/0xd322da59c420e0827e31c40f1886346fb19c6687-polygon',
            },
            {
              text: `Token statistics on DEX analytics (${chainsTitles[chain]} Network)`,
              link:
                chain === 'bsc'
                  ? 'https://info.gravis.finance/token/0xa349fd455a457467d31ca8db59052daebbbcc108?network=binance'
                  : 'https://info.gravis.finance/token/0xd322da59c420e0827e31c40f1886346fb19c6687?network=polygon',
            },
          ],
          buyToken:
            chain === 'bsc'
              ? `${process.env.REACT_APP_EXCHANGE_URL}/swap?network=56&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xa349fD455A457467D31cA8Db59052dAEBBBcc108`
              : `${process.env.REACT_APP_EXCHANGE_URL}/swap?network=137&inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&outputCurrency=0xd322da59c420e0827e31c40f1886346fb19c6687`,
        },
      },
      cells: {
        [TokenomicsTokenType.GRVS]: [
          {
            title: 'Price',
            text: foundGRVS?.price ? `$${foundGRVS?.price}` : 'Coming soon',
          },
          {
            title: 'Chain',
            text: chainsTitles[chain],
          },
          {
            title: 'Max supply',
            text: '1 000 000',
          },
          {
            title: 'Circulation supply',
            text: foundGRVS?.live_count > 0 ? numberWithSpaces(parseInt(foundGRVS?.live_count)) : 'Coming soon',
          },
          {
            title: 'Burned',
            text: foundGRVS?.burned > 0 ? numberWithSpaces(parseInt(foundGRVS?.burned)) : 'Coming soon',
          },
        ],
        [TokenomicsTokenType.GRVX]: [
          {
            title: 'Price',
            text: foundGRVX?.price ? `$${foundGRVX?.price}` : 'Coming soon',
          },
          {
            title: 'Chain',
            text: chainsTitles[chain],
          },
          {
            title: 'Circulation supply',
            text: numberWithSpaces(parseInt(foundGRVX?.live_count)),
          },
          {
            title: 'Burned',
            text: numberWithSpaces(parseInt((Number(foundGRVX?.burned) + Number(foundGRVX?.dead)).toString())),
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
  }, [
    chain,
    foundGRVS?.burned,
    foundGRVS?.live_count,
    foundGRVS?.price,
    foundGRVX?.burned,
    foundGRVX?.dead,
    foundGRVX?.live_count,
    foundGRVX?.price,
    isLoading,
  ])
}

export default useTokenomicsConfig
