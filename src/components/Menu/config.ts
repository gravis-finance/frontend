import { MenuEntry, privacyAndPoliceLink, termsOfUseLink } from '@gravis.finance/uikit'

const menuLinks: MenuEntry[] = [
  {
    label: 'mainMenu.home',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_HOME_URL}`,
  },
  {
    label: 'mainMenu.asteroidMining',
    icon: 'AsteroidMiningIcon',
    blink: true,
    items: [
      {
        label: 'Evervoid 2.0',
        href: process.env.REACT_APP_ASTEROID_MINING_URL,
        external: true,
      },
      {
        label: 'mainMenu.home',
        href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/home`,
        external: true,
      },
      {
        label: 'mainMenu.missions',
        href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/missions`,
        external: true,
      },
      {
        label: 'mainMenu.buyLootBoxes',
        href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/lootboxes`,
        external: true,
      },
      {
        label: 'Evervoid pitch deck',
        href: 'https://gateway.pinata.cloud/ipfs/QmTDH4vM7JQFpDdMGaRMTCvRwLunzL59EQpsp1DDQU5g4n',
        external: true,
      },
      {
        label: 'mainMenu.docs',
        href: 'https://docs.gravis.finance',
        external: true,
      },
    ],
    chip: {
      title: 'GAME',
      color: 'rgb(235, 149, 0)',
    },
  },
  {
    label: 'mainMenu.trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Autofarming',
        href: `${process.env.REACT_APP_AUTOFARMING_URL}`,
        external: true,
        chip: {
          title: 'HOT',
          color: 'rgb(235, 149, 0)',
          animation: true,
        },
      },
      {
        label: 'swap',
        href: `${process.env.REACT_APP_EXCHANGE_URL}/swap`,
        external: true,
      },
      {
        label: 'mainMenu.farming',
        href: `${process.env.REACT_APP_FARMING_URL}/farms`,
        external: true,
      },
      {
        label: 'mainMenu.liquidity',
        href: `${process.env.REACT_APP_EXCHANGE_URL}/pool`,
        external: true,
      },
      {
        label: 'mainMenu.migrate',
        href: `${process.env.REACT_APP_EXCHANGE_URL}/migrate`,
        external: true,
      },
      {
        label: 'Multi-chain Bridge',
        href: `${process.env.REACT_APP_BRIDGE_URL}/swap`,
        external: true,
      },
      {
        label: 'mainMenu.analytics.analytics',
        href: `${process.env.REACT_APP_INFO_URL}/home`,
        external: true,
      },
    ],
  },
  {
    label: 'mainMenu.nftmarket',
    icon: 'NFTMarketIcon',
    items: [
      {
        label: 'Collections',
        href: `${process.env.REACT_APP_GMART_URL}/collections`,
        external: true,
      },
      {
        label: 'buyNFT',
        href: `${process.env.REACT_APP_GMART_URL}/buy`,
        external: true,
      },
      {
        label: 'Activity',
        href: `${process.env.REACT_APP_GMART_URL}/activity`,
        external: true,
      },
      {
        label: 'mainMenu.docs',
        href: 'https://docs.gravis.finance/gmart-nft-market/buy-nft',
        external: true,
      },
    ],
  },
  {
    label: 'mainMenu.publicRound',
    icon: 'TeamsIcon',
    href: `${process.env.REACT_APP_PUBLIC_ROUND_URL}`,
    external: true,
    chip: {
      title: 'GRVS',
      color: '#24BA7B',
    },
  },
  {
    label: 'mainMenu.more',
    icon: 'MoreIcon',
    items: [
      {
        label: 'mainMenu.pitchDeck',
        href: 'https://drive.google.com/file/d/1IDezUTH4W1YY2NqAEo2amxUAk7u3BLhE/view',
        external: true,
      },
      {
        label: 'mainMenu.tokenomics',
        href: 'https://docs.google.com/spreadsheets/d/1avYbOzMg7vDt5Gmw16V8WomZG8RfHtaFGEUeZHOZ8vw',
        external: true,
      },
      {
        label: 'Infographics',
        href: '/info',
      },
      {
        label: 'mainMenu.NFTFarming',
        href: `${process.env.REACT_APP_NFTFARMING_URL}`,
        external: true,
      },
      {
        label: 'mainMenu.docs',
        href: 'https://docs.gravis.finance/',
        external: true,
      },
      {
        label: 'Infographics',
        href: '/info',
      },
      {
        label: 'Terms of Use',
        href: termsOfUseLink,
        external: true,
      },
      {
        label: 'Privacy Policy',
        href: privacyAndPoliceLink,
        external: true,
      },
    ],
  },
]

export default menuLinks
