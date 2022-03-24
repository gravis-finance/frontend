import React from 'react'
import { Box, Flex } from '@gravis.finance/uikit'
import { Button } from '../Button'
import { AndroidIcon, AppleIcon } from '../Icons'

export const ComingSoon = ({ variant }: { variant: 'apple' | 'android' }) => {
  const isApple = variant === 'apple'
  const label = isApple ? 'App Store' : 'Goolge Play'

  return (
    <Button
      variant="dark"
      className="pointer-events-none"
      height="5rem"
      p={{ _: '1.45rem 2rem', md: '1.45rem 2.5rem' }}
    >
      <Flex alignItems="center" gridGap="1.5rem">
        {isApple ? <AppleIcon /> : <AndroidIcon />}
        <Box lineHeight="1" textAlign="left">
          <Box opacity="0.5" fontSize="1.1rem" fontWeight={500} display={{ _: 'none', md: 'block' }}>
            Coming soon on
          </Box>
          <Box mt={{ _: 0, md: '0.5rem' }} fontWeight={600} fontSize="1.4rem">
            {label}
          </Box>
        </Box>
      </Flex>
    </Button>
  )
}
