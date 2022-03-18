import React from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, LinkExternal, Modal, useModal } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import useTokenomicsConfig from '../../../../hooks/useTokenomicsConfig'
import { TokenomicsTokenType } from '../../../../config/constants/types'

const Container = styled(Box)`
  width: 100%;
  //height: 558px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
`

const Header = styled(Flex)<{ token?: TokenomicsTokenType }>`
  border-radius: 20px 20px 0px 0px;
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
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    > div:not(:last-child) {
      margin-right: 0;
      margin-bottom: 1.6rem;
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
    margin-top: 1.6rem;
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

const TokenomicInfo: React.FC<Props> = ({ token = TokenomicsTokenType.GRVS, network }) => {
  const { tokenomicsConfig, cells, isLoading, links } = useTokenomicsConfig(network)

  const [openLinksModal] = useModal(<LinksModal links={links[token].seeMore} token={token} />)
  return (
    <Container>
      <Header alignItems="center" p="4.4rem 4.5rem" token={token}>
        <StyledFlex justifyContent="space-between" width="100%">
          <CellsContainer>
            {cells[token].map((cell, index) => (
              <Flex flexDirection="column" key={index}>
                <DefaultText fontWeight={500} fontSize="1.3rem" color="rgba(255, 255, 255, 0.7)">
                  {cell.title}
                </DefaultText>
                <DefaultText fontWeight={700} fontSize="2rem" color="rgb(255, 255, 255)">
                  {isLoading ? 'Loading...' : cell.text}
                </DefaultText>
              </Flex>
            ))}
          </CellsContainer>
          <ButtonFlex>
            <Button variant="light" mr="1.5rem" onClick={links[token].seeMore.length > 0 ? openLinksModal : undefined}>
              {links[token].seeMore.length > 0 ? 'See more' : 'Coming soon'}
            </Button>
            <Button variant="darkened" as="a" href={links[token].buyToken} target="_blank">
              Buy token
            </Button>
          </ButtonFlex>
        </StyledFlex>
      </Header>
      <DefaultText fontWeight={600} fontSize="2.2rem" textAlign="center" mt={35} mb={15}>
        Token utility value in Evervoid
      </DefaultText>
      <TokenomicTable flexWrap="wrap" m="-0.5rem" p="0 2.5rem 2rem 2.5rem">
        {tokenomicsConfig[token].map((item, index) => ({ ...item, key: index }))}
      </TokenomicTable>
    </Container>
  )
}

export default TokenomicInfo
