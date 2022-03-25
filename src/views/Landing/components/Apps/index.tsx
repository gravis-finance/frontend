import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Box, Flex, NumericalArrow, Text } from '@gravis.finance/uikit'
import AppItem from '../AppItem'
import { AppsConfig } from '../../../../config/constants/apps'
import useMediaQuery from '../../../../hooks/useMediaQuery'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Container = styled(Flex)`
  width: 7.4rem;
  height: 3.5rem;
  background-color: white;
  border-radius: 4.6rem;
`

const StyledFlex = styled(Flex)<{ isOpen: boolean }>`
  cursor: pointer;
  user-select: none;
  > svg {
    transition: transform 200ms ease-in-out;
    ${({ isOpen }) => (isOpen ? '' : 'transform: rotate(180deg);')}
    * {
      fill: black;
    }
  }
`

const AppsContainer = styled(Flex)<{ isOpen: boolean; isMobile?: boolean }>`
  position: absolute;
  width: 100%;
  height: auto;
  right: 0;
  background: #24272e;
  backdrop-filter: blur(200px);
  border-radius: 20px;
  padding: 3rem;

  > div:not(:last-child) {
    margin-right: 1.6rem;
  }

  :before {
    content: '';
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
    z-index: 2;
    border: 1px solid #24272e;
    transform: rotate(45deg);
    background: #24272e;
    top: -1rem;
    right: 4.4rem;
    border-radius: 5px;
  }

  opacity: 0;
  pointer-events: none;
  transition: opacity 400ms ease-in-out, top 400ms ease-in-out;

  ${({ isOpen }) =>
    isOpen
      ? `
    opacity: 1;
    pointer-events: all;
  `
      : ''}

  ${({ isMobile }) =>
    isMobile
      ? `
    overflow: auto;
    height: calc(100vh - 7rem);
  `
      : ''}
`

const BlurredBackground = styled(Box)``

type Props = {
  setShowBlurred?: (state: boolean) => void
}

const Apps: React.FC<Props> = ({ setShowBlurred }) => {
  const [isOpen, setOpen] = useState(false)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`)
  const appContainerRef = useRef(null)

  const setOpenState = useCallback(
    (state) => {
      setOpen(state)
      setShowBlurred(state)
    },
    [setShowBlurred],
  )

  const onClick = useCallback(
    (event) => {
      if (isMobile && !event.target.closest(StyledFlex)) setOpenState(false)
      else if (!event.target.closest(Container)) setOpenState(false)
    },
    [isMobile, setOpenState],
  )

  useEffect(() => {
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [isOpen, onClick])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
      if (isMobile) appContainerRef?.current?.scrollTo(0, 0)
    } else document.body.style.overflowY = 'auto'
  }, [isMobile, isOpen])

  return (
    <Container justifyContent="center" alignItems="center">
      <BlurredBackground />
      <StyledFlex onClick={() => setOpenState(!isOpen)} justifyContent="center" alignItems="center" isOpen={isOpen}>
        <Text color="black" fontSize="1.2rem" style={{ fontWeight: 500 }}>
          Apps
        </Text>
        <NumericalArrow ml="0.6rem" width="0.9rem" height="0.4rem" />
      </StyledFlex>
      <AppsContainer
        isOpen={isOpen}
        top={isOpen ? { _: '7rem', md: '10rem' } : '-100%'}
        isMobile={isMobile}
        ref={appContainerRef}
      >
        <Box
          width="100%"
          display="grid"
          gridGap="2rem"
          gridTemplateColumns={{
            _: 'repeat(auto-fill, minmax(30rem, 1fr))',
            md: 'repeat(auto-fill, minmax(40rem, 1fr))',
          }}
        >
          {AppsConfig.map((app) => (
            <AppItem app={app} key={app.title} />
          ))}
        </Box>
      </AppsContainer>
    </Container>
  )
}

export default Apps
