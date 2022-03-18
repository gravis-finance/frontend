import React from 'react'
import { Box } from '@gravis.finance/uikit'

type Styles = React.ComponentProps<typeof Box>

export const vh100 = 'calc(var(--vh, 1vh) * 100)' as any

export const fullHeight = {
  minHeight: `min(90rem, ${vh100})`,
}

export const content: Styles = {
  height: '100%',
  maxWidth: { _: '100%', md: '132rem' },
  px: '2rem',
  m: { md: 'auto' },
  position: 'relative',
}

export const headerHeight = { _: '5.5rem', md: '7rem' }

export const vh100minusHeader = `calc(${vh100} - ${headerHeight._})`
