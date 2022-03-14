import React from 'react'
import styled from 'styled-components'
import { GitHubIcon } from '@gravis.finance/uikit/dist/cjs/widgets/Menu/icons'
import { Box, Button, Flex, OpenNewIcon, Text } from '@gravis.finance/uikit'
import { Audit } from '../../../config/constants/audits'

const Container = styled.div`
  background-color: #303030;
  max-width: 738px;
  height: auto;
  padding: 24px;
  border-radius: 6px;
  width: 424px;
  transition: transform 200ms ease-in-out;
  position: relative;

  :hover {
    transform: scale(1.015);
  }
`

type Props = {
  audit: Audit
}

const Image = styled.img`
  border-radius: 8px;
  max-height: 300px;
`

const StyledBox = styled(Box)`
  > a:not(:last-child) {
    margin-bottom: 4px;
  }
`

const ItemFlex = styled(Flex)`
  cursor: pointer;
  > div {
    color: #009ce1;
    transition: color 200ms ease-in-out;
  }

  > svg {
    :first-child * {
      fill: #009ce1;
      transition: fill 200ms ease-in-out;
    }
    :last-child {
      * {
        stroke: #009ce1;
        transition: stroke 200ms ease-in-out;
      }
    }
  }

  :hover {
    > div {
      color: white;
    }

    > svg {
      :first-child * {
        fill: white;
      }
      :last-child * {
        stroke: white;
      }
    }
  }
`

const SmallBox = styled(Box)`
  width: 64px;
  height: 64px;
  position: absolute;
  right: -12px;
  top: -12px;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    border: 4px solid #303030;
    background-color: white;
    padding: 8px;
  }
`

const AuditItem: React.FC<Props> = ({ audit }) => {
  const { title, href, img, date, items, smallImg } = audit
  return (
    <Container>
      <SmallBox>
        <img src={smallImg} alt={title} />
      </SmallBox>
      <Box borderBottom="1px solid rgba(255,255,255,0.05)" pb={16}>
        <Text fontSize="24px" bold>
          {title}
        </Text>
        <Text color="rgba(255,255,255,0.5)">{date}</Text>
      </Box>
      <Flex justifyContent="center" p={16}>
        <Image src={img} alt={title} />
      </Flex>
      <StyledBox borderTop="1px solid rgba(255,255,255,0.05)" pt={16} pb={16}>
        {items.map((item) => (
          <ItemFlex alignItems="center" as="a" href={item.href} target="_blank">
            <GitHubIcon />
            <Text ml="8px">{item.title} Contract</Text>
            <OpenNewIcon color="primary" ml="12px" width={20} />
          </ItemFlex>
        ))}
      </StyledBox>
      <Flex borderTop="1px solid rgba(255,255,255,0.05)" pt={16} justifyContent="center">
        <Button as="a" href={href} target="_blank">
          View on GitHub
        </Button>
      </Flex>
    </Container>
  )
}

export default AuditItem
