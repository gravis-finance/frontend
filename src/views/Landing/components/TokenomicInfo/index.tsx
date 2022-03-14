import React from 'react'
import styled from 'styled-components'
import { Box, Button, Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'

const Container = styled(Box)`
  width: 100%;
  height: 569px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
`

const Header = styled(Flex)`
  background: linear-gradient(90.45deg, #00b7d0 0.18%, #2f5dff 46.09%, #470ca6 100%),
    linear-gradient(0deg, #019ce2, #019ce2), rgba(255, 255, 255, 0.03);
  box-shadow: inset 0px 0px 75px rgba(255, 255, 255, 0.5);
  border-radius: 20px 20px 0px 0px;
  height: 130px;
`

const CellsContainer = styled(Flex)`
  > div:not(:last-child) {
    margin-right: 42px;
  }
`

const Cells = [
  {
    title: 'Price',
    text: '$0.03',
  },
  {
    title: 'Chains',
    text: 'BSC, Polygon',
  },
  {
    title: 'Max supply',
    text: '1 000 000',
  },
  {
    title: 'Circulation supply',
    text: '802 923 423',
  },
  {
    title: 'Burned',
    text: '23 812 912',
  },
]

const TokenomicInfo = () => {
  return (
    <Container>
      <Header alignItems="center" p="44px 45px">
        <Flex justifyContent="space-between" width="100%">
          <CellsContainer>
            {Cells.map((cell) => (
              <Flex flexDirection="column">
                <DefaultText fontWeight={500} fontSize="13px" color="rgba(255, 255, 255, 0.7)">
                  {cell.title}
                </DefaultText>
                <DefaultText fontWeight={700} fontSize="20px" color="rgb(255, 255, 255)">
                  {cell.text}
                </DefaultText>
              </Flex>
            ))}
          </CellsContainer>
          <Flex>
            <Button variant="light" mr={15}>
              See more
            </Button>
            <Button variant="darkened">Buy token</Button>
          </Flex>
        </Flex>
      </Header>
      <DefaultText fontWeight={600} fontSize="22px" textAlign="center" mt={35} mb={15}>
        Token utility value in Evervoid
      </DefaultText>
    </Container>
  )
}

export default TokenomicInfo
