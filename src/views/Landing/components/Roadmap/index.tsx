import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ChevronLeftIcon, ChevronRightIcon, Flex } from '@gravis.finance/uikit'
import ScrollContainer from 'react-indiana-drag-scroll'
import DefaultText from '../../../../components/DefaultText'
import RoadmapItem from '../RoadmapItem'
import { roadmapConfig } from '../../../../config/constants/roadmap'

const Container = styled.div`
  margin: 77px 0;
  height: calc(100vh - 170px);
`

const StyledScrollContainer = styled(ScrollContainer)`
  display: flex;
  padding: 0 40px;
  scroll-behavior: smooth;
  > div:not(:last-child) {
    margin-right: 10px;
  }
`

const ButtonsContainer = styled(Flex)``

const ButtonArrow = styled(Flex)`
  justify-content: center;
  width: 50px;
  height: 50px;

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
    if (scrollRef.current) scrollRef.current?.container.current.scrollTo(312.5 * 2 - 20, 0)
  }, [scrollRef])

  const makeScroll = (option) => {
    if (option === 'next')
      scrollRef.current?.container.current.scrollTo(scrollRef.current?.container.current.scrollLeft + 322.5, 0)
    else {
      scrollRef.current?.container.current.scrollTo(scrollRef.current?.container.current.scrollLeft - 322.5, 0)
    }
  }

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between" m="0 81px 42px 81px">
        <DefaultText fontWeight={700} fontSize="44px">
          Roadmap
        </DefaultText>
        <ButtonsContainer>
          <ButtonArrow mr="10px" onClick={() => makeScroll('prev')}>
            <ChevronLeftIcon />
          </ButtonArrow>
          <ButtonArrow onClick={() => makeScroll('next')}>
            <ChevronRightIcon />
          </ButtonArrow>
        </ButtonsContainer>
      </Flex>
      <StyledScrollContainer vertical={false} ref={scrollRef}>
        {roadmapConfig.map((item) => (
          <RoadmapItem item={item} />
        ))}
      </StyledScrollContainer>
    </Container>
  )
}

export default Roadmap
