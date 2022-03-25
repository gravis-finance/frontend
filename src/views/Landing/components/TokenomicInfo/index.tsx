import React from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, LinkExternal, Modal, useModal } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import useTokenomicsConfig from '../../../../hooks/useTokenomicsConfig'
import { TokenomicsTokenType } from '../../../../config/constants/types'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Container = styled(Box)`
  width: 100%;
  border-radius: 20px;

  @media (min-width: ${breakpoints.md}) {
    background: rgba(255, 255, 255, 0.05);
  }
`

const Header = styled(Flex)<{ token?: TokenomicsTokenType }>`
  height: 13rem;

  ${({ token }) =>
    token === TokenomicsTokenType.GRVX
      ? `
      background: linear-gradient(90.45deg, #99BC0E 0.18%, #10AE62 57.16%, #0A9FB3 100%);
      box-shadow: inset 0px 0px 75px #FFFFFF;
    `
      : `
    background: linear-gradient(90.45deg, #00b7d0 0.18%, #2f5dff 46.09%, #470ca6 100%),
    linear-gradient(0deg, #019ce2, #019ce2), rgba(255, 255, 255, 0.03);
    box-shadow: inset 0px 0px 75px rgba(255, 255, 255, 0.5);
  `}

  @media screen and (max-width: 852px) {
    //flex-direction: column;
    height: 100%;
  }
`

const StyledFlex = styled(Flex)`
  @media screen and (max-width: 852px) {
    flex-direction: column;
    height: 100%;
  }
`

const CellsContainer = styled(Flex)`
  > div:not(:last-child) {
    margin-right: 4.2rem;
  }
  @media screen and (max-width: 852px) {
    flex-direction: row;
    height: 100%;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    grid-gap: 2.5rem 3rem;

    > div:not(:last-child) {
      margin-right: 0;
    }
  }
`

const TokenomicTable = styled(Flex)`
  @media screen and (max-width: 852px) {
    justify-content: center;
  }
`

const ButtonFlex = styled(Flex)`
  @media screen and (max-width: 852px) {
    margin-top: 3rem;
    place-self: center;
  }
`

type Props = {
  token?: TokenomicsTokenType
  network?: string
}

const defaultOnDismiss = () => null

const LinksBlock = styled(Box)`
  > a:not(:last-child) {
    margin-bottom: 8px;
  }
`

const LinksModal = ({ links, token, onDismiss = defaultOnDismiss }) => {
  return (
    <Modal title={`${token} links`} onDismiss={onDismiss}>
      <LinksBlock>
        {links.map((item) => (
          <LinkExternal href={item.link} target="_blank">
            {item.text}
          </LinkExternal>
        ))}
      </LinksBlock>
    </Modal>
  )
}

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

const TokenomicInfo: React.FC<Props> = ({ token = TokenomicsTokenType.GRVS, network }) => {
  const { tokenomicsConfig, cells, isLoading, links } = useTokenomicsConfig(network)
  const shadowRightRef = React.useRef<HTMLDivElement>(null)
  const shadowLeftRef = React.useRef<HTMLDivElement>(null)
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

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

  const [openLinksModal] = useModal(<LinksModal links={links[token].seeMore} token={token} />)
  return (
    <Container>
      <Header
        alignItems="center"
        p={{ _: '2.5rem', md: '4.4rem 4.5rem' }}
        token={token}
        borderRadius={{ _: '15px', md: '20px 20px 0 0' }}
      >
        <StyledFlex justifyContent="space-between" width="100%">
          <CellsContainer>
            {cells[token].map((cell, index) => (
              <Flex flexDirection="column" key={index}>
                <DefaultText fontWeight={500} fontSize="1.3rem" color="rgba(255, 255, 255, 0.7)">
                  {cell.title}
                </DefaultText>
                <DefaultText fontWeight={700} fontSize="2rem" color="rgb(255, 255, 255)" mt="0.5rem">
                  {isLoading ? 'Loading...' : cell.text}
                </DefaultText>
              </Flex>
            ))}
          </CellsContainer>
          <ButtonFlex>
            <Button
              variant="light"
              mr="1.5rem"
              onClick={links[token].seeMore.length > 0 ? openLinksModal : undefined}
              className={!links[token].seeMore.length ? 'pointer-events-none' : undefined}
              style={{ letterSpacing: '-0.02em', fontSize: '1.4rem', height: '4.8rem', padding: '0 2.4rem' }}
            >
              {links[token].seeMore.length > 0 ? 'See more' : 'Coming soon'}
            </Button>
            <Button
              variant="darkened"
              as="a"
              href={links[token].buyToken}
              target="_blank"
              style={{ letterSpacing: '-0.02em', fontSize: '1.4rem', height: '4.8rem', padding: '0 2.4rem' }}
            >
              Buy token
            </Button>
          </ButtonFlex>
        </StyledFlex>
      </Header>
      <DefaultText fontWeight={600} fontSize={{ _: '1.6rem', md: '2.2rem' }} textAlign="center" mt="3.5rem" mb="1.5rem">
        Token utility value in Evervoid
      </DefaultText>
      <Box position="relative" width="100%">
        <ShadowLeft ref={shadowLeftRef} className="md:display-none" />
        <Box
          width="100%"
          overflow={{ _: 'auto', md: 'initial' }}
          className="no-scroll-bar"
          onScroll={onScroll}
          ref={scrollContainerRef}
        >
          <TokenomicTable
            flexWrap={{ md: 'wrap' }}
            m={{ md: '-0.5rem' }}
            p={{ _: '0 0 2rem 0', md: '0 2.5rem 2rem 2.5rem' }}
            width={{ _: 'fit-content', md: 'auto' }}
          >
            {tokenomicsConfig[token].map((item, index) => ({ ...item, key: index }))}
          </TokenomicTable>
        </Box>
        <ShadowRight ref={shadowRightRef} className="md:display-none" />
      </Box>
    </Container>
  )
}

export default TokenomicInfo
