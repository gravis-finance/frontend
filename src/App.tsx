import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NotFound, Maintenance, ResetCSS } from '@gravis.finance/uikit'
import GlobalStyle from './style/Global'
import { MenuWrappedRoute } from './components/Menu'
import PageLoader from './components/PageLoader'

// Route-based code splitting
const Home = lazy(() => import('./views/Home'))
// const BigBangNft = lazy(() => import('./views/BigBangNft'))
// const ToastListener = lazy(() => import('./components/ToastListener'))

const App: React.FC = () => {
  const loginBlockHidden = false

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <ResetCSS />
        <GlobalStyle />
        <Switch>
          <MenuWrappedRoute loginBlockVisible={loginBlockHidden} path="/" exact>
            <Home />
          </MenuWrappedRoute>
          {/* <MenuWrappedRoute loginBlockVisible={loginBlockHidden} path="/bigbangnft">
            <BigBangNft />
          </MenuWrappedRoute> */}
          <Route path="/maintenance">
            <Maintenance />
          </Route>
          <MenuWrappedRoute loginBlockVisible={loginBlockHidden}>
            <NotFound redirectURL={process.env.REACT_APP_HOME_URL}/>
          </MenuWrappedRoute>
        </Switch>
        {/* <ToastListener /> */}
      </Suspense>
    </Router>
  )
}



export default React.memo(App)
