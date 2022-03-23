import React from 'react'
import styled from 'styled-components'
import { Box, Spinner, Flex } from '@gravis.finance/uikit'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bg from 'assets/BG.png'
import Header from './components/Header'
import MainInfo from './components/MainInfo'
import { useResponsiveness } from './useResponsiveness'
import * as styles from './styles'
import { AppsConfig } from '../../config/constants/apps'
import AppItem from './components/AppItem'
import {
  EvervoidLogo,
  GmartLogo,
  ExternalIcon,
  CheckMarkIcon,
  AppleIcon,
  AndroidIcon,
  GswapIcon,
} from './components/Icons'
import { Button } from './components/Button'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Tokenomics from './components/Tokenomics'
import Partners from './components/Partners'
import Footer from './components/Footer'
import { Trailer } from './components/Trailer'
import { breakpoints } from '../../contexts/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

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
  background-image: url(${bg});
  background-color: #090d11;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
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

const ComingSoon = ({ variant }: { variant: 'apple' | 'android' }) => {
  const isApple = variant === 'apple'
  const label = isApple ? 'App Store' : 'Goolge Play'

  return (
    <Button variant="dark" className="pointer-events-none" height="5rem">
      <Flex alignItems="center" gridGap="1.5rem">
        {isApple ? <AppleIcon /> : <AndroidIcon />}
        <Box lineHeight="1" textAlign="left">
          <Box opacity="0.5" fontSize="1.1rem" fontWeight={500}>
            Coming soon on
          </Box>
          <Box mt="0.5rem" fontWeight={600} fontSize="1.4rem">
            {label}
          </Box>
        </Box>
      </Flex>
    </Button>
  )
}

const Video = styled.video`
  object-fit: cover;
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
`

const Landing = () => {
  const isMobile = useResponsiveness()
  const [loading, setLoading] = React.useState(true)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const layer1Ref = React.useRef<HTMLDivElement>(null)
  const layer2Ref = React.useRef<HTMLDivElement>(null)
  const layer3Ref = React.useRef<HTMLDivElement>(null)
  const layer4Ref = React.useRef<HTMLDivElement>(null)
  const anim1Ref = React.useRef<HTMLDivElement>(null)
  const anim3Ref = React.useRef<HTMLDivElement>(null)
  const anim4Ref = React.useRef<HTMLDivElement>(null)
  const videoLayerRef = React.useRef<HTMLDivElement>(null)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    ScrollTrigger.refresh()

    if (layer1Ref.current && anim1Ref.current) {
      gsap.to(anim1Ref.current, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: layer1Ref.current,
          scrub: 0.5,
          start: 'top top',
          end: 'bottom-=1000 bottom',
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

    if (anim4Ref.current) {
      gsap.fromTo(
        anim4Ref.current,
        {
          yPercent: 0,
        },
        {
          yPercent: -50,
          scrollTrigger: {
            trigger: layer3Ref.current,
            scrub: 0.2,
            start: 'top top',
            end: 'bottom top',
          },
        },
      )
    }

    if (videoLayerRef.current) {
      ScrollTrigger.create({
        trigger: videoLayerRef.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => videoRef.current.play(),
        onEnterBack: () => videoRef.current.play(),
        onLeave: () => videoRef.current.pause(),
        onLeaveBack: () => videoRef.current.pause(),
      })
    }

    setLoading(false)
  }, [isMobile])

  React.useLayoutEffect(() => {
    const canvas = canvasRef.current
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    if (canvas) {
      resize()
      window.addEventListener('resize', resize, false)
      const mobile = window.innerHeight > window.innerWidth && window.innerWidth < parseFloat(breakpoints.sm)
      const config = mobile
        ? {
            src: '/landing/why_m.svg',
            widthFrom: 8684,
            heightFrom: 6075,
            windowWidthFrom: 375,
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
            yFrom: 1920,
            xFrom: 1440,
            widthTo: 614,
            heightTo: 68,
          }
      const ctx = canvasRef.current.getContext('2d')
      const img = new Image()
      img.src = config.src
      img.onload = () => {
        const baseWidth = () => (config.widthFrom / config.windowWidthFrom) * window.innerWidth
        const endWidth = () => {
          const fontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize)
          return (config.widthTo / 10) * fontSize
        }
        const values = { width: 0, height: 0, x: 0, y: 0 }
        gsap.fromTo(
          values,
          {
            y: () => (config.yFrom / config.widthFrom) * baseWidth(),
            x: () => (config.xFrom / config.widthFrom) * baseWidth(),
            width: () => baseWidth(),
            height: () => baseWidth() / (config.widthFrom / config.heightFrom),
            scrollTrigger: {
              invalidateOnRefresh: true,
            },
          },
          {
            y: 0,
            x: 0,
            width: () => endWidth(),
            height: () => endWidth() / (config.widthTo / config.heightTo),
            scrollTrigger: {
              invalidateOnRefresh: true,
              trigger: layer1Ref.current,
              scrub: 0,
              start: 'top top',
              end: 'bottom-=1000 bottom',
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
      if (canvas) {
        window.removeEventListener('resize', resize, false)
      }
    }
  }, [])

  return (
    <Root>
      <Loader opacity={loading ? 1 : 0} zIndex={loading ? 999 : -1}>
        <Spinner size="6rem" />
      </Loader>
      <Header />
      <Box className="sticky-container" minHeight="calc(300vh + 1000px)" ref={layer1Ref} id="whyus">
        <Layer1 className="sticky-content">
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
      <span id="products">
        <Box className="md:sticky-content" minHeight={{ md: 'calc(100vh + 500px)' }}>
          <Container maxHeight={{ md: '90rem' }} className="md:sticky-content">
            <Box {...styles.content} display="flex" justifyContent="center" alignItems="center" ref={anim3Ref}>
              <Box width="100%" mb={{ _: 0, sm: '10rem' }}>
                <Title textAlign="center" p={{ _: '0 1rem', md: 0 }}>
                  All your DeFi apps one place
                </Title>
                <Box
                  display="grid"
                  mt={{ _: '2.5rem', md: '5rem' }}
                  gridGap={{ _: '1rem', sm: '2rem' }}
                  gridTemplateColumns={{
                    _: 'repeat(auto-fill, minmax(30rem, 1fr))',
                    md: 'repeat(auto-fill, minmax(40rem, 1fr))',
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
      <Box className="sticky-container" minHeight="calc(100vh + 500px)">
        <Container zIndex={1} {...styles.fullHeight} height={styles.vh100} ref={layer4Ref} className="sticky-content">
          <Box {...styles.content} p={{ _: '2rem', sm: 0 }} display="flex" justifyContent="center" alignItems="center">
            <Flex
              width="100%"
              height={{ _: '100%', sm: '72rem' }}
              maxHeight={styles.vh100minusHeader}
              background="url(/landing/bg1.png) no-repeat"
              backgroundSize="cover"
              backgroundPosition="top"
              borderRadius="2rem"
              alignItems={{ _: 'flex-end', sm: 'center' }}
              mb={{ _: 0, sm: '2rem' }}
              pb={{ _: '4rem', sm: 0 }}
            >
              <MobileBG display={{ _: 'block', sm: 'none' }} />
              <Box ml={{ _: '1.5rem', sm: '8rem' }} mr={{ _: '1.5rem', sm: 0 }} zIndex={1}>
                <EvervoidLogo width={{ _: '12.7rem', sm: '14.5rem' }} height={{ _: '2.3rem', sm: '2.65rem' }} />
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
                  fontSize={{ _: '1.4rem', sm: '1.6rem' }}
                  maxWidth={{ sm: '33rem' }}
                  mt="1rem"
                  fontWeight={500}
                  lineHeight="145%"
                >
                  Includes various missions, staking crafting, equipment upgrades, lands and more
                </Box>
                <Flex mt={{ _: '2.5rem', sm: '4rem' }} gridGap="1.5rem">
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
      <Box position="relative" height="auto" minHeight="calc(min(180rem, 200vh) + 100vh)">
        <Container {...styles.fullHeight} height={styles.vh100} className="sticky-content">
          <Box {...styles.content} display="flex" justifyContent="center" alignItems="center">
            <Box width="100%" height="72rem" mb="2rem" borderRadius="2rem" overflow="hidden" ref={layer3Ref}>
              <Box ref={anim4Ref} className="will-change">
                <Flex
                  background="url(/landing/bg2.png) no-repeat"
                  backgroundPosition={{ _: 'right', md: 'left' }}
                  backgroundSize="cover"
                  alignItems="center"
                  height="72rem"
                >
                  <Box ml={{ _: '1.5rem', sm: 'auto', md: '75rem' }} mr={{ _: '1.5rem', sm: '10rem', md: 0 }}>
                    <Flex alignItems="center" gridGap="1.287rem" fontSize="3.03rem" fontWeight={500} lineHeight="120%">
                      <GmartLogo />
                      <div>Gmart</div>
                    </Flex>
                    <Box fontSize={{ _: '3.2rem', sm: '4.4rem' }} fontWeight={600} lineHeight="110%" mt="2.5rem">
                      Discover,
                      <br />
                      collect and sell <br />
                      extraordinary NFTs <br />
                    </Box>
                    <Box
                      opacity={0.7}
                      fontSize={{ _: '1.4rem', sm: '1.6rem' }}
                      maxWidth="40.6rem"
                      mt="1rem"
                      fontWeight={500}
                      lineHeight="145%"
                    >
                      The first NFT marketplace focused solely on in-game assets. Built-in smart analytics for NFT
                      portfolio.
                    </Box>
                    <Flex mt="4rem" gridGap="1.5rem">
                      <Button as="a" target="_blank" href={process.env.REACT_APP_GMART_URL}>
                        Explore
                      </Button>
                      <Button variant="dark" as="a" target="_blank" href={process.env.REACT_APP_GMART_DOCS_URL}>
                        <ExternalIcon mr="1rem" />
                        <div>Learn more</div>
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  height="72rem"
                  background="url(/landing/bg3.png) no-repeat"
                  backgroundPosition={{ _: 'right', md: 'left' }}
                  backgroundSize="cover"
                  alignItems="center"
                  position="relative"
                >
                  <Box ml={{ _: '1.5rem', sm: '8rem' }}>
                    <Box fontSize={{ _: '4.4rem', sm: '6.2rem' }} fontWeight={600}>
                      Gmart on
                      <br />
                      your mobile
                    </Box>
                    <Flex
                      flexDirection="column"
                      gridGap="1.5rem"
                      fontSize={{ _: '1.4rem', sm: '1.6rem' }}
                      fontWeight={500}
                      lineHeight="2.3rem"
                      mt="3rem"
                    >
                      <Flex alignItems="center" gridGap="1rem">
                        <CheckMarkIcon />
                        <div>All GamiFi NFTs in one app</div>
                      </Flex>
                      <Flex alignItems="center" gridGap="1rem">
                        <CheckMarkIcon />
                        <div>Quick purchase</div>
                      </Flex>
                      <Flex alignItems="center" gridGap="1rem">
                        <CheckMarkIcon />
                        <div>Portfolio tracking</div>
                      </Flex>
                      <Flex alignItems="center" gridGap="1rem">
                        <CheckMarkIcon />
                        <div>Smart recommendations</div>
                      </Flex>
                      <Flex alignItems="center" gridGap="1rem">
                        <CheckMarkIcon />
                        <div>Push notifications</div>
                      </Flex>
                    </Flex>
                    <Box
                      as="img"
                      src="/landing/app_store_btns.png"
                      mt="4.5rem"
                      width={{ _: '30rem', sm: '35.5rem' } as any}
                      height="5rem"
                      className="object-contain pointer-events-none"
                    />
                  </Box>
                  <Box
                    as="img"
                    src="/landing/iphone.png"
                    width="39.2rem"
                    height="63.4rem"
                    position="absolute"
                    bottom={0}
                    right="18rem"
                    display={{ _: 'none', md: 'block' }}
                    className="pointer-events-none"
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className="sticky-container" minHeight="calc(100vh + 500px)">
        <Container {...styles.fullHeight} height={styles.vh100} className="sticky-content">
          <Box {...styles.content} display="flex" justifyContent="center" alignItems="center">
            <Flex
              width="100%"
              background="url(/landing/bg5.png) no-repeat"
              backgroundPosition={{ _: 'right', md: 'left' }}
              backgroundSize="cover"
              borderRadius="2rem"
              alignItems="center"
              mb="2rem"
              height="72rem"
              maxHeight={styles.vh100minusHeader}
            >
              <Box ml={{ _: '1.5rem', sm: 'auto', md: '75rem' }} mr={{ _: '1rem', sm: '10rem', md: 0 }}>
                <Flex alignItems="center" gridGap="1.287rem" fontSize="3.03rem" fontWeight={500} lineHeight="120%">
                  <GswapIcon />
                  <div>Gswap</div>
                </Flex>
                <Box fontSize={{ _: '3.2rem', sm: '4.4rem' }} fontWeight={600} lineHeight="110%" mt="2.5rem">
                  Tools for successful
                  <br />
                  crypto trading
                </Box>
                <Box
                  opacity={0.7}
                  fontSize={{ _: '1.4rem', sm: '1.6rem' }}
                  maxWidth="40.6rem"
                  mt="1rem"
                  fontWeight={500}
                  lineHeight="145%"
                >
                  We offer several features for decentralized trading. Swapping, liquidity pool, migration and more.
                </Box>
                <Flex mt="4rem" gridGap="1.5rem">
                  <Button as="a" target="_blank" href={process.env.REACT_APP_EXCHANGE_URL}>
                    Open Gswap
                  </Button>
                  <Button variant="dark" as="a" target="_blank" href={process.env.REACT_APP_GSWAP_DOCS_URL}>
                    <ExternalIcon mr="1rem" />
                    <div>Learn more</div>
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
      <Box className="sticky-container" minHeight="calc(100vh + 500px)" ref={videoLayerRef} id="mobilewallet">
        <Container {...styles.fullHeight} height={styles.vh100} className="sticky-content">
          <Box {...styles.content} display="flex" justifyContent="center" alignItems="center">
            <Box width="100%" textAlign={{ _: 'center', md: 'left' }}>
              <Box
                display="inline-flex"
                fontSize={{ _: '0.6vh', md: '1rem' }}
                width="39.2em"
                height="79.1em"
                position={{ _: 'relative', md: 'absolute' }}
                bottom={{ md: 0 }}
                left={{ md: '18rem' }}
                justifyContent="center"
                alignItems="center"
              >
                <Box as={Video} muted loop playsInline width="35em" height="74em" ref={videoRef}>
                  <source src="/landing/video.mp4" type="video/mp4" />
                </Box>
                <Box
                  background="url(/landing/mockup.png) no-repeat"
                  backgroundSize="contain"
                  width="100%"
                  height="100%"
                  position="absolute"
                  top={0}
                  left={0}
                />
              </Box>
              <Box
                position={{ md: 'absolute' }}
                bottom={{ md: '31rem' }}
                right={{ md: '18rem' }}
                mt={{ _: '1rem', md: 0 }}
              >
                <Box fontSize={{ _: '3.2rem', sm: '6.2rem' }} fontWeight={600}>
                  Gravis Finance
                  <br />
                  mobile wallet
                </Box>
                <Box
                  opacity={0.7}
                  fontSize={{ _: '1.4rem', sm: '1.6rem' }}
                  mt={{ _: '1rem', md: '1.5rem' }}
                  fontWeight={500}
                  lineHeight="145%"
                >
                  Secure innovative solution for storing, receiving, sending
                  <Box as="br" display={{ _: 'none', sm: 'block' }} />
                  and exchanging crypto assets using a smartphone
                </Box>
                <Box
                  display="inline-flex"
                  mt={{ _: '1rem', md: '3.5rem' }}
                  gridGap="1.5rem"
                  flexDirection={{ _: 'column', sm: 'row' }}
                >
                  <ComingSoon variant="apple" />
                  <ComingSoon variant="android" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container id="roadmap">
        <Roadmap />
      </Container>
      <Container id="team" height={{ _: styles.vh100, sm: 'auto' }}>
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
  )
}

export default Landing
