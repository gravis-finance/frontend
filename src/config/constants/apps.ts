import { EvervoidFilledLogo, GmartFilledLogo, GswapFilledLogo } from '../../components/Svg'

export type AppItemType = {
  title: string
  icon: any
  description: string
  href: string
  backgroundColor: string
}

export const AppsConfig: AppItemType[] = [
  {
    title: 'Evervoid',
    icon: EvervoidFilledLogo,
    description: 'Free-to-play P2E NFT-based MMO strategy inspired by deep space and sci-fi.',
    href: process.env.REACT_APP_ASTEROID_MINING_URL,
    backgroundColor: 'radial-gradient(100% 100% at 50% 0%, #FAFF1C 0%, #0FBD00 100%)',
  },
  {
    title: 'Gmart',
    icon: GmartFilledLogo,
    description: `The first NFT marketplace focused solely on in-game assets. Built-in smart analytics for NFT portfolio.`,
    href: process.env.REACT_APP_GMART_URL,
    backgroundColor: 'radial-gradient(100% 100% at 50% 0%, #1CFFF1 0%, #1549FF 100%)',
  },
  {
    title: 'Gswap',
    icon: GswapFilledLogo,
    description: 'Multi-chain AMM DEX with cross-chain ERC20 and NFT bridge, and high-yield farming and auto-farming.',
    href: process.env.REACT_APP_EXCHANGE_URL,
    backgroundColor: 'radial-gradient(100% 100% at 50% 0%, #FFF615 0%, #FF371C 100%)',
  },
]
