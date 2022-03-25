import React from 'react'
import styled from 'styled-components'
import { Flex, privacyAndPoliceLink, termsOfUseLink, Box } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import { MediumIcon, TelegramIcon, TwitterIcon } from '../../../../components/Svg'
import * as styles from '../../styles'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Container = styled(Box)`
  background: #111518;
`

const LinkItem = styled.a`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 49px;
  transition: background-color 200ms ease-in-out;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: ${breakpoints.md}) {
    width: 6rem;
    height: 6rem;
  }
`

export const GithubIcon = () => (
  <svg width="1.6rem" height="1.6rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.999 0.166504C3.582 0.166504 0 3.7625 0 8.1985C0 11.7465 2.292 14.7565 5.472 15.8195C5.872 15.8935 6.018 15.6455 6.018 15.4325C6.018 15.2415 6.011 14.7365 6.007 14.0665C3.782 14.5515 3.312 12.9895 3.312 12.9895C2.949 12.0615 2.424 11.8145 2.424 11.8145C1.697 11.3165 2.478 11.3265 2.478 11.3265C3.281 11.3835 3.703 12.1545 3.703 12.1545C4.417 13.3815 5.576 13.0275 6.032 12.8215C6.104 12.3025 6.311 11.9485 6.54 11.7475C4.764 11.5445 2.896 10.8555 2.896 7.7785C2.896 6.9015 3.208 6.1845 3.72 5.6225C3.637 5.4195 3.363 4.6025 3.798 3.4975C3.798 3.4975 4.47 3.2815 5.998 4.3205C6.636 4.1425 7.32 4.0535 8.001 4.0505C8.68 4.0545 9.365 4.1425 10.004 4.3215C11.531 3.2825 12.202 3.4985 12.202 3.4985C12.638 4.6045 12.364 5.4205 12.282 5.6235C12.795 6.1855 13.104 6.9025 13.104 7.7795C13.104 10.8645 11.234 11.5435 9.452 11.7425C9.739 11.9905 9.995 12.4805 9.995 13.2295C9.995 14.3035 9.985 15.1695 9.985 15.4325C9.985 15.6475 10.129 15.8975 10.535 15.8185C13.71 14.7545 16 11.7455 16 8.1985C16 3.7625 12.418 0.166504 7.999 0.166504Z"
      fill="white"
    />
  </svg>
)

export const DiscordIcon = () => (
  <svg width="2.1rem" height="1.6rem" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.7774 1.42466C16.4389 0.82062 15.0036 0.375587 13.5029 0.120698C13.4756 0.115779 13.4483 0.128072 13.4342 0.15266C13.2496 0.475572 13.0451 0.896838 12.902 1.22795C11.2879 0.990278 9.68204 0.990278 8.10103 1.22795C7.95782 0.889478 7.74592 0.475572 7.5605 0.15266C7.54642 0.128893 7.51912 0.116599 7.49179 0.120698C5.99192 0.374772 4.55662 0.819805 3.21732 1.42466C3.20572 1.42958 3.19579 1.43778 3.18919 1.44843C0.466718 5.44884 -0.279081 9.35092 0.0867826 13.2046C0.0884381 13.2235 0.0991986 13.2415 0.114098 13.253C1.91031 14.5504 3.65024 15.338 5.35787 15.8601C5.3852 15.8683 5.41416 15.8584 5.43155 15.8363C5.83549 15.2938 6.19556 14.7217 6.50429 14.1201C6.52251 14.0849 6.50512 14.043 6.46788 14.0291C5.89674 13.816 5.3529 13.5562 4.82976 13.2612C4.78838 13.2374 4.78507 13.1792 4.82314 13.1513C4.93323 13.0702 5.04334 12.9858 5.14846 12.9005C5.16748 12.885 5.19398 12.8817 5.21634 12.8915C8.65312 14.4348 12.3739 14.4348 15.7701 12.8915C15.7924 12.8809 15.8189 12.8842 15.8388 12.8997C15.9439 12.985 16.054 13.0702 16.1649 13.1513C16.203 13.1792 16.2005 13.2374 16.1591 13.2612C15.636 13.5619 15.0922 13.816 14.5202 14.0283C14.483 14.0422 14.4664 14.0849 14.4846 14.1201C14.8 14.7208 15.16 15.2929 15.5565 15.8355C15.5731 15.8584 15.6029 15.8683 15.6302 15.8601C17.3461 15.338 19.086 14.5504 20.8823 13.253C20.898 13.2415 20.9079 13.2243 20.9096 13.2054C21.3474 8.75013 20.1762 4.88005 17.8047 1.44924C17.7989 1.43778 17.789 1.42958 17.7774 1.42466ZM7.01752 10.8581C5.98281 10.8581 5.13024 9.9238 5.13024 8.77637C5.13024 7.62894 5.96628 6.69463 7.01752 6.69463C8.07701 6.69463 8.92133 7.63714 8.90477 8.77637C8.90477 9.9238 8.06873 10.8581 7.01752 10.8581ZM13.9954 10.8581C12.9607 10.8581 12.1082 9.9238 12.1082 8.77637C12.1082 7.62894 12.9442 6.69463 13.9954 6.69463C15.0549 6.69463 15.8992 7.63714 15.8827 8.77637C15.8827 9.9238 15.0549 10.8581 13.9954 10.8581Z"
      fill="white"
    />
  </svg>
)

const MailIcon = () => {
  return (
    <svg width="2rem" height="1.7rem" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1032 1.804C19.8785 1.23053 19.4729 0 18.5085 0H1.53445C0.570047 0 0.164438 1.23053 0.939814 1.80399L9.42685 8.08102C9.7802 8.34236 10.2628 8.34236 10.6161 8.08102L19.1032 1.804ZM19.1032 3.80401C19.2416 3.70158 19.3425 3.57819 19.4091 3.44459C19.4682 3.63334 19.5 3.83412 19.5 4.04233V14.0423C19.5 15.1469 18.6046 16.0423 17.5 16.0423H2.5C1.39543 16.0423 0.5 15.1469 0.5 14.0423V4.04233C0.5 3.81397 0.538271 3.59455 0.608749 3.39014C0.674059 3.5446 0.782688 3.6878 0.939814 3.80401L9.42685 10.081C9.7802 10.3424 10.2628 10.3424 10.6161 10.081L19.1032 3.80401Z"
        fill="white"
      />
    </svg>
  )
}

export const FooterNetworks = (props: any) => {
  return (
    <Box alignItems="center" gridGap="1rem" display="flex" {...props}>
      <LinkItem href="https://github.com/gravis-finance" target="_blank" rel="noopener  noreferrer">
        <GithubIcon />
      </LinkItem>
      <LinkItem href="https://t.me/Gravis_Finance_En" target="_blank" rel="noopener  noreferrer">
        <TelegramIcon width="1.6rem" height="1.6rem" />
      </LinkItem>
      <LinkItem href="https://twitter.com/gammarosigma" target="_blank" rel="noopener  noreferrer">
        <TwitterIcon width="1.6rem" height="1.6rem" />
      </LinkItem>
      <LinkItem href="https://gravis-finance.medium.com/" target="_blank" rel="noopener  noreferrer">
        <MediumIcon width="1.6rem" height="1.6rem" />
      </LinkItem>
      <LinkItem href="https://discord.gg/GravisFinance" target="_blank" rel="noopener  noreferrer">
        <DiscordIcon />
      </LinkItem>
      <LinkItem href="mailto:info@gravis.finance" target="_blank" rel="noopener  noreferrer">
        <MailIcon />
      </LinkItem>
    </Box>
  )
}

const LinkedDefaultText = styled(DefaultText)`
  transition: color 200ms ease-in-out;
  :hover {
    color: rgba(255, 255, 255, 0.9);
  }
`

const Footer: React.FC = () => {
  return (
    <Container pb={{ _: '2rem', md: 0 }} height={{ _: '21rem', md: '18rem' }}>
      <Flex {...styles.content}>
        <Flex
          alignItems="center"
          justifyContent={{ _: 'center', md: 'space-between' }}
          gridGap={{ _: '3rem', md: 0 }}
          width="100%"
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <FooterNetworks display={{ _: 'flex', md: 'none' }} />
          <Flex alignItems="center">
            <LinkedDefaultText
              color="rgba(255,255,255,0.7)"
              fontSize="1.4rem"
              fontWeight={500}
              as="a"
              href={privacyAndPoliceLink}
              target="_blank"
              rel="noopener  noreferrer"
            >
              Privacy & Policy
            </LinkedDefaultText>
            <DefaultText color="rgba(255,255,255,0.1)" fontSize="1.4rem" m="0 2rem" fontWeight={500}>
              |
            </DefaultText>
            <LinkedDefaultText
              color="rgba(255,255,255,0.7)"
              fontSize="1.4rem"
              fontWeight={500}
              as="a"
              href={termsOfUseLink}
              target="_blank"
              rel="noopener  noreferrer"
            >
              Terms of Use
            </LinkedDefaultText>
          </Flex>
          <FooterNetworks display={{ _: 'none', md: 'flex' }} />
          <Flex>
            <DefaultText color="rgba(255,255,255,0.7)" fontSize="1.4rem" fontWeight={500}>
              All rights reserved. © 2022 Gravis Finance
            </DefaultText>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Footer
