import React from 'react'
import styled from 'styled-components'
import bg from 'assets/BG.png'
import Header from './components/Header'
import MainInfo from './components/MainInfo'
import Partners from './components/Partners'

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
      </Container>
    </>
  )
}

export default Landing
