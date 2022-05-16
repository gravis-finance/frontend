import React from 'react'
import { SvgProps } from '@gravis.finance/uikit'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <path d="M4 19V3.5C4 2.67156 4.67156 2 5.5 2H14.5C15.3284 2 16 2.67156 16 3.5V19L10 14.5L4 19Z" fill="white" />
    </svg>
  )
}

export default Icon
