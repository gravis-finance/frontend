import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ChevronLeftIcon, ChevronRightIcon, Flex } from '@gravis.finance/uikit'
import ScrollContainer from 'react-indiana-drag-scroll'
import { ReactComponent as ScrollHintIcon } from 'assets/svg/scroll-hint.svg'
import DefaultText from '../../../../components/DefaultText'
import RoadmapItem from '../RoadmapItem'
import { roadmapConfig } from '../../../../config/constants/roadmap'
import useMediaQuery from '../../../../hooks/useMediaQuery'

const Container = styled.div`
  padding: 7.7rem 0;
  height: fit-content;
`

const StyledScrollContainer = styled(ScrollContainer)`
  display: flex;
  padding: 0 8rem;
  scroll-behavior: smooth;
  > div:not(:last-child) {
    margin-right: 1rem;
  }
`

const ButtonsContainer = styled(Flex)`
  @media screen and (max-width: 515px) {
    display: none;
  }
`

const ButtonArrow = styled(Flex)`
  justify-content: center;
  width: 5rem;
  height: 5rem;
  user-select: none;

  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 100%;
  transition: background-color 200ms ease-in-out;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const StyledFlex = styled(Flex)`
  @media screen and (max-width: 515px) {
    justify-content: center;
  }
`

const StyledScrollHint = styled.div`
  display: none;
  @media screen and (max-width: 515px) {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`

const Roadmap = () => {
  const scrollRef = useRef(null)
  const isMobile = useMediaQuery(`(max-width: 515px)`)

  useEffect(() => {
    if (scrollRef.current) {
      if (isMobile) {
        const childNodes = scrollRef.current?.container?.current?.childNodes
        const difference = childNodes[1].getBoundingClientRect().left - childNodes[0].getBoundingClientRect().left
        const center = (childNodes[5].getBoundingClientRect().left + difference) / 2
        scrollRef.current?.container.current.scrollTo(center, 0)
      } else scrollRef.current?.container.current.scrollTo(312.5 * 3 + 10 * 3, 0)
    }
  }, [isMobile, scrollRef])

  const makeScroll = (option) => {
    const childNodes = scrollRef.current?.container?.current?.childNodes
    const difference = childNodes[1].getBoundingClientRect().left - childNodes[0].getBoundingClientRect().left
    const currentContainer = scrollRef.current?.container.current
    const containerScrollLeft = currentContainer.scrollLeft

    const foundNextElement = Object.values(childNodes).find(
      (el) =>
        // @ts-ignore
        containerScrollLeft + 100 + difference >= el.offsetLeft &&
        // @ts-ignore
        containerScrollLeft + 100 + difference <= el.offsetLeft + difference,
    )

    const foundPrevElement = Object.values(childNodes).find(
      (el) =>
        // @ts-ignore
        containerScrollLeft - 100 - difference >= el.offsetLeft &&
        // @ts-ignore
        containerScrollLeft - 100 - difference <= el.offsetLeft + difference,
    )

    if (option === 'next') {
      // @ts-ignore
      currentContainer.scrollTo(foundNextElement?.offsetLeft - 80, 0)
    } else {
      // @ts-ignore
      currentContainer.scrollTo(foundPrevElement?.offsetLeft + difference - 80, 0)
    }
  }

  return (
    <Container>
      <StyledFlex alignItems="center" justifyContent="space-between" m="0 8.1rem 4.2rem 8.1rem">
        <DefaultText fontWeight={700} fontSize="4.4rem">
          Roadmap
        </DefaultText>
        <ButtonsContainer>
          <ButtonArrow mr="1rem" onClick={() => makeScroll('prev')}>
            <ChevronLeftIcon />
          </ButtonArrow>
          <ButtonArrow onClick={() => makeScroll('next')}>
            <ChevronRightIcon />
          </ButtonArrow>
        </ButtonsContainer>
      </StyledFlex>
      <StyledScrollHint>
        <ScrollHintIcon />
      </StyledScrollHint>
      <StyledScrollContainer vertical={false} ref={scrollRef}>
        {roadmapConfig.map((item) => (
          <RoadmapItem item={item} key={item.period} />
        ))}
      </StyledScrollContainer>
    </Container>
  )
}

export default Roadmap
