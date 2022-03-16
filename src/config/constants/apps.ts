import React from 'react'
import { EvervoidFilledLogo, GmartFilledLogo, GswapFilledLogo } from '../../components/Svg'

export type AppItemType = {
  title: string
  icon: React.FC
  description: string
  href: string
}

export const AppsConfig: AppItemType[] = [
  {
    title: 'Evervoid',
    icon: EvervoidFilledLogo,
    description: 'Free-to-play P2E NFT-based MMO strategy inspired by deep space and sci-fi.',
    href: process.env.REACT_APP_ASTEROID_MINING_URL,
  },
  {
    title: 'Gmart',
    icon: GmartFilledLogo,
    description: `The first NFT marketplace focused solely\n on in-game assets. Built-in smart analytics\n for NFT portfolio.`,
    href: process.env.REACT_APP_GMART_URL,
  },
  {
    title: 'Gswap',
    icon: GswapFilledLogo,
    description:
      'Multi-chain AMM DEX with cross-chain ERC20\n and NFT bridge, and high-yield farming\nand auto-farming.',
    href: process.env.REACT_APP_EXCHANGE_URL,
  },
]
