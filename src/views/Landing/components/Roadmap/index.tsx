import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ChevronLeftIcon, ChevronRightIcon, Flex } from '@gravis.finance/uikit'
import ScrollContainer from 'react-indiana-drag-scroll'
import DefaultText from '../../../../components/DefaultText'
import RoadmapItem from '../RoadmapItem'
import { roadmapConfig } from '../../../../config/constants/roadmap'

const Container = styled.div`
  margin: 7.7rem 0;
  height: calc(100vh - 17rem);
`

const StyledScrollContainer = styled(ScrollContainer)`
  display: flex;
  padding: 0 8rem;
  scroll-behavior: smooth;
  > div:not(:last-child) {
    margin-right: 1rem;
  }
`

const ButtonsContainer = styled(Flex)``

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

const Roadmap = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current?.container.current.scrollTo(312.5 * 3 + 10 * 3, 0)
  }, [scrollRef])

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
      <Flex alignItems="center" justifyContent="space-between" m="0 8.1rem 4.2rem 8.1rem">
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
      </Flex>
      <StyledScrollContainer vertical={false} ref={scrollRef}>
        {roadmapConfig.map((item) => (
          <RoadmapItem item={item} key={item.period} />
        ))}
      </StyledScrollContainer>
    </Container>
  )
}

export default Roadmap
