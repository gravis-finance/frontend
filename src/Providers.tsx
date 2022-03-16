import React from 'react'
import { ModalProvider } from '@gravis.finance/uikit'
// import { Provider } from 'react-redux'
// import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { QueryClient, QueryClientProvider } from 'react-query'
// import store from 'state'

const queryClient = new QueryClient()

const Providers: React.FC = ({ children }) => {
  return (
    // <Provider store={store}>
    <ThemeContextProvider>
      {/* <LanguageContextProvider> */}
      <RefreshContextProvider>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>{children}</ModalProvider>
        </QueryClientProvider>
      </RefreshContextProvider>
      {/* </LanguageContextProvider> */}
    </ThemeContextProvider>
    // </Provider>
  )
}

export default Providers
