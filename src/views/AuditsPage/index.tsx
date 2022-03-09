import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@gravis.finance/uikit'
import Page from '../../components/layout/Page'
import { Audits } from '../../config/constants/audits'
import AuditItem from './components'

const GreetingsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
  }

  button {
    z-index: 1;
  }
`

const StyledAppContainer = styled.div`
  height: 100%;
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 825px) {
    padding: 28px 10px 0 10px;
  }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Container = styled(Flex)`
  justify-content: center;
`

const StyledFlex = styled(Flex)`
  flex-wrap: wrap;
  margin: -12px;
  width: 90%;

  > div {
    margin: 12px;
  }
`

const AuditsPage: React.FC = () => {
  return (
    <Page>
      <GreetingsWrapper>
        <StyledAppContainer>
          <Body>
            <Text mb={48} fontSize="38px" style={{ textAlign: 'center' }} bold>
              Gravis Finance completed smart contracts audits:
            </Text>
            <Container>
              <StyledFlex>
                {Audits.map((audit) => (
                  <AuditItem audit={audit} />
                ))}
              </StyledFlex>
            </Container>
          </Body>
        </StyledAppContainer>
      </GreetingsWrapper>
    </Page>
  )
}

export default AuditsPage
