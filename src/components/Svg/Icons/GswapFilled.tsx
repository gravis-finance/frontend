import React from 'react'
import { Box } from '@gravis.finance/uikit'

const Icon: React.FC<React.ComponentProps<typeof Box>> = (props) => {
  return (
    <Box as="svg" width="8.1rem" height="8rem" viewBox="0 0 81 80" fill="none" {...props}>
      <rect x="0.666992" width="80" height="80" rx="40" fill="url(#paint0_radial_11805_1409)" />
      <path
        opacity="0.4"
        d="M25.6709 51.9786V43.8705C25.6709 43.4855 25.8238 43.1163 26.096 42.8441C26.3683 42.5718 26.7375 42.4189 27.1225 42.4189H35.2306C36.5237 42.4189 37.1715 43.9824 36.2588 44.8987L33.7337 47.4238C35.614 49.1907 38.0998 50.17 40.68 50.1606C45.3619 50.1563 49.4081 46.9466 50.5252 42.4885C50.5638 42.3307 50.6542 42.1904 50.7819 42.0901C50.9097 41.9897 51.0674 41.9351 51.2298 41.9351H54.696C54.8025 41.935 54.9078 41.9583 55.0043 42.0035C55.1008 42.0487 55.1861 42.1145 55.2543 42.1964C55.3225 42.2782 55.3718 42.3741 55.3987 42.4771C55.4257 42.5802 55.4297 42.6879 55.4103 42.7927C54.1015 49.742 48.0001 54.9991 40.6703 54.9991C36.8097 55.0043 33.0968 53.5155 30.3092 50.8446L28.1506 53.0032C27.2343 53.9195 25.6709 53.2717 25.6709 51.9786Z"
        fill="white"
      />
      <path
        d="M25.9291 37.2069C27.2373 30.2576 33.3387 25.0005 40.6684 25.0005C44.529 24.9953 48.2419 26.4841 51.0295 29.155L53.1881 26.9964C54.1026 26.0819 55.6679 26.7297 55.6679 28.0246V36.1291C55.6679 36.5141 55.5149 36.8833 55.2427 37.1555C54.9705 37.4277 54.6013 37.5807 54.2163 37.5807H46.1081C44.8151 37.5807 44.1673 36.0172 45.08 35.1009L47.6051 32.5758C45.725 30.809 43.2394 29.8296 40.6594 29.839C35.9745 29.8433 31.9301 33.0554 30.8136 37.5111C30.775 37.6689 30.6846 37.8092 30.5568 37.9095C30.4291 38.0099 30.2714 38.0644 30.109 38.0645H26.6428C26.5363 38.0645 26.4311 38.0411 26.3347 37.9959C26.2383 37.9507 26.153 37.8848 26.0849 37.803C26.0168 37.7211 25.9675 37.6253 25.9406 37.5223C25.9137 37.4193 25.9097 37.3116 25.9291 37.2069Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_11805_1409"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(40.667) rotate(90) scale(80)"
        >
          <stop stopColor="#FFF615" />
          <stop offset="1" stopColor="#FF371C" />
        </radialGradient>
      </defs>
    </Box>
  )
}

export default Icon
