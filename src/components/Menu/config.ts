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
        label: 'mainMenu.hangar',
        href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/hangar`,
        external: true,
      },
      {
        label: 'mainMenu.buyLootBoxes',
        href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/lootboxes`,
        external: true,
      },
      {
        label: 'mainMenu.firstMates',
        href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/first-mate-search`,
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
        label: 'swap',
        href: `${process.env.REACT_APP_EXCHANGE_URL}/swap`,
        external: true,
      },
      {
        label: 'mainMenu.farming',
        href: `${process.env.REACT_APP_FARMING_URL}/farms`,
        external: true,
        chip: {
          title: 'HOT',
          color: 'rgb(235, 149, 0)',
          animation: true,
        },
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
        label: 'sellNFT',
        href: `${process.env.REACT_APP_GMART_URL}/sell`,
        external: true,
      },
      {
        label: 'sendNFT',
        href: `${process.env.REACT_APP_GMART_URL}/transfer`,
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
        href: 'https://drive.google.com/file/d/13HIl141DzXV-YHemaoG5jvK2c95cWW7L/view?usp=sharing',
        external: true,
      },
      {
        label: 'mainMenu.tokenomics',
        href: 'https://docs.google.com/spreadsheets/d/1JfHN1J_inbAbANSCuspO8CIWuyiCDLB36pcuHItW0eM/edit#gid=1509806282',
        external: true,
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
