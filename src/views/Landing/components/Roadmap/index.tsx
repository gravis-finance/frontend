import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ChevronLeftIcon, ChevronRightIcon, Flex, Box } from '@gravis.finance/uikit'
import ScrollContainer from 'react-indiana-drag-scroll'
import DefaultText from '../../../../components/DefaultText'
import RoadmapItem from '../RoadmapItem'
import { roadmapConfig } from '../../../../config/constants/roadmap'
import useMediaQuery from '../../../../hooks/useMediaQuery'
import * as styles from '../../styles'

const Container = styled(Box).attrs(() => ({
  p: { _: '2rem 0', md: '7.7rem 0' },
}))`
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

  &[data-disabled='true'] {
    opacity: 0.8;
    pointer-events: none;
  }
`

const Roadmap = () => {
  const scrollRef = useRef(null)
  const isMobile = useMediaQuery(`(max-width: 515px)`)
  const [canScroll, setCanScroll] = React.useState({ left: true, right: true })

  useEffect(() => {
    const scrollContainer = scrollRef.current?.container?.current
    const onScroll = () => {
      setCanScroll({
        left: scrollContainer.scrollLeft > 0,
        right: scrollContainer.scrollLeft + scrollContainer.offsetWidth < scrollContainer.scrollWidth,
      })
    }
    if (scrollContainer) {
      onScroll()
      scrollContainer.addEventListener('scroll', onScroll, true)
      if (isMobile) {
        const childNodes = scrollRef.current?.container?.current?.childNodes
        const difference = childNodes[1].getBoundingClientRect().left - childNodes[0].getBoundingClientRect().left
        const center = (childNodes[5].getBoundingClientRect().left + difference) / 2
        scrollRef.current?.container.current.scrollTo(center, 0)
      } else scrollRef.current?.container.current.scrollTo(312.5 * 3 + 10 * 3, 0)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', onScroll, true)
      }
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
      <Flex {...styles.content} alignItems="center" justifyContent="space-between" mb={{ md: '4.2rem' }}>
        <DefaultText fontWeight={700} fontSize={{ _: '3.2rem', md: '4.4rem' }}>
          Roadmap
        </DefaultText>
        <Flex>
          <ButtonArrow mr="1rem" onClick={() => makeScroll('prev')} data-disabled={!canScroll.left}>
            <ChevronLeftIcon />
          </ButtonArrow>
          <ButtonArrow onClick={() => makeScroll('next')} data-disabled={!canScroll.right}>
            <ChevronRightIcon />
          </ButtonArrow>
        </Flex>
      </Flex>
      <Box mt={{ _: '1.5rem', md: '4.2rem' }}>
        <StyledScrollContainer vertical={false} ref={scrollRef}>
          {roadmapConfig.map((item) => (
            <RoadmapItem item={item} key={item.period} />
          ))}
        </StyledScrollContainer>
      </Box>
    </Container>
  )
}

export default Roadmap
