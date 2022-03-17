import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import { TeamCategory } from '../../../../config/constants/team'

const Container = styled(Flex)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4.5rem;
  position: relative;

  @media screen and (max-width: 910px) {
    margin-top: 2.4rem;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`

const FilterItem = styled(DefaultText)<{ active: boolean }>`
  padding: 1.45rem 2.5rem;
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

const TeamFilters = ({ activeIndex, setActiveIndex }) => {
  const items = useMemo(() => Object.values(TeamCategory), [])
  const containerRef = useRef()
  const allItemRef = useRef(null)

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

  return (
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
  )
}

export default TeamFilters
