import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Box, Flex } from '@gravis.finance/uikit'
import * as styles from '../../styles'
import { ExternalIcon, GswapIcon } from '../Icons'
import { Button } from '../Button'
import { ComingSoon } from '../ComingSoon'

const { Container } = styles

const GswapImage = styled(Box)((props) =>
  css({
    backgroundImage: 'url(/landing/gswap.png)',
    backgroundRepeat: 'no-repeat',
    width: '30rem',
    height: '27.5rem',
    backgroundSize: 'contain',
    ...props,
  }),
)

const WalletContent = (props: React.ComponentProps<typeof Box>) => {
  return (
    <Box ml={{ _: '1.5rem', md: '8rem' }} mr={{ _: '1rem', md: 0 }} {...props}>
      <Box fontSize={{ _: '2.8rem', md: '6.2rem' }} fontWeight={600}>
        Gravis Finance
        <br />
        mobile wallet
      </Box>
      <Box
        opacity={0.7}
        fontSize={{ _: '1.4rem', md: '1.6rem' }}
        mt={{ _: '1rem', md: '1.5rem' }}
        fontWeight={500}
        lineHeight="145%"
      >
        Secure innovative solution for storing, receiving, sending
        <Box as="br" display={{ _: 'none', md: 'block' }} />
        and exchanging crypto assets using a smartphone
      </Box>
      <Box display={{ md: 'none' }} fontWeight="bold" fontSize="1.6rem" mt="3.5rem">
        Coming soon on
      </Box>
      <Box display="inline-flex" mt={{ _: '1.5rem', md: '3.5rem' }} gridGap="1.5rem">
        <ComingSoon variant="apple" />
        <ComingSoon variant="android" />
      </Box>
      <Box
        fontSize="1rem"
        width={{ _: '28.5rem', md: '39.2em' }}
        height={{ _: '44.5rem', md: '63.4em' }}
        position={{ _: 'relative', md: 'absolute' }}
        bottom={{ md: '0' }}
        right={{ md: '18rem' }}
        justifyContent="center"
        display={{ _: 'flex', md: 'inline-flex' }}
        overflow="hidden"
        m={{ _: '3.8rem auto 0', md: 0 }}
      >
        <Box
          as="video"
          className="object-cover"
          autoPlay
          muted
          loop
          playsInline
          width={{ _: '26rem', md: '35em' } as any}
          height={{ _: '56rem', md: '74em' } as any}
          borderRadius={40}
          m={{ _: '1rem auto', md: '2rem auto' }}
        >
          <source src="/landing/video_wallet.mp4" type="video/mp4" />
        </Box>
        <Box
          background="url(/landing/mockup.png) no-repeat"
          backgroundSize="contain"
          width={{ _: '28.5rem', md: '39.2em' }}
          height={{ _: '57.5rem', md: '79.1em' }}
          position="absolute"
          top={0}
          left={0}
        />
      </Box>
    </Box>
  )
}

export const GswapWalletScreen = () => {
  return (
    <>
      <Box className="sticky-container" minHeight="calc(100vh + 500px)">
        <Container {...styles.fullHeight} height={styles.vh100} className="sticky-content">
          <Box {...styles.content} py={{ _: '2rem', md: 0 }} display="flex" justifyContent="center" alignItems="center">
            <Box
              display={{ md: 'flex' }}
              width="100%"
              backgroundImage={{ _: 'url(/landing/bg8.png)', md: 'url(/landing/bg5.png)' }}
              backgroundRepeat="no-repeat"
              backgroundPosition={{ _: 'right', md: 'left' }}
              backgroundSize="cover"
              borderRadius="2rem"
              alignItems="center"
              mb={{ md: '2rem' }}
              height={{ _: '100%', md: '72rem' }}
              maxHeight={styles.vh100minusHeader}
            >
              <GswapImage m="auto" display={{ _: 'block', md: 'none' }} />
              <Box ml={{ _: '1.5rem', md: '75rem' }} mr={{ _: '1rem', md: 0 }}>
                <Box
                  alignItems="center"
                  gridGap="1.287rem"
                  fontSize="3.03rem"
                  fontWeight={500}
                  lineHeight="120%"
                  display={{ _: 'none', md: 'flex' }}
                >
                  <GswapIcon />
                  <div>Gswap</div>
                </Box>
                <Box fontSize={{ _: '2.8rem', md: '4.4rem' }} fontWeight={600} lineHeight="110%" mt="2.5rem">
                  Tools for successful
                  <br />
                  crypto trading
                </Box>
                <Box
                  opacity={0.7}
                  fontSize={{ _: '1.4rem', md: '1.6rem' }}
                  maxWidth="40.6rem"
                  mt="1rem"
                  fontWeight={500}
                  lineHeight="145%"
                >
                  We offer several features for decentralized trading. Swapping, liquidity pool, migration and more.
                </Box>
                <Flex mt={{ _: '2.5rem', md: '4rem' }} gridGap="1.5rem">
                  <Button as="a" target="_blank" href={process.env.REACT_APP_EXCHANGE_URL}>
                    Open Gswap
                  </Button>
                  <Button variant="dark" as="a" target="_blank" href={process.env.REACT_APP_GSWAP_DOCS_URL}>
                    <ExternalIcon mr="1rem" />
                    <div>Learn more</div>
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className="sticky-container" minHeight={{ md: 'calc(100vh + 500px)' }} id="mobilewallet">
        <Container {...styles.fullHeight} height={{ md: styles.vh100 }} className="md:sticky-content">
          <Box {...styles.content} py={{ _: '2rem', md: 0 }} display="flex" justifyContent="center" alignItems="center">
            <Flex
              width="100%"
              className="background-fixed"
              backgroundImage={{ _: 'url(/landing/bg8.png)', md: 'url(/landing/bg6.png)' }}
              backgroundRepeat="no-repeat"
              backgroundPosition={{ _: 'right', md: 'left' }}
              backgroundSize="cover"
              borderRadius="2rem"
              alignItems="center"
              mb={{ md: '2rem' }}
              height={{ _: '100%', md: '72rem' }}
              maxHeight={{ md: styles.vh100minusHeader }}
              position="relative"
              flexDirection={{ _: 'column', md: 'row' }}
            >
              <WalletContent mt={{ _: '2.5rem', md: 0 }} />
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  )
}
