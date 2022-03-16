import React from 'react'
import styled from 'styled-components'
import bg from 'assets/BG.png'
import Header from './components/Header'
import MainInfo from './components/MainInfo'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Tokenomics from './components/Tokenomics'
import Partners from './components/Partners'
import Footer from './components/Footer'

const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 900px;
`

const Landing = () => {
  return (
    <>
      <Container>
        <Header />
        <MainInfo />
        <Roadmap />
        <Team />
        <Tokenomics />
        <Partners />
        <Footer />
      </Container>
    </>
  )
}

export default Landing
