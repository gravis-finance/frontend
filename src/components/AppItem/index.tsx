import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Text } from '@gravis.finance/uikit'
import { AppItemType } from '../../config/constants/apps'

const Container = styled(Flex)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  width: 396.67px;
  height: 347px;
`

type Props = {
  app: AppItemType
}

const AppItem: React.FC<Props> = ({ app }) => {
  const { title, description, icon: Icon, href } = app
  return (
    <Container alignItems="center" flexDirection="column" p={30} justifyContent="space-between">
      <Flex alignItems="center" flexDirection="column">
        <Icon />
        <Text fontSize="24px" style={{ fontWeight: 800, letterSpacing: '-0.02em' }} mt={20}>
          {title}
        </Text>
        <Text style={{ textAlign: 'center', letterSpacing: '0px' }} fontSize="14px" mt="3px">
          {description.split('\n').map((str) => (
            <p>{str}</p>
          ))}
        </Text>
      </Flex>
      <Button
        fullwidth
        variant="light"
        style={{ height: '50px', letterSpacing: '-0.02em' }}
        as="a"
        href={href}
        target="_blank"
      >
        Open {title}
      </Button>
    </Container>
  )
}

export default AppItem
