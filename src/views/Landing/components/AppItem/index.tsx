import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@gravis.finance/uikit'
import { Button } from '../Button'
import { AppItemType } from '../../../../config/constants/apps'

const Container = styled(Flex).attrs((props) => ({
  height: { _: 'auto', sm: '34.7rem' },
  ...props,
}))`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
`

const IconWrapper = styled(Flex)<{ backgroundColor: string }>`
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 100%;
`

type Props = React.ComponentProps<typeof Flex> & {
  app: AppItemType
}

const AppItem: React.FC<Props> = ({ app, ...props }) => {
  const { title, description, icon: Icon, href, backgroundColor } = app
  return (
    <Container alignItems="center" flexDirection="column" p="3rem" justifyContent="space-between" {...props}>
      <Flex alignItems="center" flexDirection="column">
        <Flex alignItems="center" flexDirection={{ _: 'row', sm: 'column' }} gridGap={{ _: '1.5rem', sm: '2rem' }}>
          <IconWrapper justifyContent="center" backgroundColor={backgroundColor}>
            <Icon size={{ _: '5rem', sm: '8rem' }} />
          </IconWrapper>
          <Text fontSize="2.4rem" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
            {title}
          </Text>
        </Flex>
        <Text style={{ textAlign: 'center', letterSpacing: '0px' }} fontSize="1.4rem" mt={{ _: '1rem', sm: '0.3rem' }}>
          {description.split('\n').map((str) => (
            <p key={str}>{str}</p>
          ))}
        </Text>
      </Flex>
      <Button width="100%" as="a" href={href} target="_blank" mt={{ _: '2.5rem', sm: 0 }}>
        Open {title}
      </Button>
    </Container>
  )
}

export default AppItem
