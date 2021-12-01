import { MenuEntry, urlSearchLanguageParam } from '@gravis.finance/uikit'
import { useTranslation } from 'react-i18next'

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
        label: 'mainMenu.home',
        href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/home`,
      },
      {
        label: 'mainMenu.hangar',
        href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/hangar`,
      },
      {
        label: 'mainMenu.buyLootBoxes',
        href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/lootboxes`,
      },
      {
        label: 'mainMenu.craft',
        href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/craft`,
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
  },
  {
    label: 'mainMenu.farming',
    icon: 'NFTFarmingIcon',
    items: [
      {
        label: 'mainMenu.farms',
        href: `${process.env.REACT_APP_FARMING_URL}/farms`,
        external: true,
      },
      {
        label: 'mainMenu.staking',
        href: `${process.env.REACT_APP_FARMING_URL}/staking`,
        hot: true,
        external: true,
      },
      {
        label: 'mainMenu.NFTFarming',
        href: `${process.env.REACT_APP_NFTFARMING_URL}`,
        external: true,
      },
      {
        label: 'mainMenu.audit',
        href: 'https://github.com/chainsulting/Smart-Contract-Security-Audits/blob/master/Gravis%20Finance/02_Smart%20Contract%20Audit_GravisFinance_Farm.pdf',
        external: true,
      },
      {
        label: 'mainMenu.docs',
        href: 'https://docs.gravis.finance/farming/farms',
        external: true,
      },
    ],
  },
  {
    label: 'mainMenu.trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'swap',
        href: `${process.env.REACT_APP_EXCHANGE_URL}`,
        external: true,
      },
      {
        label: 'mainMenu.liquidity',
        href: `${process.env.REACT_APP_LIQUIDITY_URL}`,
        external: true,
      },
      {
        label: 'mainMenu.migrate',
        href: `${process.env.REACT_APP_MIGRATION_URL}`,
        external: true,
      },
      {
        label: 'mainMenu.analytics.analytics',
        href: `${process.env.REACT_APP_INFO_URL}`,
        external: true,
      },
      {
        label: 'mainMenu.docs',
        href: 'https://docs.gravis.finance/gswap-exchange/gswap-exchange',
        external: true,
      },
    ],
  },
  {
    label: 'mainMenu.nftmarket',
    icon: 'NFTMarketIcon',
    items: [
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
    label: 'mainMenu.more',
    icon: 'MoreIcon',
    items: [
      {
        label: 'mainMenu.github',
        href: 'https://github.com/gravis-finance',
        external: true,
      },
      {
        label: 'mainMenu.blog',
        href: 'https://gravis-finance.medium.com/',
        external: true,
      },
      {
        label: 'mainMenu.pitchDeck',
        href: 'https://gateway.pinata.cloud/ipfs/QmS84xB6yivNX77Zv2BUHLQVQeTBg2qpL4yeLFreXeCrEU',
        external: true,
      },
      {
        label: 'mainMenu.tokenomics',
        href: 'https://docs.google.com/spreadsheets/d/1JfHN1J_inbAbANSCuspO8CIWuyiCDLB36pcuHItW0eM/edit#gid=1509806282',
        external: true,
      },
      {
        label: 'mainMenu.docs',
        href: 'https://docs.gravis.finance/',
        external: true,
      },
    ],
  },
]

const useGetMenuLinks = (): MenuEntry[] => {
  const { t } = useTranslation()
  let newMenuLinks = [...menuLinks]
  newMenuLinks = newMenuLinks.map((link) => {
    const newLink = { ...link }
    newLink.label = t(newLink.label)
    newLink.href = `${newLink.href}?${urlSearchLanguageParam}=${t('language')}`
    if (newLink.items) {
      newLink.items = newLink.items.map((item) => {
        const newItem = { ...item }
        newItem.label = t(newItem.label)
        newItem.href = `${newItem.href}?${urlSearchLanguageParam}=${t('language')}`
        return newItem
      })
    }
    return newLink
  })

  return newMenuLinks
}

export default useGetMenuLinks
