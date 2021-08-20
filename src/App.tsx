import React, { Suspense, lazy } from 'react'
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NotFound, Maintenance, ResetCSS } from '@gravis.finance/uikit'
import GlobalStyle from './style/Global'
import { MenuWrappedRoute } from './components/Menu'
import PageLoader from './components/PageLoader'
import background from './assets/background.png'

// Route-based code splitting
const Home = lazy(() => import('./views/Home'))
// const BigBangNft = lazy(() => import('./views/BigBangNft'))
// const ToastListener = lazy(() => import('./components/ToastListener'))

const Wrapper = styled.div`
  position: relative;
  
  > div > div {
    z-index: 2;
    background: transparent;
  }
`

const StyledBackground = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top 0;
  bottom: 0;
  right: 0;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  z-index: 1;
`

const App: React.FC = () => {
  const loginBlockHidden = false

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <ResetCSS />
        <GlobalStyle />
        <StyledBackground/>
        <Wrapper>
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
        </Wrapper>
        {/* <ToastListener /> */}
      </Suspense>
    </Router>
  )
}



export default React.memo(App)
