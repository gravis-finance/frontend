import React from 'react'
import { SvgProps } from '@gravis.finance/uikit'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" {...props}>
      <path
        d="M7.83203 1L3.01953 6L0.832031 3.72727"
        stroke="#70DD75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Icon
