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
  height: 130px;

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
`

const CellsContainer = styled(Flex)`
  > div:not(:last-child) {
    margin-right: 42px;
  }
`

const TokenomicTable = styled(Flex)``

type Props = {
  token?: TokenomicsTokenType
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

const TokenomicInfo: React.FC<Props> = ({ token = TokenomicsTokenType.GRVS }) => {
  const { tokenomicsConfig, cells, isLoading, links } = useTokenomicsConfig()

  const [openLinksModal] = useModal(<LinksModal links={links[token].seeMore} token={token} />)
  return (
    <Container>
      <Header alignItems="center" p="44px 45px" token={token}>
        <Flex justifyContent="space-between" width="100%">
          <CellsContainer>
            {cells[token].map((cell) => (
              <Flex flexDirection="column">
                <DefaultText fontWeight={500} fontSize="13px" color="rgba(255, 255, 255, 0.7)">
                  {cell.title}
                </DefaultText>
                <DefaultText fontWeight={700} fontSize="20px" color="rgb(255, 255, 255)">
                  {isLoading ? 'Loading...' : cell.text}
                </DefaultText>
              </Flex>
            ))}
          </CellsContainer>
          <Flex>
            <Button variant="light" mr={15} onClick={links[token].seeMore.length > 0 ? openLinksModal : undefined}>
              {links[token].seeMore.length > 0 ? 'See more' : 'Coming soon'}
            </Button>
            <Button variant="darkened" as="a" href={links[token].buyToken} target="_blank">
              Buy token
            </Button>
          </Flex>
        </Flex>
      </Header>
      <DefaultText fontWeight={600} fontSize="22px" textAlign="center" mt={35} mb={15}>
        Token utility value in Evervoid
      </DefaultText>
      <TokenomicTable flexWrap="wrap" m="-5px" p="0 25px 20px 25px">
        {tokenomicsConfig[token].map((item) => item)}
      </TokenomicTable>
    </Container>
  )
}

export default TokenomicInfo
