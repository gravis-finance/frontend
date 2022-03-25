import styled from 'styled-components'
import Container from './Container'

const Page = styled(Container)`
  height: 100%;
  min-height: calc(100vh - 97px);
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 0;
  padding-left: 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

export default Page
