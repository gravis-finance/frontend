import React from 'react'
import { Box } from '@gravis.finance/uikit'

const Icon: React.FC<React.ComponentProps<typeof Box>> = (props) => {
  return (
    <Box as="svg" width="8rem" height="8rem" viewBox="0 0 80 80" fill="none" {...props}>
      <rect x="-0.000488281" width="80" height="80" rx="40" fill="url(#paint0_radial_11805_1389)" />
      <rect opacity="0.35" x="40.4995" y="36.7213" width="14.4064" height="7.63617" fill="white" />
      <path
        d="M55.0215 40.7689C54.9851 42.7327 54.5508 44.6688 53.7449 46.46C52.9389 48.2511 51.778 49.8602 50.3324 51.1899C48.8868 52.5196 47.1865 53.5423 45.3343 54.1962C43.4822 54.85 41.5167 55.1213 39.5567 54.9938C37.5967 54.8663 35.6829 54.3426 33.9311 53.4544C32.1792 52.5661 30.6258 51.3318 29.3646 49.826C28.1034 48.3202 27.1608 46.5743 26.5937 44.6938C26.0265 42.8133 25.8467 40.8373 26.0651 38.8853"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="7.95106"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.975 40.5C25.975 38.5926 26.3507 36.7039 27.0807 34.9417C27.8106 33.1795 28.8804 31.5784 30.2292 30.2297C31.5779 28.8809 33.179 27.8111 34.9412 27.0811C36.7034 26.3512 38.5921 25.9755 40.4995 25.9755"
        stroke="white"
        strokeWidth="7.95106"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="40.4602" cy="40.5394" r="3.81809" fill="white" />
      <circle cx="40.4612" cy="55.0244" r="3.81809" fill="white" />
      <circle cx="25.8972" cy="40.5393" r="3.81809" fill="white" />
      <circle cx="54.8669" cy="40.5394" r="3.81809" fill="white" />
      <defs>
        <radialGradient
          id="paint0_radial_11805_1389"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(39.9995) rotate(90) scale(80)"
        >
          <stop stopColor="#1CFFF1" />
          <stop offset="1" stopColor="#1549FF" />
        </radialGradient>
      </defs>
    </Box>
  )
}

export default Icon
