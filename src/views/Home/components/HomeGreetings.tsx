import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Flex } from '@gravis.finance/uikit'
import {
  AIcon,
  ArrowDownIcon,
  BscIcon,
  HuobiIcon,
  InfIcon,
  NearIcon,
  PolkadotIcon,
  SolanaIcon,
} from '../../../components/Svg'
import Union from '../../../assets/Union.png'

// import greetingsAnimationJSON from '../../../assets/data/greetings-animation.json'

const GreetingsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
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

const Logo = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 206px;
  height: 66px;
  margin: auto;
  margin-top: -75px;
  top: 0; 
  left: 0; 
  bottom: 0; 
  right: 0;
  
  @media screen and (max-width: 968px) {
    display: none;
  }
`

const LogoText = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
  color: white;
  
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 31px;
  }
`

const StyledAppContainer = styled.div`
  height: 100%;
  padding: 32px 32px 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 825px) {
    padding: 28px 10px 0 10px;
  }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > * {
    margin: auto;
  }
`

const MainText = styled.div<{ mobile?: boolean }>`
  color: white;
  width: fit-content;
  height: 1em;
  text-align: center;
  font-weight: 700;
  font-size: 85px;
  padding: 0;
  ${({ mobile }) => (mobile ? 'display: none;' : 'display: block;')}
  
  @media screen and (max-width: 1435px) {
    font-size: 60px;
  }
  
  @media screen and (max-width: 1140px) {
    font-size: 45px;
    // height: 50px;
  }

  @media screen and (max-width: 670px) {
    font-size: 37px;
  }
  
  @media screen and (max-width: 525px) {
    font-size: 24px;
  }
  
  // @media screen and (max-width: 432px) {
  //   font-size: 24px;
  // }
  
  @media screen and (max-width: 368px) {
    font-size: 19px;
  }
`

const AdditionalText = styled.div`
  margin-top: 35px;
  color: white;
  text-align: center;
  font-family: 'Inter var';
  font-style: italic;
  font-weight: 500;
  font-size: 26px;
  
  @media screen and (max-width: 670px) {
    margin-top: 20px;
  }
  
  @media screen and (max-width: 525px) {
    font-size: 24px;
    margin-top: 25px;
  }
  
  @media screen and (max-width: 400px) {
    font-size: 19px;
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
  color: rgba(255, 255, 255, 1);
  text-shadow: 1px 1px 10px;

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
    margin-left: -10px;
    
    > div:not(:last-child) {
      margin-right: 0;
    }

    > div {
      flex: 1;
      margin-top: 10px;
      margin-left: 10px;
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
    ? 'linear-gradient(90.28deg, #242424 0%, #1F1F1F 100%)'
    : 'linear-gradient(90.28deg, #292929 0%, #242424 100%), linear-gradient(90.28deg, #242424 0%, #1F1F1F 100%)'};
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
const DescriptionTextHeadline = styled.div<{ mobile?: boolean }>`
  color: white;
  margin-top: 35px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  padding: 0;
  // ${({ mobile }) => (mobile ? 'display: none;' : 'display: block;')}
  @media screen and (max-width: 766px) {
    margin-top: 25px;
  }
  
  @media screen and (max-width: 670px) {
    font-size: 19px;
  }
  
  @media screen and (max-width: 368px) {
    margin-top: 25px;
    font-size: 19px;
  }
`

const DescriptionText = styled.div<{ mobile?: boolean }>`
  color: white;
  max-width: 90%;
  margin-top: 25px;
  font-family: 'Inter var';
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  padding: 0;
  line-height: 25px;
  // ${({ mobile }) => (mobile ? 'display: none;' : 'display: block;')}
  @media screen and (max-width: 1440px) {
    max-width: 100%;
  }
  @media screen and (max-width: 670px) {
    // ${({ mobile }) => (mobile ? 'display: block;' : 'display: none;')}
    font-size: 19px;
  }
`

const HomeGreetings: React.FC = () => {
  const descriptionRef = useRef()
  const { t } = useTranslation()

  useEffect(() => {
    // @ts-ignore
    descriptionRef.current.innerHTML = t('getReady')
  }, [t])

  return (
    <>
      <Logo>
        <img src={Union} alt="Gravis-Logo" />
        <LogoText>
          <p>Gravis</p>
          <p>Finance</p>
        </LogoText>
      </Logo>
      <GreetingsWrapper>
        <StyledAppContainer>
          <Body>
            <MainText>
              {t('mainMessageDesktop.gamified')}
            </MainText>
            <MainText mobile>
              {t('mainMessageDesktop.gamified')}
            </MainText>
            <AdditionalText>
              {t('mainMessageDesktop.smartNFTAssets')}
            </AdditionalText>
            <Flex alignItems="center" style={{ marginTop: '25px' }}>
              <Button type="default" href={t('presentationLink')} target="_blank">
                <StyledArrowDownIcon />
                {t('learnMore')}
              </Button>
              <InputContainer>
                <Button type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                  {t('tradeNow')}
                </Button>
              </InputContainer>
            </Flex>
            <DescriptionTextHeadline>{t('nftFarmingSoon')}</DescriptionTextHeadline>

            <DescriptionText ref={descriptionRef} />
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
    </>
  )
}

export default HomeGreetings
