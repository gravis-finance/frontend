import React from 'react'
import styled from 'styled-components'
// import Lottie from 'react-lottie-player'
import { useTranslation } from 'react-i18next'
import { Flex } from '@gravis.finance/uikit'
import GreetingsConfetti from './GreetingsConfetti'
import {
  AIcon,
  ArrowDownIcon,
  BscIcon,
  GravisEmptyLogoIcon,
  GravisLogoIcon,
  HuobiIcon,
  InfIcon,
  NearIcon,
  PolkadotIcon,
  SolanaIcon,
} from '../../../components/Svg'

// import greetingsAnimationJSON from '../../../assets/data/greetings-animation.json'

const GreetingsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: -146px;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 968px) {
    margin-top: -130px;
  }

  @media screen and (max-width: 825px) {
    margin-top: -125px;
  }

  @media screen and (max-width: 575px) {
    margin-top: -116px;
  }
`

// const InfoWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 352px;
//   margin-top: 7%;
//   margin-left: 26%;
//   position: absolute;
//   z-index: 2;
//
//   @media screen and (max-width: 1700px) {
//     margin-left: 12%;
//   }
//   @media screen and (max-width: 1440px) {
//     margin-left: 10%;
//     margin-top: 10%;
//   }
//   @media screen and (max-width: 1224px) {
//     margin-left: 0%;
//   }
//   @media screen and (max-width: 480px) {
//     position: relative;
//     width: 100%;
//   }
// `
// const StyledHeading = styled(Heading)`
//   font-weight: bold;
//   font-size: 90px;
//   line-height: 90px;
//
//   @media screen and (max-width: 1024px) {
//     font-size: 64px;
//     overflow: hidden;
//
//     line-height: 64px;
//   }
//   @media screen and (max-width: 480px) {
//     font-size: 40px;
//     line-height: 36px;
//     text-align: center;
//   }
// `
//
// const StyledText = styled(Text)`
//   font-size: 24px;
//   line-height: 30px;
//   margin: 32px 0 40px 0;
//   color: #909090;
//   font-weight: 400;
//
//   @media screen and (max-width: 1024px) {
//     font-size: 20px;
//     line-height: 26px;
//     margin: 24px 0 32px 0;
//   }
//   @media screen and (max-width: 480px) {
//     font-size: 16px;
//     line-height: 20px;
//     text-align: center;
//   }
// `
// const StyledButton = styled(Button)`
//   @media screen and (max-width: 480px) {
//     display: block;
//     margin: 0 auto;
//   }
// `

// const ImageFrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-right: 10%;
//   position: relative;
//   & img {
//     position: absolute;
//     &:last-child {
//       position: relative;
//     }
//   }
//
//   @media screen and (max-width: 1440px) {
//     margin-right: 0%;
//   }
// `

const StyledAppContainer = styled.div`
  height: 100%;
  padding: 32px 32px 0 32px;

  @media screen and (max-width: 825px) {
    padding: 28px 10px 0 10px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Body = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  > * {
    margin: auto;
  }
`

const MainText = styled.div<{ mobile?: boolean }>`
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 61px;
  padding: 0;
  ${({ mobile }) => (mobile ? 'display: none;' : 'display: block;')}

  @media screen and (max-width: 670px) {
    ${({ mobile }) => (mobile ? 'display: block;' : 'display: none;')}
    font-size: 37px;
  }
`

const DescriptionTextHeadline = styled.div<{ mobile?: boolean }>`
  color: white;
  margin-top: 35px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  padding: 0;
  ${({ mobile }) => (mobile ? 'display: none;' : 'display: block;')}

  @media screen and (max-width: 670px) {
    ${({ mobile }) => (mobile ? 'display: block;' : 'display: none;')}
    font-size: 17px;
  }
`

const DescriptionText = styled.div<{ mobile?: boolean }>`
  color: white;
  max-width: 90%;
  margin-top: 15px;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  padding: 0;
  line-height: 25px;
  ${({ mobile }) => (mobile ? 'display: none;' : 'display: block;')}

  @media screen and (max-width: 1440px) {
    max-width: 100%;
  }

  @media screen and (max-width: 670px) {
    ${({ mobile }) => (mobile ? 'display: block;' : 'display: none;')}
    font-size: 14px;
  }
`


const Button = styled.a<{ type: string }>`
  padding: 0 24px;
  border: 2px solid ${({ type }) => (type === 'default' ? '#009CE1' : '#FFA100')};
  border-radius: 39px;
  color: white;
  background: #242424;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05), 4px 4px 12px rgba(0, 0, 0, 0.4),
    -4px -4px 12px rgba(255, 255, 255, 0.05);
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 44px;
  text-decoration: none;

  transition: background 200ms ease-in-out;

  :hover {
    background: ${({ type }) => (type === 'default' ? '#009CE1' : '#FFA100')};
  }
`

const StyledArrowDownIcon = styled(ArrowDownIcon)`
  margin-right: 16px;
`

const Text = styled.p<{ small?: boolean }>`
  margin-top: 77px;
  font-weight: 500;
  font-size: 23px;
  color: rgba(255, 255, 255, 0.5);

  ${({ small }) =>
    small
      ? `
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 18px;
        @media screen and (max-width: 825px) {
            margin-bottom: 4px;
        }
    `
      : ''}

  @media screen and (max-width: 825px) {
    margin-top: 47px;
  }
`

const InputContainer = styled.div`
  margin-left: 21px;
  display: flex;

  @media screen and (max-width: 520px) {
    // flex-direction: column;
    // align-items: center;
    // width: 100%;

    // > input {
    //     width: 100%;
    //     margin: 0;
    // }
    //
    // > a {
    //     box-sizing: border-box;
    //     margin-top: 16px;
    //     place-content: center;
    //     width: 100%;
    // }
  }
`

const Footer = styled.div`
  display: flex;

  > div:not(:last-child) {
    margin-right: 20px;
  }
  @media screen and (max-width: 825px) {
    flex-direction: column;
  }
`

const NetworksContainer = styled.div<{ mobile?: boolean }>`
  width: 100%;
  ${({ mobile }) => (mobile ? 'display: none;' : '')}
  @media screen and (max-width: 825px) {
    ${({ mobile }) => (mobile ? 'display: block;' : '')}
  }
`

const Networks = styled.div<{ mobile?: boolean }>`
  margin-bottom: 20px;
  display: ${({ mobile }) => (mobile ? 'none' : 'flex')};
  > div:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (max-width: 825px) {
    > div:not(:last-child) {
      margin-right: 10px;
    }

    > div {
      margin-top: 10px;
    }
  }

  ${({ mobile }) => (mobile ? 'flex-wrap: wrap;' : '')}

  @media screen and (max-width: 825px) {
    display: ${({ mobile }) => (mobile ? 'flex' : 'none')};
    // ${({ mobile }) => (mobile ? 'justify-content: space-between;' : '')}
  }
`

const NetworkItem = styled.div<{ disabled?: boolean }>`
  // width: 180px;
  width: 20%;
  min-width: 150px;
  min-height: 110px;
  // height: 148px;
  background: ${({ disabled }) =>
    disabled
      ? 'linear-gradient(90.28deg, #242424 0%, #1F1F1F 100%), #C4C4C4'
      : 'linear-gradient(90.28deg, #292929 0%, #242424 100%), linear-gradient(90.28deg, #242424 0%, #1F1F1F 100%), #C4C4C4'};
  border: ${({ disabled }) => (disabled ? 'none' : '1px solid #2E2E2E')};
  box-sizing: border-box;
  box-shadow: ${({ disabled }) =>
    disabled
      ? 'inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25)'
      : '4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05)'};
  border-radius: 16px;
  position: relative;
  display: flex;

  > * {
    margin: auto;
  }

  @media screen and (max-width: 1550px) {
    min-width: 92px;
    min-height: 79px;
    > svg {
      transform: scale(0.7);
    }
  }

  @media screen and (max-width: 825px) {
    min-width: 150px;
    min-height: 75px;
  }
`

const GravisLogoContainer = styled.div<{ text?: boolean }>`
  opacity: 0;
  ${({ text }) => (text ? 'display: block;' : 'display: none;')}
  @media screen and (max-width: 520px) {
    ${({ text }) => (text ? 'display: none;' : 'display: block;')}
  }
`



const HomeGreetings: React.FC = () => {
  const { t } = useTranslation()
  return (
    <GreetingsWrapper>
      <GreetingsConfetti />
      <StyledAppContainer>
        <Header>
          <GravisLogoContainer text>
            <GravisLogoIcon />
          </GravisLogoContainer>
          <GravisLogoContainer>
            <GravisEmptyLogoIcon />
          </GravisLogoContainer>
        </Header>
        <Body>
          <MainText>
            {t('mainMessageDesktop.nftFocused')} <br /> {t('mainMessageDesktop.multichainDex')} <br /> {t('mainMessageDesktop.crossChainBridge')}
          </MainText>
          <MainText mobile>
            {t('mainMessageDesktop.nftFocused')} <br /> {t('mainMessageDesktop.multichainDex')} <br /> {t('mainMessageDesktop.crossChainBridge')} <br /> {t('mainMessageMobile.bridge')}
          </MainText>
          <Flex alignItems="center" style={{ marginTop: '25px' }}>
            <Button
              type="default"
              href={t('presentationLink')}
              target="_blank"
            >
              <StyledArrowDownIcon />
              {t('learnMore')}
            </Button>
            <InputContainer>
              <Button type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                {t('tradeNow')}
              </Button>
            </InputContainer>
          </Flex>
          <DescriptionTextHeadline>
            {t('weLaunched')}
          </DescriptionTextHeadline>
          <DescriptionTextHeadline mobile>
            {t('weLaunched')}
          </DescriptionTextHeadline>
          <DescriptionText>
            {t('hurryUp')} <br />
            {t('nftCards')} <br />
            {t('findInIno')}
          </DescriptionText>
          <DescriptionText mobile>
            {t('hurryUp')} <br />
            {t('nftCards')} <br />
            {t('findInIno')}
          </DescriptionText>
        </Body>
        <Footer>
          <NetworksContainer>
            <Text small>{t('poweredBy')}</Text>
            <Networks mobile>
              <NetworkItem>
                <HuobiIcon />
              </NetworkItem>
              <NetworkItem>
                <BscIcon />
              </NetworkItem>
              <NetworkItem>
                <InfIcon />
              </NetworkItem>
            </Networks>
            <Networks>
              <NetworkItem>
                <HuobiIcon />
              </NetworkItem>
              <NetworkItem>
                <BscIcon />
              </NetworkItem>
              <NetworkItem>
                <InfIcon />
              </NetworkItem>
              <NetworkItem disabled>
                <Text style={{ top: '-40px', width: '180px', position: 'absolute' }} small>
                  {t('comingSoon')}
                </Text>
                <SolanaIcon />
              </NetworkItem>
              <NetworkItem disabled>
                <PolkadotIcon />
              </NetworkItem>
              <NetworkItem disabled>
                <NearIcon />
              </NetworkItem>
              <NetworkItem disabled>
                <AIcon />
              </NetworkItem>
            </Networks>
          </NetworksContainer>
          <NetworksContainer mobile>
            <Text small style={{ marginTop: '24px' }}>
              {t('comingSoon')}
            </Text>
            <Networks mobile>
              <NetworkItem disabled>
                <SolanaIcon />
              </NetworkItem>
              <NetworkItem disabled>
                <PolkadotIcon />
              </NetworkItem>
              <NetworkItem disabled>
                <NearIcon />
              </NetworkItem>
              <NetworkItem disabled>
                <AIcon />
              </NetworkItem>
              <NetworkItem disabled>
                <InfIcon />
              </NetworkItem>
            </Networks>
          </NetworksContainer>
        </Footer>
      </StyledAppContainer>
      {/* <InfoWrapper>
        <StyledHeading className="animate__animated animate__fadeInUp animate__delay-2s animate__fast ">
          {t('hurray')}!
        </StyledHeading>
        <StyledText className="animate__animated animate__fadeInUp animate__delay-2s animate__fast">
          {t('greetingsMessage')}
        </StyledText>
        <a
          href={process.env.REACT_APP_START_TO_TRADE}
          className="animate__animated animate__fadeInUp animate__delay-2s animate__fast"
        >
          <StyledButton>{t('startTrading')}</StyledButton>
        </a>
      </InfoWrapper> */}

      {/* <ImageFrapper>
      {animationInited && <Lottie loop={false} animationData={greetingsAnimationJSON} play />}
      </ImageFrapper> */}
    </GreetingsWrapper>
  )
}

export default HomeGreetings
