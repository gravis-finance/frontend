import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex, NumericalArrow, Text } from '@gravis.finance/uikit'
import AppItem from '../AppItem'
import { AppsConfig } from '../../../../config/constants/apps'

const Container = styled(Flex)`
  width: 74px;
  height: 35px;
  background-color: white;
  border-radius: 46px;
`

const StyledFlex = styled(Flex)<{ isOpen: boolean }>`
  cursor: pointer;
  > svg {
    transition: transform 200ms ease-in-out;
    ${({ isOpen }) => (isOpen ? 'transform: rotate(180deg);' : '')}
    * {
      fill: black;
    }
  }
`

const AppsContainer = styled(Flex)<{ isOpen: boolean }>`
  position: absolute;
  width: 1280px;
  height: 407px;
  right: 80px;

  background: #24272e;
  backdrop-filter: blur(200px);

  border-radius: 20px;

  padding: 30px;

  > div:not(:last-child) {
    margin-right: 16px;
  }

  :before {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    z-index: 2;
    border: 1px solid #24272e;
    transform: rotate(45deg);
    background: #24272e;
    top: -10px;
    right: 34px;
  }

  opacity: 0;
  top: -100%;
  pointer-events: none;
  transition: opacity 400ms ease-in-out, top 400ms ease-in-out;

  ${({ isOpen }) =>
    isOpen
      ? `
    opacity: 1;
    top: 100px;
    pointer-events: all;
  `
      : ''}
`

const Apps = () => {
  const [isOpen, setOpen] = useState(false)

  const onClick = (event) => {
    if (!event.target.closest(Container)) setOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [isOpen])

  return (
    <Container justifyContent="center" alignItems="center">
      <StyledFlex onClick={() => setOpen(!isOpen)} justifyContent="center" alignItems="center" isOpen={isOpen}>
        <Text color="black" fontSize="12px" style={{ fontWeight: 500 }}>
          Apps
        </Text>
        <NumericalArrow ml="6px" />
      </StyledFlex>
      <AppsContainer isOpen={isOpen}>
        {AppsConfig.map((app) => (
          <AppItem app={app} />
        ))}
        {/* <AppItem />
        <AppItem /> */}
      </AppsContainer>
    </Container>
  )
}

export default Apps
