import React from 'react'
import { ModalProvider } from '@gravis.finance/uikit'
// import { Provider } from 'react-redux'
// import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
// import store from 'state'

const Providers: React.FC = ({ children }) => {
  return (
    // <Provider store={store}>
      <ThemeContextProvider>
        {/* <LanguageContextProvider> */}
          <RefreshContextProvider>
            <ModalProvider>{children}</ModalProvider>
          </RefreshContextProvider>
        {/* </LanguageContextProvider> */}
      </ThemeContextProvider>
    // </Provider>
  )
}

export default Providers
