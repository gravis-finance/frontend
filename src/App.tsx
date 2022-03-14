import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Maintenance, NotFound, ResetCSS } from '@gravis.finance/uikit'
import GlobalStyle from './style/Global'
import { MenuWrappedRoute } from './components/Menu'
import PageLoader from './components/PageLoader'
import Landing from './views/Landing'

// Route-based code splitting
// const Home = lazy(() => import('./views/Home'))
const AuditsPage = lazy(() => import('./views/AuditsPage'))
// const BigBangNft = lazy(() => import('./views/BigBangNft'))
// const ToastListener = lazy(() => import('./components/ToastListener'))

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;

  > div > div {
    z-index: 2;
  }
`

// const StyledBackground = styled.div`
//   min-height: 100%;
//   width: 100vw;
//   position: absolute;
//   left: 0;
//   top 0;
//   bottom: 0;
//   right: 0;
//   background-image: url(${background});
//   background-position: center center;
//   background-repeat: no-repeat;
//   background-attachment: inherit;
//   background-size: cover;
//   z-index: 1;
//
//   :after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 184px;
//     background: linear-gradient(rgba(28, 28, 28, 0) 0%, rgb(28, 28, 28) 100%);
//     bottom: -1px;
//   }
//
//   @media screen and (max-width: 824px) {
//     min-height: 110%;
//   }
//
//   @media screen and (max-width: 704px) {
//     min-height: 120%;
//   }
//
//   @media screen and (max-width: 704px) {
//     min-height: 130%;
//   }
//
//   @media screen and (max-width: 368px) {
//     background-attachment: fixed;
//     min-height: 160%;
//   }
// `

const App: React.FC = () => {
  const loginBlockHidden = false

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <ResetCSS />
        <GlobalStyle />
        {/* <StyledBackground/> */}
        <Wrapper>
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <MenuWrappedRoute loginBlockVisible={loginBlockHidden} exact path="/audits">
              <AuditsPage />
            </MenuWrappedRoute>
            {/* <MenuWrappedRoute loginBlockVisible={loginBlockHidden} path="/bigbangnft">
            <BigBangNft />
          </MenuWrappedRoute> */}
            <Route path="/maintenance">
              <Maintenance />
            </Route>
            <MenuWrappedRoute loginBlockVisible={loginBlockHidden}>
              <NotFound redirectURL={process.env.REACT_APP_HOME_URL} />
            </MenuWrappedRoute>
          </Switch>
        </Wrapper>
        {/* <ToastListener /> */}
      </Suspense>
    </Router>
  )
}

export default React.memo(App)
