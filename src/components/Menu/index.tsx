import React, { FC, useEffect, useState } from 'react'
import { MenuEntry, Menu as UikitMenu } from '@gravis.finance/uikit'
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

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage.toLowerCase())
  }, [selectedLanguage])

  const links: MenuEntry[] = [
    {
      label: t('mainMenu.home'),
      icon: 'HomeIcon',
      href: '/',
    },
    {
      label: t('mainMenu.trade'),
      icon: 'TradeIcon',
      items: [
        {
          label: t('swap'),
          href: process.env.REACT_APP_EXCHANGE_URL,
        },
        {
          label: t('mainMenu.liquidity'),
          href: process.env.REACT_APP_LIQUIDITY_URL,
        },
        {
          label: t('mainMenu.migrate'),
          href: process.env.REACT_APP_MIGRATION_URL,
        },
      ],
    },
    {
      label: t('mainMenu.analytics.analytics'),
      icon: 'InfoIcon',
      items: [
        {
          label: t('mainMenu.analytics.overview'),
          href: process.env.REACT_APP_INFO_URL,
        },
        {
          label: t('mainMenu.analytics.tokens'),
          href: `${process.env.REACT_APP_INFO_URL}/tokens`,
        },
        {
          label: t('mainMenu.analytics.pairs'),
          href: `${process.env.REACT_APP_INFO_URL}/pairs`,
        },
      ],
    },
    {
      label: t('mainMenu.ino.ino'),
      icon: 'BigBangIcon',
      items: [
        {
          label: t('mainMenu.ino.bbRound'),
          href: `${process.env.REACT_APP_BIG_BANG_URL}/bigbangnft`,
        }
      ]
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
        },
        {
          label: t('mainMenu.blog'),
          href: 'https://gravis-finance.medium.com/',
        },
        {
          label: t('mainMenu.pitchDeck'),
          href: 'https://gateway.pinata.cloud/ipfs/QmQyWnMBruL7n7vqyVYxNXQdpm5rffj9e1Wr2Q48LU9PvY/gravis_presentation.pdf',
        },
        {
          label: t('mainMenu.tokenomics'),
          href:
            'https://docs.google.com/spreadsheets/d/1JfHN1J_inbAbANSCuspO8CIWuyiCDLB36pcuHItW0eM/edit#gid=1509806282',
        },
      ],
    },
  ]

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
      hideConnectAndNetwork
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
