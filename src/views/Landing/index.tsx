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
import { WhyTextSvg } from './components/WhyTextSvg'
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

const Container = styled(Box).attrs((props) => ({ position: 'relative', pt: styles.headerHeight, ...props }))`
  width: 100%;
  color: white;
  height: ${styles.vh100};
  background-color: #090d11;
`

const Layer1 = styled(Container)`
  background-image: url(${bg});
  background-color: #090d11;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
`

const Title = styled(Box)`
  font-weight: 600;
  font-size: 4.4rem;
  letter-spacing: -0.02em;
  line-height: 4.84rem;
`

const Layer2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
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

const Landing = () => {
  const isMobile = useResponsiveness()
  const [loading, setLoading] = React.useState(true)
  const layer1Ref = React.useRef<HTMLDivElement>(null)
  const layer2Ref = React.useRef<HTMLDivElement>(null)
  const layer3Ref = React.useRef<HTMLDivElement>(null)
  const layer4Ref = React.useRef<HTMLDivElement>(null)
  const anim1Ref = React.useRef<HTMLDivElement>(null)
  const anim2Ref = React.useRef<HTMLDivElement>(null)
  const anim3Ref = React.useRef<HTMLDivElement>(null)
  const anim4Ref = React.useRef<HTMLDivElement>(null)
  const videoLayerRef = React.useRef<HTMLDivElement>(null)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    ScrollTrigger.refresh()

    document.body.onload = () => {
      if (layer1Ref.current && anim1Ref.current) {
        gsap.from(anim1Ref.current, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: layer1Ref.current,
            scrub: 1,
            start: 'top top',
            end: 'bottom-=500 bottom',
          },
        })

        if (anim2Ref.current && layer1Ref.current) {
          const htmlFontSize = Number(window.getComputedStyle(document.documentElement).fontSize.replace('px', ''))
          const scale = isMobile ? 150 : window.innerWidth / htmlFontSize / 0.4114285714285714
          const x = isMobile ? 33 : window.innerWidth / htmlFontSize / 1.44

          gsap.from(anim2Ref.current, {
            keyframes: {
              '0%': { scale: () => scale, x: () => `${x}rem` },
              '30%': { scale: () => scale / 3, x: () => `${x / 3}rem` },
              '100%': {
                scale: 1,
                x: 0,
              },
            },
            ease: 'none',
            scrollTrigger: {
              trigger: layer1Ref.current,
              scrub: 1,
              start: 'top top',
              end: 'bottom-=500 bottom',
              onUpdate: (self) => {
                if (layer2Ref.current) {
                  layer2Ref.current.style['pointer-events'] = self.progress > 0.5 ? 'all' : 'none'
                }
              },
            },
          })
        }
      }

      if (anim3Ref.current) {
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
        ScrollTrigger.create({
          trigger: layer3Ref.current,
          scrub: 1,
          start: 'top+=100vh top',
          end: 'bottom-=100vh bottom',
          onUpdate: ({ progress }) => {
            if (progress >= 0 && progress <= 1) {
              anim4Ref.current.scrollTop = (anim4Ref.current.scrollHeight - anim4Ref.current.offsetHeight) * progress
            }
          },
        })
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
    }
  }, [isMobile])

  return (
    <Root>
      <Loader opacity={loading ? 1 : 0} zIndex={loading ? 999 : -1}>
        <Spinner size="6rem" />
      </Loader>
      <Header />
      <Box className="sticky-container" minHeight="calc(300vh + 500px)" ref={layer1Ref} id="whyus">
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
              opacity={1}
            />
            <Flex
              position="absolute"
              width="100%"
              height="100%"
              top={0}
              left={0}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <WhyTextSvg ref={anim2Ref} width={{ _: '31rem', md: '61rem' }} />
            </Flex>
          </Layer2>
        </Layer1>
      </Box>
      <span id="products">
        <Box className="sticky-content" minHeight="calc(100vh + 500px)">
          <Container maxHeight="90rem" className="sticky-content">
            <Box {...styles.content} display="flex" justifyContent="center" alignItems="center" ref={anim3Ref}>
              <Box width="100%" mb="10rem">
                <Title textAlign="center">All your DeFi apps one place</Title>
                <Box
                  display="grid"
                  mt="5rem"
                  gridGap="2rem"
                  gridTemplateColumns="repeat(auto-fill, minmax(40rem, 1fr))"
                >
                  {AppsConfig.map((app) => (
                    <AppItem app={app} key={app.title} width="auto" />
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </span>
      <Box className="sticky-container" minHeight="calc(100vh + 500px)">
        <Container zIndex={1} maxHeight="90rem" ref={layer4Ref} className="sticky-content">
          <Box {...styles.content} display="flex" justifyContent="center" alignItems="center">
            <Flex
              width="100%"
              height="72rem"
              background="url(/landing/bg1.png) no-repeat"
              backgroundSize="cover"
              borderRadius="2rem"
              alignItems="center"
              mb="2rem"
            >
              <Box ml="8rem">
                <EvervoidLogo width="14.5rem" height="2.65rem" />
                <Box fontSize="4.4rem" fontWeight={600} lineHeight="120%" mt="2rem">
                  Free-to-play
                  <br />
                  P2E NFT-based
                  <br />
                  MMO strategy
                  <br />
                </Box>
                <Box opacity={0.7} fontSize="1.6rem" maxWidth="33rem" mt="1rem" fontWeight={500} lineHeight="145%">
                  Includes various missions, staking crafting, equipment upgrades, lands and more
                </Box>
                <Flex mt="4rem" gridGap="1.5rem">
                  <Button>Play demo</Button>
                  <Button variant="dark">
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
      <Box position="relative" height="auto" minHeight="calc(min(180rem, 200vh) + 200vh)" ref={layer3Ref}>
        <Container maxHeight="90rem" className="sticky-content">
          <Box {...styles.content} display="flex" justifyContent="center" alignItems="center">
            <Box width="100%" height="72rem" mb="2rem" borderRadius="2rem" overflow="hidden" ref={anim4Ref}>
              <Flex
                background="url(/landing/bg2.png) no-repeat"
                backgroundSize="cover"
                alignItems="center"
                height="100%"
              >
                <Box ml="75rem">
                  <Flex alignItems="center" gridGap="1.287rem" fontSize="3.03rem" fontWeight={500} lineHeight="120%">
                    <GmartLogo />
                    <div>Gmart</div>
                  </Flex>
                  <Box fontSize="4.4rem" fontWeight={600} lineHeight="110%" mt="2.5rem">
                    Discover,
                    <br />
                    collect and sell <br />
                    extraordinary NFTs <br />
                  </Box>
                  <Box opacity={0.7} fontSize="1.6rem" maxWidth="40.6rem" mt="1rem" fontWeight={500} lineHeight="145%">
                    The first NFT marketplace focused solely on in-game assets. Built-in smart analytics for NFT
                    portfolio.
                  </Box>
                  <Flex mt="4rem" gridGap="1.5rem">
                    <Button>Explore</Button>
                    <Button variant="dark">
                      <ExternalIcon mr="1rem" />
                      <div>Learn more</div>
                    </Button>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                height="100%"
                background="url(/landing/bg3.png) no-repeat"
                backgroundSize="cover"
                alignItems="center"
                position="relative"
              >
                <Box ml="8rem">
                  <Box fontSize="6.2rem" fontWeight={600}>
                    Gmart on
                    <br />
                    your mobile
                  </Box>
                  <Flex
                    flexDirection="column"
                    gridGap="1.5rem"
                    fontSize="1.6rem"
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
                  <Box as="img" src="/landing/app_store_btns.png" mt="4.5rem" width="35.5rem" height="5rem" />
                </Box>
                <Box
                  as="img"
                  src="/landing/iphone.png"
                  width="39.2rem"
                  height="63.4rem"
                  position="absolute"
                  bottom={0}
                  right="18rem"
                />
              </Flex>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className="sticky-container" minHeight="calc(100vh + 500px)">
        <Container maxHeight="90rem" className="sticky-content">
          <Box {...styles.content} display="flex" justifyContent="center" alignItems="center">
            <Flex
              width="100%"
              height="72rem"
              background="url(/landing/bg5.png) no-repeat"
              backgroundSize="cover"
              borderRadius="2rem"
              alignItems="center"
              mb="2rem"
            >
              <Box ml="75rem">
                <Flex alignItems="center" gridGap="1.287rem" fontSize="3.03rem" fontWeight={500} lineHeight="120%">
                  <GswapIcon />
                  <div>Gswap</div>
                </Flex>
                <Box fontSize="4.4rem" fontWeight={600} lineHeight="110%" mt="2.5rem">
                  Tools for successful
                  <br />
                  crypto trading
                </Box>
                <Box opacity={0.7} fontSize="1.6rem" maxWidth="40.6rem" mt="1rem" fontWeight={500} lineHeight="145%">
                  We offer several features for decentralized trading.
                  <br />
                  Swapping, liquidity pool, migration and more.
                </Box>
                <Flex mt="4rem" gridGap="1.5rem">
                  <Button>Open Gswap</Button>
                  <Button variant="dark">
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
        <Container maxHeight="90rem" className="sticky-content">
          <Box {...styles.content} display="flex" justifyContent="center" alignItems="center">
            <Box width="100%">
              <Flex
                width="39.2rem"
                height="79.1rem"
                position="absolute"
                bottom={0}
                left="18rem"
                justifyContent="center"
                alignItems="center"
              >
                <Box as={Video} muted loop playsInline width="35rem" height="74rem" ref={videoRef}>
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
              </Flex>
              <Box position="absolute" bottom="31rem" right="18rem">
                <Box fontSize="6.2rem" fontWeight={600}>
                  Gravis Finance
                  <br />
                  mobile wallet
                </Box>
                <Box opacity={0.7} fontSize="1.6rem" mt="1.5rem" fontWeight={500} lineHeight="145%">
                  Secure innovative solution for storing, receiving, sending
                  <br />
                  and exchanging crypto assets using a smartphone
                </Box>
                <Flex mt="3.5rem" gridGap="1.5rem">
                  <ComingSoon variant="apple" />
                  <ComingSoon variant="android" />
                </Flex>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxHeight="90rem" id="roadmap">
        <Roadmap />
      </Container>
      <Container maxHeight="90rem" id="team">
        <Team />
      </Container>
      <Container maxHeight="90rem" id="tokenomics">
        <Box {...styles.content} overflowX="hidden">
          <Tokenomics />
        </Box>
      </Container>
      <Box position="relative" id="partners">
        <Partners />
      </Box>
      <Box position="relative">
        <Footer />
      </Box>
    </Root>
  )
}

export default Landing
