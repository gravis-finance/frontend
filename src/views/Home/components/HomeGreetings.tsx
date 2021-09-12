import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Flex } from '@gravis.finance/uikit'
import {
  AIcon,
  ArrowDownIcon,
  BscIcon,
  PolygonIcon,
  NearIcon,
  PolkadotIcon,
  SolanaIcon,
  TriangleIcon,
  EtheriumLogo
} from '../../../components/Svg'

import Star_1 from '../../../assets/stars/star_1.svg'
import Star_2 from '../../../assets/stars/star_2.svg'
import Star_3 from '../../../assets/stars/star_3.svg'
import Star_4 from '../../../assets/stars/star_4.svg'
import Star_5 from '../../../assets/stars/star_5.svg'
import Star_6 from '../../../assets/stars/star_6.svg'
import planet from '../../../assets/stars/planet.svg'
import Users from '../../../assets/users.svg'
import Coins from '../../../assets/coins.svg'
import Arrows from '../../../assets/arrows.svg'
import Astronaut from '../../../assets/astronaut.svg'
import Swap from '../../../assets/swap.svg'
import UFO from '../../../assets/ufo.svg'
import Farming from '../../../assets/farming.svg'


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
  position: relative;
  color: white;
  width: 100%;
  height: fit-content;
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
  }

  @media screen and (max-width: 670px) {
    font-size: 37px;
  }
  
  @media screen and (max-width: 525px) {
    font-size: 24px;
  }
  
  @media screen and (max-width: 368px) {
    font-size: 19px;
  }
  
  p {
    text-align: center;
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

// background: ${({ disabled }) =>
// disabled
//   ? 'linear-gradient(90.28deg, #242424 0%, #1F1F1F 100%)'
//   : 'linear-gradient(90.28deg, #292929 0%, #242424 100%), linear-gradient(90.28deg, #242424 0%, #1F1F1F 100%)'};

// box-shadow: ${({ disabled }) =>
// disabled
//   ? 'inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25)'
//   : '4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05)'};
// border: ${({ disabled }) => (disabled ? 'none' : '1px solid #2E2E2E')};

const NetworkItem = styled.div<{ disabled?: boolean }>`
  width: 20%;
  min-width: 150px;
  min-height: 110px;
  box-sizing: border-box;
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
  
  :first-of-type::before {
    position: absolute;
    left: 50px;
    content: '';
    background: #1c1c1c;
    width: 20px;
    height: 100%;
    opacity: .3;
    z-index: 999999;
  }
  
  :last-of-type::after {
    position: absolute;
    right: 50px;
    content: '';
    background: #1c1c1c;
    width: 20px;
    height: 100%;
    opacity: .3;
    z-index: 999999;
  }
`

const DescriptionTextHeadline = styled.div<{ mobile?: boolean }>`
  color: white;
  width: 517px;
  height: 60px;
  margin-top: 16px;
  text-align: center;
  font-weight: 400;
  font-size: 23px;
  line-height: 30px;
  opacity: .7;
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

const Section = styled.section`
  
  position: relative;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;

  :first-of-type::after{
    display: block;
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    background-color: #FFFFFF;
    opacity: 0.07;
    bottom: 0;
  }
`

const Star = styled.img`
  position: absolute;
  transition: transform 0.5s ease-in-out;
  
  :hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: transform 0.5s ease-in-out;
  }
`

const Planet = styled.div``

const Used = styled.div`
  width: 605px;
  height: 144px;
  color: #FFFFFF;
  font-family: Inter;
  font-size: 61px;
  font-weight: 700;
  line-height: 72px;
  text-align: left;
`

const StatsBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // box-sizing: border-box;
  width: 370px;
  height: 298px;
  border-radius: 24px;
  border: 1.5px solid rgba(255, 255, 255, 0.07);
  
  :nth-of-type(2) {
    background: radial-gradient(57.38% 86.66% at 98.38% 5.37%, #FFCD1A 0%, rgba(255, 208, 43, 0) 100%),
    linear-gradient(180deg, #F9A400 0%, #FF6813 100%);
  }
`

const Circle = styled.div`
  position: relative;
  width: 92px;
  height: 92px;
  background: #282828;
  border-radius: 46px;
`

const CoinsCircle = styled(Circle)`
  background: transparent;
  border: 1.5px solid Gainsboro;
  // opacity: 0.4;
`

const CircleImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`

const CircleText = styled(Text)`
  margin: 20px auto 0;
  font-family: Inter;
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  text-align: center;
`

const StyledSpan = styled.span`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
  opacity: 0.7;
`

const AbsoluteImg = styled.img`
  position: absolute;
  transform: scale(1.3);
`

const TradeSection = styled(Section)`
  flex-direction: row;
  justify-content: space-between;
  justify-items: start;
  align-items: start;
  width: 1110px; 
  height: 400px;
  margin-top: 197px;
`

const TradeContainer = styled.div`
  width: 45%;
`

const TradeTitle = styled.p`
  color: #FFFFFF;
  font-family: Inter;
  font-size: 61px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
  text-align: left;
`

const TradeInfo = styled.p`
margin-top: 15px;
color: #FFFFFF;
  width: 415px;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
`

const FarmingSection = styled(TradeSection)`
  flex-direction: row-reverse;
`

const FarmingContainer = styled(TradeContainer)``;

const FarmingTitle = styled(TradeTitle)``;

const FarmingInfo = styled(TradeInfo)``;

const HomeGreetings: React.FC = () => {
  const descriptionRef = useRef()
  const { t } = useTranslation()

  useEffect(() => {
    // @ts-ignore
    // descriptionRef.current.innerHTML = t('getReady')
  }, [t])

  return (
    <>
      <GreetingsWrapper>
        <StyledAppContainer>
          <Body>
            <Section>
              <MainText>
                <p>NFT-focused</p>
                <p>DeFi ecosystem</p>
              </MainText>
              <MainText mobile>
                NFT-focused
              </MainText>
              <DescriptionTextHeadline>
                We are up and running. Join us now to get
                the maximum benefit from the very beginning!
              </DescriptionTextHeadline>
              {/* <DescriptionText ref={descriptionRef} /> */}
              <Flex alignItems="center" style={{ marginTop: '60px' }}>
                <Button type="default" href={t('presentationLink')} target="_blank">
                  {/* <StyledArrowDownIcon /> */}
                  {t('tradeNow')}
                </Button>
                <InputContainer>
                  <Button type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                    {t('farmGRVX')}
                  </Button>
                </InputContainer>
              </Flex>
              <Planet>
                <img src={planet} alt="planet" />
              </Planet>
              <Star style={{ 'left': '50px', 'top': '50px' }} src={Star_1} alt="Star_1" />
              <Star style={{ 'left': '75px', 'top': '250px' }} src={Star_2} alt="Star_2" />
              <Star style={{ 'right': '175px', 'top': '400px' }} src={Star_2} alt="Star_2" />
              <Star style={{ 'right': '0px', 'top': '350px' }} src={Star_3} alt="Star_3" />
              <Star style={{ 'left': '200px', 'top': '475px' }} src={Star_3} alt="Star_3" />
              <Star style={{ 'right': '50px', 'top': '50px' }} src={Star_4} alt="Star_4" />
              <Star style={{ 'right': '250px', 'top': '550px' }} src={Star_5} alt="Star_5" />
              <Star style={{ 'left': '15px', 'top': '600px' }} src={Star_6} alt="Star_6" />
            </Section>
            <Section>
              <NetworksContainer>
                <Networks mobile>
                  <NetworkItem>
                    <PolygonIcon />
                  </NetworkItem>
                  <NetworkItem>
                    <BscIcon />
                  </NetworkItem>
                  <NetworkItem>
                    <PolygonIcon />
                  </NetworkItem>
                </Networks>
                <Networks>
                  <NetworkItem>
                    <PolygonIcon />
                  </NetworkItem>
                  <NetworkItem>
                    <BscIcon />
                  </NetworkItem>
                  <NetworkItem>
                    <EtheriumLogo />
                  </NetworkItem>
                  <NetworkItem disabled>
                    <PolkadotIcon />
                  </NetworkItem>
                  <NetworkItem disabled>
                    <NearIcon />
                  </NetworkItem>
                  <NetworkItem disabled>
                    <TriangleIcon />
                  </NetworkItem>
                  <NetworkItem disabled>
                    <PolygonIcon />
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
            </Section>
            <Section style={{ 'marginTop': '113px' }}>
              <Flex style={{ 'justifyContent': 'space-between', 'width': '100%' }}>
                <Used>
                  Used by millions, trusted with billions
                </Used>
                <Button type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                  Watch detailed statistics
                </Button>
              </Flex>
            </Section>
            <Section style={{ 'width': '1110px', 'marginTop': '24px', 'height': '405px' }}>
              <StatsBlock style={{ 'top': '104px', 'left': '0' }}>
                <Circle>
                  <CircleImg src={Users} alt="users" />
                </Circle>
                <CircleText>72K users</CircleText>
                <StyledSpan>Last month</StyledSpan>
              </StatsBlock>
              <StatsBlock style={{ 'top': '54px', 'left': '345px' }}>
                <CoinsCircle>
                  <CircleImg src={Coins} alt="coins" />
                </CoinsCircle>
                <CircleText>5 605 503 $</CircleText>
                <StyledSpan>Total Value Locked</StyledSpan>
              </StatsBlock>
              <StatsBlock style={{ 'right': '40px' }}>
                <Circle>
                  <CircleImg src={Arrows} alt="arrows" />
                </Circle>
                <CircleText>3 186 824 $ </CircleText>
                <StyledSpan>Transactions for all time</StyledSpan>
              </StatsBlock>
            </Section>
            <TradeSection>
              <div style={{ 'position': 'relative', 'width': '35%' }}>
                <img style={{
                  "display": "block",
                  "margin": "0 auto",
                }} src={Astronaut} alt='astronaut' />
                <AbsoluteImg style={{ 'top': '125px', 'left': '35px' }} src={Swap} alt='swap' />
              </div>
              <TradeContainer>
                <TradeTitle>Trade anything anywhere</TradeTitle>
                <TradeInfo>Trade any asset by only connecting your wallet</TradeInfo>
                <Flex alignItems="center" style={{ marginTop: '48px' }}>
                  <Button type="default" href={t('presentationLink')} target="_blank">
                    {t('tradeNow')}
                  </Button>
                  <InputContainer>
                    <Button type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                      Learn more
                    </Button>
                  </InputContainer>
                </Flex>
              </TradeContainer>
            </TradeSection>
            <FarmingSection>
              <div style={{ 'position': 'relative', 'width': '35%' }}>
                <img style={{
                  "display": "block",
                  "margin": "0 auto",
                }} src={UFO} alt='astronaut' />
                <AbsoluteImg style={{ 'top': '155px', 'left': '35px' }} src={Farming} alt='swap' />
              </div>
              <FarmingContainer>
                <FarmingTitle>Farming</FarmingTitle>
                <FarmingInfo>
                  Higher than other projects yield is ensured by smart contract management and unique strategies
                </FarmingInfo>
                <Flex alignItems="center" style={{ marginTop: '48px' }}>
                  <Button type="default" href={t('presentationLink')} target="_blank">
                    Start Farming
                  </Button>
                  <InputContainer>
                    <Button type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                      Start Auto-farming
                    </Button>
                  </InputContainer>
                </Flex>
              </FarmingContainer>
            </FarmingSection>
          </Body>
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
