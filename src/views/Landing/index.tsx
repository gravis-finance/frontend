import React from 'react'
import styled from 'styled-components'
import bg from 'assets/BG.png'
import Header from '../../components/Header'

const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  height: 100vh;
`

const Landing = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default Landing
