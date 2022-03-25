import React from 'react'
import styled from 'styled-components'
import { Box, Spinner, Flex } from '@gravis.finance/uikit'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import MainInfo from './components/MainInfo'
import { useResponsiveness } from './useResponsiveness'
import * as styles from './styles'
import { AppsConfig } from '../../config/constants/apps'
import AppItem from './components/AppItem'
import { EvervoidLogo, ExternalIcon } from './components/Icons'
import { Button } from './components/Button'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Tokenomics from './components/Tokenomics'
import Partners from './components/Partners'
import Footer from './components/Footer'
import { Trailer } from './components/Trailer'
import { GmartScreen } from './components/GmartScreen'
import { GswapWalletScreen } from './components/GswapWalletScreen'
import { breakpoints } from '../../contexts/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

const RootWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Loader = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #090d11;
  transition: opacity 1s;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Root = styled.div`
  width: 100%;
  color: white;
  letter-spacing: -0.02em;
  background-color: #090d11;

  @media (max-width: ${breakpoints.md}) and (orientation: landscape) {
    max-width: 375px;
  }
`

const Container = styled(Box).attrs((props) => ({
  position: 'relative',
  pt: styles.headerHeight,
  height: { md: styles.vh100 } as any,
  ...props,
}))`
  width: 100%;
  color: white;
  background-color: #090d11;
`

const Layer1 = styled(Container)`
  height: ${styles.vh100};
`

const Title = styled(Box).attrs((props) => ({
  fontSize: { _: '3.2rem', md: '4.4rem' },
  lineHeight: { _: '110%', md: '4.84rem' },
  ...props,
}))`
  font-weight: 600;
  letter-spacing: -0.02em;
`

const Layer2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`

const MobileBG = styled(Box)`
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Landing = () => {
  const { isMobile, activated } = useResponsiveness()
  const [loading, setLoading] = React.useState(true)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const layer1Ref = React.useRef<HTMLDivElement>(null)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const layer2Ref = React.useRef<HTMLDivElement>(null)
  const layer4Ref = React.useRef<HTMLDivElement>(null)
  const anim1Ref = React.useRef<HTMLDivElement>(null)
  const anim3Ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (activated) {
      window.scrollTo(0, 0)

      if (layer1Ref.current && anim1Ref.current) {
        gsap.to(anim1Ref.current, {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: layer1Ref.current,
            scrub: 0.5,
            start: 'top top',
            end: 'bottom-=800 bottom',
          },
        })
      }

      if (!isMobile && anim3Ref.current) {
        gsap.to(anim3Ref.current, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: layer4Ref.current,
            scrub: 1,
            start: 'top bottom',
            end: 'top top',
          },
        })
      }

      setLoading(false)
    }
  }, [isMobile, activated])

  React.useLayoutEffect(() => {
    const canvas = canvasRef.current
    const containerWidth = () => rootRef.current.offsetWidth
    const containerHeight = () => window.innerHeight
    const resize = () => {
      canvas.width = containerWidth()
      canvas.height = containerHeight()
    }
    if (activated && canvas) {
      resize()
      window.addEventListener('resize', resize, false)
      const vertical = containerHeight() > containerWidth()
      const config = vertical
        ? {
            src: '/landing/why_m.svg',
            widthFrom: 8684,
            heightFrom: 6075,
            windowWidthFrom: 375,
            windowHeightFrom: 667,
            yFrom: 800,
            xFrom: 0,
            widthTo: 236,
            heightTo: 165,
          }
        : {
            src: '/landing/why.svg',
            widthFrom: 222411.77,
            heightFrom: 24846,
            windowWidthFrom: 1440,
            windowHeightFrom: 900,
            yFrom: 1920,
            xFrom: 1440,
            widthTo: 614,
            heightTo: 68,
          }
      const ctx = canvasRef.current.getContext('2d')
      const img = new Image()
      img.src = config.src
      img.onload = () => {
        const baseWidth = () => (config.widthFrom / config.windowWidthFrom) * containerWidth()
        const baseHeight = () => (config.heightFrom / config.windowHeightFrom) * containerHeight()
        const widthFrom = () => (vertical ? (baseHeight() * config.widthFrom) / config.heightFrom : baseWidth())
        const widthEnd = () => {
          const fontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize)
          return (config.widthTo / 10) * fontSize
        }
        const values = { width: 0, height: 0, x: 0, y: 0 }
        gsap.fromTo(
          values,
          {
            y: () => (config.yFrom / config.widthFrom) * widthFrom(),
            x: () => (config.xFrom / config.widthFrom) * widthFrom(),
            width: () => widthFrom(),
            height: () => widthFrom() / (config.widthFrom / config.heightFrom),
            scrollTrigger: {
              invalidateOnRefresh: true,
            },
          },
          {
            y: 0,
            x: 0,
            width: () => widthEnd(),
            height: () => widthEnd() / (config.widthTo / config.heightTo),
            scrollTrigger: {
              invalidateOnRefresh: true,
              trigger: layer1Ref.current,
              scrub: 0,
              start: 'top top',
              end: 'bottom-=800 bottom',
              onUpdate: () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(
                  img,
                  canvas.width / 2 - values.width / 2 + values.x,
                  canvas.height / 2 - values.height / 2 + values.y,
                  values.width,
                  values.height,
                )
              },
            },
          },
        )
      }
    }

    return () => {
      if (activated && canvas) {
        window.removeEventListener('resize', resize, false)
      }
    }
  }, [activated])

  return (
    <RootWrapper>
      <Root ref={rootRef}>
        <Loader opacity={loading ? 1 : 0} zIndex={loading ? 999 : -1}>
          <Spinner size="6rem" />
        </Loader>
        <Header />
        <Box className="sticky-container" minHeight="calc(300vh + 800px)" ref={layer1Ref}>
          <Layer1 className="sticky-content">
            <Box position="absolute" top={0} left={0} width="100%" height="100%" overflow="hidden">
              <Box as="img" src="/landing/bg.jpg" className="object-cover absolute-fill" />
              <VideoBg autoPlay muted loop playsInline className="rotate-180">
                <source src="/landing/video_bg.m4v" type="video/mp4" />
              </VideoBg>
            </Box>
            <MainInfo />
            <Layer2 ref={layer2Ref}>
              <Box
                position="absolute"
                backgroundColor="#090d11"
                top={0}
                left={0}
                ref={anim1Ref}
                width="100%"
                height="100%"
                opacity={0}
              />
              <Canvas ref={canvasRef} />
            </Layer2>
          </Layer1>
        </Box>
        <span id="whyus">
          <Box className="md:sticky-content" minHeight={{ md: 'calc(100vh + 500px)' }}>
            <Container maxHeight={{ md: '90rem' }} className="md:sticky-content">
              <Box {...styles.content} display="flex" justifyContent="center" alignItems="center" ref={anim3Ref}>
                <Box width="100%" mb={{ _: 0, md: '10rem' }}>
                  <Title textAlign="center" p={{ _: '0 1rem', md: 0 }}>
                    All your DeFi apps one place
                  </Title>
                  <Box
                    display="grid"
                    mt={{ _: '2.5rem', md: '5rem' }}
                    gridGap={{ _: '1rem', md: '2rem' }}
                    gridTemplateColumns={{
                      _: 'repeat(auto-fit, minmax(30rem, 1fr))',
                      md: 'repeat(auto-fit, minmax(40rem, 1fr))',
                    }}
                  >
                    {AppsConfig.map((app) => (
                      <AppItem app={app} key={app.title} />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </span>
        <Box className="sticky-container" minHeight="calc(100vh + 500px)" id="products">
          <Container zIndex={1} {...styles.fullHeight} height={styles.vh100} ref={layer4Ref} className="sticky-content">
            <Box
              {...styles.content}
              py={{ _: '2rem', md: 0 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                width="100%"
                height={{ _: '100%', md: '72rem' }}
                maxHeight={styles.vh100minusHeader}
                background="url(/landing/bg1.png) no-repeat"
                backgroundSize="cover"
                backgroundPosition="top"
                borderRadius="2rem"
                alignItems={{ _: 'flex-end', md: 'center' }}
                mb={{ _: 0, md: '2rem' }}
                pb={{ _: '4rem', md: 0 }}
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width="100%"
                  height="100%"
                  overflow="hidden"
                  borderRadius="inherit"
                >
                  <VideoBg autoPlay muted loop playsInline>
                    <source src="/landing/video_evervoid.m4v" type="video/mp4" />
                  </VideoBg>
                </Box>
                <MobileBG display={{ _: 'block', md: 'none' }} />
                <Box ml={{ _: '1.5rem', md: '8rem' }} mr={{ _: '1.5rem', md: 0 }} zIndex={1}>
                  <EvervoidLogo width={{ _: '12.7rem', md: '14.5rem' }} height={{ _: '2.3rem', md: '2.65rem' }} />
                  <Box fontSize={{ _: '2.8rem', md: '4.4rem' }} fontWeight={600} lineHeight="120%" mt="2rem">
                    Free-to-play
                    <br />
                    P2E NFT-based
                    <br />
                    MMO strategy
                    <br />
                  </Box>
                  <Box
                    opacity={0.7}
                    fontSize={{ _: '1.4rem', md: '1.6rem' }}
                    maxWidth={{ md: '33rem' }}
                    mt="1rem"
                    fontWeight={500}
                    lineHeight="145%"
                  >
                    Includes various missions, staking crafting, equipment upgrades, lands and more
                  </Box>
                  <Flex mt={{ _: '2.5rem', md: '4rem' }} gridGap="1.5rem">
                    <Button as="a" target="_blank" href={`${process.env.REACT_APP_ASTEROID_MINING_URL}/missions`}>
                      Play demo
                    </Button>
                    <Button variant="dark" as="a" target="_blank" href={process.env.REACT_APP_EVERVOID_DOCS_URL}>
                      <ExternalIcon mr="1rem" />
                      <div>Learn more</div>
                    </Button>
                  </Flex>
                  <Trailer mt="1.5rem" width="28rem" />
                </Box>
              </Flex>
            </Box>
          </Container>
        </Box>
        <GmartScreen />
        <GswapWalletScreen />
        <Container id="roadmap">
          <Roadmap />
        </Container>
        <Container id="team" height={{ _: styles.vh100, md: 'auto' }}>
          <Box {...styles.content}>
            <Team />
          </Box>
        </Container>
        <Container id="tokenomics" height="auto">
          <Box {...styles.content} overflowX="hidden">
            <Tokenomics />
          </Box>
        </Container>
        <Container id="partners" height="auto">
          <Box {...styles.content}>
            <Partners />
          </Box>
        </Container>
        <Box position="relative">
          <Footer />
        </Box>
      </Root>
    </RootWrapper>
  )
}

export default Landing
