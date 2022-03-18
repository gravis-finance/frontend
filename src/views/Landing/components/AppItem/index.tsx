import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@gravis.finance/uikit'
import { Button } from '../Button'
import { AppItemType } from '../../../../config/constants/apps'

const Container = styled(Flex)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  height: 34.7rem;
`

type Props = React.ComponentProps<typeof Flex> & {
  app: AppItemType
}

const AppItem: React.FC<Props> = ({ app, ...props }) => {
  const { title, description, icon: Icon, href } = app
  return (
    <Container alignItems="center" flexDirection="column" p="3rem" justifyContent="space-between" {...props}>
      <Flex alignItems="center" flexDirection="column">
        <Icon />
        <Text fontSize="2.4rem" style={{ fontWeight: 800, letterSpacing: '-0.02em' }} mt={20}>
          {title}
        </Text>
        <Text style={{ textAlign: 'center', letterSpacing: '0px' }} fontSize="1.4rem" mt="0.3rem">
          {description.split('\n').map((str) => (
            <p key={str}>{str}</p>
          ))}
        </Text>
      </Flex>
      <Button width="100%" as="a" href={href} target="_blank">
        Open {title}
      </Button>
    </Container>
  )
}

export default AppItem
