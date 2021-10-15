import React, { FC, useEffect, useState } from 'react'
import { MenuEntry, Menu as UikitMenu, urlSearchLanguageParam } from '@gravis.finance/uikit'
import { Route, RouteProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useTheme from 'hooks/useTheme'
import i18next from '../../i18n'

type PropsType = {
  loginBlockVisible?: boolean
}
const login = () => null
const logout = () => null

const Menu: FC<PropsType> = ({ loginBlockVisible = true, ...props }) => {
  const { isDark, toggleTheme } = useTheme()
  const { t } = useTranslation()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedLanguage, setSelectedLanguage] = useState('')

  const links: MenuEntry[] = [
    {
      label: t('mainMenu.home'),
      icon: 'HomeIcon',
      href: '/',
    },
    {
      label: t('mainMenu.asteroidMining'),
      icon: 'AsteroidMiningIcon',
      blink: true,
      items: [
        {
          label: t('mainMenu.buyLootBoxes'),
          href: `${process.env.REACT_APP_ASTEROID_MINING_URL}?${urlSearchLanguageParam}=${t('language')}`,
        },
        {
          label: t('mainMenu.hangar'),
          href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/hangar?${urlSearchLanguageParam}=${t('language')}`,
        },
        {
          label: "Dashboard",
          href: `${process.env.REACT_APP_ASTEROID_MINING_URL}/dashboard?${urlSearchLanguageParam}=${t('language')}`,
        },
        {
          label: '(A)steroid pitch deck',
          href: 'https://gateway.pinata.cloud/ipfs/QmWPNbXLtqh1gkXEe5BR5BLadGcz7sYAXjooSzrouBi9an'
        },
        {
          label: t('mainMenu.docs'),
          href: 'https://docs.gravis.finance',
          external: true,
        }
      ]
    },
    {
      label: t('mainMenu.farming'),
      icon: 'NFTFarmingIcon',
      items: [
        {
          label: t('mainMenu.farms'),
          href: `${process.env.REACT_APP_FARMING_URL}/farms?${urlSearchLanguageParam}=${t('language')}`,
        },
        {
          label: t('mainMenu.staking'),
          href: `${process.env.REACT_APP_FARMING_URL}/staking?${urlSearchLanguageParam}=${t('language')}`,
          hot: true
        },
        // {
        //   label: t('mainMenu.farming.autoFarms'),
        //   href: `/auto-farms`,
        // },
        {
          label: t('mainMenu.NFTFarming'),
          href: `${process.env.REACT_APP_NFTFARMING_URL}?${urlSearchLanguageParam}=${t('language')}`,
        },
      ],
    },
    {
      label: t('mainMenu.trade'),
      icon: 'TradeIcon',
      items: [
        {
          label: t('swap'),
          href: `${process.env.REACT_APP_EXCHANGE_URL}?${urlSearchLanguageParam}=${t('language')}`,
        },
        {
          label: t('mainMenu.liquidity'),
          href: `${process.env.REACT_APP_LIQUIDITY_URL}?${urlSearchLanguageParam}=${t('language')}`,
        },
        {
          label: t('mainMenu.migrate'),
          href: `${process.env.REACT_APP_MIGRATION_URL}?${urlSearchLanguageParam}=${t('language')}`,
        },
        {
          label: t('mainMenu.analytics.analytics'),
          href: `${process.env.REACT_APP_INFO_URL}?${urlSearchLanguageParam}=${t('language')}`,
        },
      ],
    },
    // {
    //   label: t('mainMenu.analytics.analytics'),
    //   icon: 'InfoIcon',
    //   items: [
    //     {
    //       label: t('mainMenu.analytics.overview'),
    //       href: `${process.env.REACT_APP_INFO_URL}?${urlSearchLanguageParam}=${t('language')}`,
    //     },
    //     {
    //       label: t('mainMenu.analytics.tokens'),
    //       href: `${process.env.REACT_APP_INFO_URL}/tokens?${urlSearchLanguageParam}=${t('language')}`,
    //     },
    //     {
    //       label: t('mainMenu.analytics.pairs'),
    //       href: `${process.env.REACT_APP_INFO_URL}/pairs?${urlSearchLanguageParam}=${t('language')}`,
    //     },
    //   ],
    // },
    {
      label: t('mainMenu.nftmarket'),
      icon: 'NFTMarketIcon',
      items: [
        {
          label: t('buyNFT'),
          href: `${process.env.REACT_APP_GMART_URL}/buy?${urlSearchLanguageParam}=${t('language')}`,
        },
        {
          label: t('sellNFT'),
          href: `${process.env.REACT_APP_GMART_URL}/sell?${urlSearchLanguageParam}=${t('language')}`,
        },
        {
          label: t('sendNFT'),
          href: `${process.env.REACT_APP_GMART_URL}/transfer?${urlSearchLanguageParam}=${t('language')}`,
        },
      ]
    },
    {
      label: t('mainMenu.NFTFarming'),
      icon: 'NFTFarmingIcon',
      href: `${process.env.REACT_APP_NFTFARMING_URL}?${urlSearchLanguageParam}=${t('language')}`
    },
    {
      label: t('mainMenu.more'),
      icon: 'MoreIcon',
      items: [
        // {
        //   label: 'Audits',
        //   href: '/audits',
        // },
        {
          label: t('mainMenu.github'),
          href: 'https://github.com/gravis-finance',
          external: true,
        },
        {
          label: t('mainMenu.blog'),
          href: 'https://gravis-finance.medium.com/',
          external: true,
        },
        {
          label: t('mainMenu.pitchDeck'),
          href: t('presentationLink'),
          external: true,
        },
        {
          label: t('mainMenu.tokenomics'),
          href:
            'https://docs.google.com/spreadsheets/d/1JfHN1J_inbAbANSCuspO8CIWuyiCDLB36pcuHItW0eM/edit#gid=1509806282',
          external: true,
        },
      ],
    },
  ]

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage.toLowerCase())
  }, [selectedLanguage])


  return (
    <UikitMenu
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      links={links}
      loginBlockVisible={loginBlockVisible}
      buttonTitle={t('connect')}
      options={{
        modalTitle: t('connectToWallet'),
        modalFooter: t('learnHowConnect'),
        modelLogout: t('logout'),
        modalBscScan: t('viewOnBscscan'),
        modelCopyAddress: t('copyAddress'),
      }}
      betaText=""
      betaLink="https://beta.exchange.gravis.finance"
      setSelectedLanguage={setSelectedLanguage}
      {...props}
    />
  )
}

export const MenuWrappedRoute: FC<RouteProps & { loginBlockVisible: boolean }> = ({
  children,
  loginBlockVisible,
  ...props
}) => (
  <Route {...props}>
    <Menu loginBlockVisible={loginBlockVisible}>{children}</Menu>
  </Route>
)

export default Menu
