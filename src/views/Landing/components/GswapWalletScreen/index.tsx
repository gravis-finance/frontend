import React from 'react'
import { Box, Flex } from '@gravis.finance/uikit'
import * as styles from '../../styles'
import { ExternalIcon, GswapIcon } from '../Icons'
import { Button } from '../Button'
import { ComingSoon } from '../ComingSoon'

const { Container } = styles

export const GswapWalletScreen = () => {
  return (
    <>
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
      <Box className="sticky-container" minHeight="calc(100vh + 500px)" id="mobilewallet">
        <Container {...styles.fullHeight} height={styles.vh100} className="sticky-content">
          <Box {...styles.content} display="flex" justifyContent="center" alignItems="center">
            <Flex
              width="100%"
              background="url(/landing/bg6.png) no-repeat"
              backgroundPosition={{ _: 'right', md: 'left' }}
              backgroundSize="cover"
              borderRadius="2rem"
              alignItems="center"
              mb="2rem"
              height="72rem"
              maxHeight={styles.vh100minusHeader}
              position="relative"
            >
              <Box ml={{ _: '1.5rem', sm: 'auto', md: '8rem' }} mr={{ _: '1rem', sm: '10rem', md: 0 }}>
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
                <Box
                  fontSize="1rem"
                  width="39.2em"
                  height="63.4em"
                  position={{ _: 'relative', md: 'absolute' }}
                  bottom="0"
                  right="18rem"
                  justifyContent="center"
                  display={{ _: 'none', md: 'inline-flex' }}
                  overflow="hidden"
                >
                  <Box
                    as="video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    width="35em"
                    height="74em"
                    borderRadius={40}
                    m="2rem auto"
                    className="object-cover"
                  >
                    <source src="/landing/video_wallet.mp4" type="video/mp4" />
                  </Box>
                  <Box
                    background="url(/landing/mockup.png) no-repeat"
                    backgroundSize="contain"
                    width="39.2em"
                    height="79.1em"
                    position="absolute"
                    top={0}
                    left={0}
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  )
}
