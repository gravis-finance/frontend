import React from 'react'
import { Box, Flex } from '@gravis.finance/uikit'
import { gsap } from 'gsap'
import * as styles from '../../styles'
import { CheckMarkIcon, ExternalIcon, GmartLogo } from '../Icons'
import { Button } from '../Button'
import { ComingSoon } from '../ComingSoon'
import useMediaQuery from '../../../../hooks/useMediaQuery'
import { breakpoints } from '../../../../contexts/ThemeContext'

const { Container } = styles

export const GmartScreen = () => {
  const layerRef = React.useRef<HTMLDivElement>(null)
  const animRef = React.useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.sm})`)

  React.useEffect(() => {
    if (!isMobile && animRef.current) {
      gsap.fromTo(
        animRef.current,
        {
          yPercent: 0,
        },
        {
          yPercent: () => -50,
          scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: layerRef.current,
            scrub: 0.2,
            start: 'top top',
            end: 'bottom top',
          },
        },
      )
    }
  }, [isMobile])

  return (
    <Box position="relative" height="auto" minHeight={{ sm: 'calc(min(180rem, 200vh) + 100vh)' }}>
      <Container {...styles.fullHeight} height={{ sm: styles.vh100 }} className="sm:sticky-content">
        <Box {...styles.content} display="flex" justifyContent="center" alignItems="center">
          <Box
            width="100%"
            height={{ _: '100%', sm: '72rem' }}
            background={{ _: 'url(/landing/bg7.png) no-repeat', sm: 'initial' }}
            backgroundSize="cover"
            mb="2rem"
            borderRadius="2rem"
            overflow="hidden"
            ref={layerRef}
          >
            <Box ref={animRef} className="will-change" height={{ _: '100%', sm: 'initial' }}>
              <Flex
                backgroundImage={{ sm: 'url(/landing/bg2.png)' }}
                backgroundRepeat="no-repeat"
                backgroundPosition={{ _: 'right', sm: 'left top' }}
                backgroundSize="cover"
                alignItems="center"
                height={{ _: '100%', sm: '72rem' }}
                mt={{ _: '23.1rem', sm: 0 }}
              >
                <Box ml={{ _: '1.5rem', sm: '75rem' }} mr={{ _: '1.5rem', sm: 0 }}>
                  <Flex
                    alignItems="center"
                    gridGap="1.287rem"
                    fontSize={{ _: '2.22rem', sm: '3.03rem' }}
                    fontWeight={500}
                    lineHeight="120%"
                  >
                    <GmartLogo size={{ _: '2.6rem', sm: '3.6rem' }} />
                    <div>Gmart</div>
                  </Flex>
                  <Box
                    fontSize={{ _: '2.8rem', sm: '4.4rem' }}
                    fontWeight={600}
                    lineHeight="110%"
                    mt={{ _: '2rem', sm: '2.5rem' }}
                  >
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
                  <Flex mt={{ _: '2.5rem', sm: '4rem' }} gridGap="1.5rem">
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
                height={{ _: '100%', sm: '72rem' }}
                backgroundImage={{ sm: 'url(/landing/bg3.png)' }}
                backgroundRepeat="no-repeat"
                backgroundPosition={{ _: 'right', sm: 'left top' }}
                backgroundSize="cover"
                alignItems={{ sm: 'center' }}
                position="relative"
                mt={{ _: '9.5rem', sm: 0 }}
                flexDirection={{ _: 'column', sm: 'row' }}
              >
                <Box ml={{ _: '1.5rem', sm: '8rem' }}>
                  <Box fontSize={{ _: '2.8rem', sm: '6.2rem' }} fontWeight={600}>
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
                    mt={{ _: '1.5rem', sm: '3rem' }}
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
                  <Box display={{ sm: 'none' }} fontWeight="bold" fontSize="1.6rem" mt="3.5rem">
                    Coming soon on
                  </Box>
                  <Box display="inline-flex" mt={{ _: '1.5rem', sm: '3.5rem' }} gridGap="1.5rem">
                    <ComingSoon variant="apple" />
                    <ComingSoon variant="android" />
                  </Box>
                </Box>
                <Box
                  fontSize="1rem"
                  width={{ _: '28.5rem', sm: '39.2em' }}
                  height={{ _: '44.5rem', sm: '63.4em' }}
                  position={{ _: 'relative', sm: 'absolute' }}
                  bottom={{ sm: '0' }}
                  right={{ sm: '18rem' }}
                  justifyContent="center"
                  display="inline-flex"
                  overflow="hidden"
                  m={{ _: '3.8rem auto 0', sm: 0 }}
                >
                  <Box
                    as="video"
                    className="object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    width={{ _: '26rem', sm: '35em' } as any}
                    height={{ _: '56rem', sm: '74em' } as any}
                    borderRadius={40}
                    m={{ _: '1rem auto', sm: '2rem auto' }}
                  >
                    <source src="/landing/video_gmart.mp4" type="video/mp4" />
                  </Box>
                  <Box
                    background="url(/landing/mockup.png) no-repeat"
                    backgroundSize="contain"
                    width={{ _: '28.5rem', sm: '39.2em' }}
                    height={{ _: '57.5rem', sm: '79.1em' }}
                    position="absolute"
                    top={0}
                    left={0}
                  />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
