import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperClass from 'swiper/types/swiper-class'
import { ChevronLeftIcon, ChevronRightIcon, Flex, Box } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import RoadmapItem from '../RoadmapItem'
import { roadmapConfig } from '../../../../config/constants/roadmap'
import useMediaQuery from '../../../../hooks/useMediaQuery'
import * as styles from '../../styles'
import 'swiper/swiper.scss'

const Container = styled(Box).attrs(() => ({
  p: { _: '2rem 0', md: '7.7rem 0' },
}))`
  height: fit-content;

  .swiper-slide {
    width: 31.25rem;
    height: 51.6rem;
    min-width: 31.25rem;
    min-height: 51.6rem;

    &:nth-child(n + 2) {
      margin-left: 1rem;
    }
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

  :hover:not[data-disabled='true'] {
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
  const swiperRef = React.useRef<SwiperClass>(null)

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
    if (option === 'next') {
      swiperRef.current.slideNext()
    } else {
      swiperRef.current.slidePrev()
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
      <Box mt={{ _: '1.5rem', md: '4.2rem' }} mx="2rem">
        <Swiper
          centeredSlides
          centeredSlidesBounds
          centerInsufficientSlides
          slidesPerView="auto"
          initialSlide={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onProgress={(swiper) => {
            setCanScroll({
              left: !swiper.isBeginning,
              right: !swiper.isEnd,
            })
          }}
        >
          {roadmapConfig.map((item) => (
            <SwiperSlide key={item.period}>
              <RoadmapItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  )
}

export default Roadmap
