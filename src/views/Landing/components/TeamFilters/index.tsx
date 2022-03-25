import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import { TeamCategory } from '../../../../config/constants/team'

const Wrapper = styled(Box)`
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
`

const Container = styled(Flex)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4.5rem;
  position: relative;
  width: max-content;
`

const FilterItem = styled(DefaultText).attrs((props) => ({
  p: { _: '1.45rem 2rem', md: '1.45rem 2.5rem' },
  ...props,
}))<{ active: boolean }>`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ active }) => (active ? '#000' : 'rgba(255, 255, 255, 0.7)')};
  text-transform: capitalize;
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: color 200ms ease-in-out;
`

const SliderItem = styled.div<{ width: number; left: number }>`
  content: '';
  position: absolute;
  left: ${({ left }) => left}px;
  top: 0;
  background-color: white;
  border-radius: 45px;
  width: ${({ width }) => `${width}px`};
  height: 100%;
  z-index: 1;
  transition: width 200ms ease-in-out, left 200ms ease-in-out;
`

const ShadowRight = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  width: 40%;
  height: 100%;
  top: 0;
  background: linear-gradient(270deg, rgb(9 13 17), transparent);
  opacity: 1;
  pointer-events: none;
`

const ShadowLeft = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  width: 40%;
  height: 100%;
  top: 0;
  background: linear-gradient(90deg, rgb(9 13 17), transparent);
  opacity: 0;
  pointer-events: none;
`

const TeamFilters = ({ activeIndex, setActiveIndex }) => {
  const items = useMemo(() => Object.values(TeamCategory), [])
  const containerRef = useRef()
  const allItemRef = useRef(null)
  const shadowRightRef = React.useRef<HTMLDivElement>(null)
  const shadowLeftRef = React.useRef<HTMLDivElement>(null)
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const [sliderProps, setSliderProps] = useState({
    width: 0,
    left: 0,
  })

  const onItemClick = (e, index) => {
    setActiveIndex(index)
    setSliderProps({
      width: e.target.offsetWidth,
      // @ts-ignore
      left: e.target.getBoundingClientRect().left - containerRef.current.getBoundingClientRect().left,
    })
  }

  useEffect(() => {
    setSliderProps({
      width: allItemRef.current.offsetWidth,
      // @ts-ignore
      left: allItemRef.current.getBoundingClientRect().left - containerRef.current.getBoundingClientRect().left,
    })
  }, [allItemRef])

  const onScroll = () => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      const currentScroll = scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.offsetWidth)
      if (shadowRightRef.current && shadowLeftRef.current) {
        shadowLeftRef.current.style.opacity = currentScroll.toString()
        shadowRightRef.current.style.opacity = (1 - currentScroll).toString()
      }
    }
  }

  return (
    <Box position="relative" width={{ _: '100%', md: 'auto' }}>
      <ShadowLeft ref={shadowLeftRef} className="md:display-none" />
      <Wrapper width={{ _: '100%', md: 'auto' }} overflow="auto" ref={scrollContainerRef} onScroll={onScroll}>
        <Container ref={containerRef}>
          <SliderItem width={sliderProps.width} left={sliderProps.left} />
          <FilterItem onClick={(e) => onItemClick(e, 0)} active={activeIndex === 0} ref={allItemRef}>
            All
          </FilterItem>
          {items.map((item, index) => (
            // eslint-disable-next-line no-return-assign
            <FilterItem key={item} onClick={(e) => onItemClick(e, index + 1)} active={activeIndex === index + 1}>
              {item}
            </FilterItem>
          ))}
        </Container>
      </Wrapper>
      <ShadowRight ref={shadowRightRef} className="md:display-none" />
    </Box>
  )
}

export default TeamFilters
