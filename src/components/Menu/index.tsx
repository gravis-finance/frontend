import React, { FC, useEffect, useState } from 'react'
import { Menu as UikitMenu } from '@gravis.finance/uikit'
import { Route, RouteProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useTheme from 'hooks/useTheme'
import i18next from '../../i18n'
import menuLinks from './config'

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

  return (
    <UikitMenu
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      links={menuLinks}
      loginBlockVisible={loginBlockVisible}
      buttonTitle={t('connect')}
      options={{
        modalTitle: t('connectToWallet'),
        modalFooter: t('learnHowConnect'),
        modelLogout: t('logout'),
        modalBscScan: t('viewOnBscscan'),
        modelCopyAddress: t('copyAddress'),
      }}
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
