import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Flex, Input } from '@gravis.finance/uikit'
import {
  AIcon,
  BscIcon,
  PolygonIcon,
  NearIcon,
  PolkadotIcon,
  SolanaIcon,
  HuobiIcon
} from '../../../components/Svg'

import special_27x48 from '../../../assets/stars/special_27x48.svg'
import orange_9x10 from '../../../assets/stars/orange_9x10.svg'
import grey_13x14 from '../../../assets/stars/grey_13x14.svg'
import grey_24x26 from '../../../assets/stars/grey_24x26.svg'
import white_18x19 from '../../../assets/stars/white_18x19.svg'
import white_13x14 from '../../../assets/stars/white_13x14.svg'
import planet from '../../../assets/stars/planet.svg'
import planet_2 from '../../../assets/stars/planet_2.svg'
import Users from '../../../assets/users.svg'
import Users_orange from '../../../assets/users_orange.svg'
import Coins from '../../../assets/coins.svg'
import Arrows from '../../../assets/arrows.svg'
import Astronaut from '../../../assets/astronaut.svg'
import Swap from '../../../assets/swap.svg'
import UFO from '../../../assets/ufo.svg'
import Farming from '../../../assets/farming.svg'
import Captains from '../../../assets/captains.png'
import Captains_mobile from '../../../assets/captains_mobile.png'
import Video_Icon from '../../../assets/video-icon.svg'
import ship_1 from '../../../assets/ship_1.svg'
import ship_2 from '../../../assets/ship_2.svg'
import presentation from '../../../assets/presentation.svg'
import presentation_mobile from '../../../assets/presentation_mobile.svg'
import stack from '../../../assets/stack.svg'
import supply from '../../../assets/supply.svg'
import stonks from '../../../assets/stonks.svg'
import stonks_orange from '../../../assets/stonks_orange.svg'
import cap from '../../../assets/cap.svg'
import cap_orange from '../../../assets/cap_orange.svg'
import block from '../../../assets/block.svg'
import networks from '../../../assets/networks.svg'


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

// const Logo = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: space-between;
//   width: 206px;
//   height: 66px;
//   margin: auto;
//   margin-top: -75px;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//
//   @media screen and (max-width: 968px) {
//     display: none;
//   }
// `

// const LogoText = styled.div`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   width: 60%;
//   color: white;
//
//   p {
//     font-family: Inter;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 28px;
//     line-height: 31px;
//   }
// `

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

// const AdditionalText = styled.div`
//   margin-top: 35px;
//   color: white;
//   text-align: center;
//   font-family: 'Inter var';
//   font-style: italic;
//   font-weight: 500;
//   font-size: 26px;
//
//   @media screen and (max-width: 670px) {
//     margin-top: 20px;
//   }
//
//   @media screen and (max-width: 525px) {
//     font-size: 24px;
//     margin-top: 25px;
//   }
//
//   @media screen and (max-width: 400px) {
//     font-size: 19px;
//   }
// `

const Button = styled.a<{ type: string, mobile?: boolean, desktop?: boolean }>`
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
  justify-content: center;
  ${({ mobile }) => mobile ? 'display: none;' : ''}
  align-items: center;
  width: fit-content;
  height: 44px;
  text-decoration: none;

  transition: background 200ms ease-in-out;

  :hover {
    background: ${({ type }) => (type === 'default' ? '#009CE1' : '#FFA100')};
  }
  @media screen and (max-width: 1000px) {
    font-size: 10px;
  }
  
  
  @media screen and (max-width: 800px) {
    ${({ mobile }) => mobile ? 'display: flex; padding: 15px; margin-top: 30px; width: 232px; height: 48px; font-size: 14px;' : ''}
    ${({ desktop }) => desktop ? 'display: none; position: absolute;' : ''}
  }
`

// const StyledArrowDownIcon = styled(ArrowDownIcon)`
//   margin-right: 16px;
// `

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

// const Footer = styled.div`
//   display: flex;
//
//   > div:not(:last-child) {
//     margin-right: 20px;
//   }
//   @media screen and (max-width: 825px) {
//     flex-direction: column;
//   }
// `

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
  justify-content: space-between;
  flex-wrap: no-wrap;
  > div:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (max-width: 825px) {
    display: ${({ mobile }) => (mobile ? 'flex' : 'none')};
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
`



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
  
  transition: transform 0.2s linear;
  
  ${({ disabled }) => disabled ? 'opacity: 0.3;' : ':hover { transform: scale(1.1); cursor: pointer; }'}
      
  border: 1px solid #2E2E2E;

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
  
  @media screen and (max-width: 500px) {
    min-width: 100px;
    min-height: 50px;
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
  
  div:first-of-type {
    display: inline-block;
  }
    
  @media screen and (max-width: 766px) {
    margin-top: 25px;
  }
  
  @media screen and (max-width: 670px) {
    width: 359px;
    
    div:first-of-type {
      width: 100%;
    }
    font-size: 19px;
  }
  
  @media screen and (max-width: 368px) {
    margin-top: 25px;
    font-size: 19px;
  }
`

// const DescriptionText = styled.div<{ mobile?: boolean }>`
//   color: white;
//   max-width: 90%;
//   margin-top: 25px;
//   font-family: 'Inter var';
//   text-align: center;
//   font-weight: 300;
//   font-size: 20px;
//   padding: 0;
//   line-height: 25px;
//   // ${({ mobile }) => (mobile ? 'display: none;' : 'display: block;')}
//   @media screen and (max-width: 1440px) {
//     max-width: 100%;
//   }
//   @media screen and (max-width: 670px) {
//     // ${({ mobile }) => (mobile ? 'display: block;' : 'display: none;')}
//     font-size: 19px;
//   }
// `

const Section = styled.section<{ desktop?: boolean, mobile?: boolean, url?: string, desktopUrl?: string, mobileUrl?: string }>`
  
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

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

const Star = styled.img<{ mobile?: boolean }>`
  // ${({ mobile }) => (mobile ? '' : 'display: none;')}
  position: absolute;
  transition: transform 0.5s ease-in-out;
  
  @media screen and (max-width: 825px) {
    ${({ mobile }) => (mobile ? 'display: none;' : '')}
  }
  
  :hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: transform 0.5s ease-in-out;
  }
`

const UsedSection = styled(Section)`
  
`

const UsedText = styled.div`
  width: 605px;
  height: 144px;
  color: #FFFFFF;
  font-family: Inter;
  font-size: 61px;
  font-weight: 700;
  line-height: 53px;
  text-align: left;
  
  @media screen and (max-width: 800px) {
    // margin-left: 20px;
    width: 400px;
    font-size: 36px;
    line-height: 28px;
    text-align: center;
  }
`

const StatsSection = styled(Section)`
  width: 1110px;
  margin-top: 24px;
  height: 405px;
  
  @media screen and (max-width: 1200px) {
    width: 900px;
  }
  
  @media screen and (max-width: 1000px) {
    width: 780px;
  }
  
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

const StatsBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 298px;
  border-radius: 24px;
  border: 1.5px solid rgba(255, 255, 255, 0.07);
  
  :nth-of-type(1) {
    top: 104px;
    left: 0;
  }
  
  :nth-of-type(2) {
    top: 54px;
    left: 345px;
    background: radial-gradient(57.38% 86.66% at 98.38% 5.37%, #FFCD1A 0%, rgba(255, 208, 43, 0) 100%),
    linear-gradient(180deg, #F9A400 0%, #FF6813 100%);
  }
  
  :nth-of-type(3) {
    left: 685px;
  }
  
  @media screen and (max-width: 1200px) {
    width: 295px;
    height: 223px;
    
    :nth-of-type(2) {
      top: 65px;
      left: 285px;
    }
    
    :nth-of-type(3) {
      top: 15px;
      left: 550px;
    }
  }
  
  @media screen and (max-width: 1000px) {
    width: 260px;
    height: 188px;
    
    :nth-of-type(2) {
      top: 65px;
      left: 225px;
    }
    
    :nth-of-type(3) {
      top: 25px;
      left: 465px;
    }
    
    > div:first-of-type {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
  }
  
  @media screen and (max-width: 800px) {
    position: static;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: 200px;
    padding: 10px;
    
    :nth-child(n + 2) {
      margin-top: 16px;
    }
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
`

const CircleImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`

const StatsInfo = styled.div`
  width: 90%;
  text-align: center;
`

const CircleText = styled(Text)`
  margin: 20px auto 0;
  font-family: Inter;
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  text-align: center;
  
  @media screen and (max-width: 1000px) {
    margin-top: 0;
  }
`

const StyledSpan = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
  opacity: 0.7;
`

const ImageBox = styled.div`
  position: relative;
  width: 35%;
  
  img:first-of-type {
    display: block;
    margin: 0 auto;
  }
  
  @media screen and (max-width: 800px) {
    img {
      position: static;
    }
    
    img:first-of-type {
      display: none;
    }
  }
`

const AbsoluteImg = styled.img<{ desktop?: boolean, mobile?: boolean }>`
  position: absolute;
  transform: scale(1.3);
  ${({ mobile }) => mobile ? 'display: none;' : ''}
  
  @media screen and (max-width: 800px) {
    ${({ mobile }) => mobile ? 'position: static; display: block; width: 238px; height: 246px; margin: 50px auto 0;' : ''}
    ${({ desktop }) => desktop ? 'display: none;' : ''}
  }
`

const TradeSection = styled(Section)`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  justify-items: start;
  align-items: start;
  width: 1110px; 
  height: 400px;
  margin-top: 197px;
  
  @media screen and (max-width: 1350px) {
    width: 90%;
  }
  
  @media screen and (max-width: 800px) {
    width: 90%;
    flex-direction: column-reverse;
  }
`

const TradeContainer = styled.div`
  width: 45%;
  display: inline-block;
  
  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    div:last-of-type {
      justify-content: center;
      text-align: center;
    }
  }
`

const TradeTitle = styled.p`
  display: inline-block;
  color: #FFFFFF;
  font-family: Inter;
  font-size: 61px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
  text-align: left;
  
  @media screen and (max-width: 1350px) {
    font-size: 46px;
    line-height: 38px;
  }
  
  @media screen and (max-width: 1050px) {
    font-size: 38px;
    line-height: 30px;
  }
  
  @media screen and (max-width: 800px) {
    text-align: center;
  }
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
  
  @media screen and (max-width: 1350px) {
    width: 90%;
    font-size: 18px;
    line-height: 25px;
  }
  
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`

const FarmingSection = styled(TradeSection)`
  position: relative;
  flex-direction: row-reverse;
  
  @media screen and (max-width: 1350px) {
    width: 90%;
  }
  
  @media screen and (max-width: 800px) {
    width: 90%;
    flex-direction: column-reverse;
  }
`

const FarmingContainer = styled(TradeContainer)`
  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    div:last-of-type {
      justify-content: center;
      text-align: center;
    }
  }
`

const FarmingTitle = styled(TradeTitle)``

const FarmingInfo = styled(TradeInfo)`
  @media screen and (max-width: 1350px) {
    width: 90%;
    font-size: 18px;
    line-height: 25px;
  }
  
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`

const CaptainsSection = styled(Section)`
  ${({ mobile }) => mobile ? 'display: none;' : ''}
  position: relative;
  margin-top: 310px;
  background: url(${props => props.url}) no-repeat;
  background-size: 100% 100%;
  border-radius: 25px;
  width: 1057px;
  height: 750px;
  
  @media screen and (max-width: 1400px) {
    width: 700px;
    height: 450px;
  }
  
  @media screen and (max-width: 1200px) {
    width: 600px;
    height: 350px;
  }
  
  @media screen and (max-width: 800px) {
    ${({ desktop }) => desktop ? 'display: none;' : ''}
    ${({ mobile }) => mobile ? 'display: flex;' : ''}
    padding-bottom: 45px;
    width: 355px;
    height: 695px;
    justify-content: flex-end;
    
    > a, > div {
      position: static;
    }
  }
  
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 585px;
  }
`

const VideoButton = styled.a`
  box-sizing: border-box;
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 48px;
  padding: 5px;
  background: linear-gradient(180deg, #FFBE1A 0%, #F59300 100%), linear-gradient(180deg, #FEE29A 0%, #FA9D00 100%);
  border-radius: 39px;
  
  @media screen and (max-width: 1400px) {
    top: 20px;
    right: 60px;
  }
  
  @media screen and (max-width: 800px) {
    margin-top: 6px;
  }
  
  span {
    color: #FFFFFF;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    margin-right: 10px;
  }
  
  :hover {
    cursor: pointer;
  }
`

const StyledShip = styled.img`
  position: absolute;
  
  @media screen and (max-width: 1400px) {
    width: 250px;
    height: 200px;
  }
`

const UpperShip = styled(StyledShip)`
  top: -160px;
  left: 0px;
  
  @media screen and (max-width: 1400px) {
    top: -125px;
    left: 25px;
  }
`

const LowerShip = styled(StyledShip)`
  bottom: -172px;
  right: -61px;
  
  @media screen and (max-width: 1400px) {
    bottom: -115px;
    right: -25px;
  }
`

const CaptainsTitle = styled.div`
  position: absolute;
  width: 680px;
  bottom: 200px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: #FFFFFF;
  font-family: Inter;
  font-size: 61px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  
  @media screen and (max-width: 1400px) {
    bottom: 125px;
    font-size: 40px;
    line-height: 48px;
  }
  
  @media screen and (max-width: 1200px) {
    width: 300px;
    bottom: 100px;
    font-size: 24px;
    line-height: 32px;
  }
  
  @media screen and (max-width: 800px) {
    width: 260px;
    height: 144px;
    font-size: 37px;
    line-height: 48px;
  }
  
  @media screen and (max-width: 500px) {
    font-size: 27px;
    line-height: 38px;
    height: 130px;
  }
`

const CaptainsDescription = styled.div`
  width: 319px;
  height: 66px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  opacity: 0.7;
  
  @media screen and (max-width: 800px) {
    margin-top: 24px;
  }
  
  @media screen and (max-width: 500px) {
    width: 82%;
    font-size: 12px;
    line-height: 18px;
  }
`

const CaptainsButtons = styled(Flex)`
  position: absolute;
  bottom: 40px;
  
  @media screen and (max-width: 1400px) {
    bottom: 20px;
  }
  
  @media screen and (max-width: 1200px) {
    a {
      height: 30px;
    }
  }
  
  @media screen and (max-width: 800px) {
    margin-top: 43px;
    display: block;
    width: 90%;
    
    a {
      width: 307px;
      height: 48px;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;

      :nth-of-type(n + 2) {
        margin-top: 20px;
      }
    }
  }
  
  @media screen and (max-width: 500px) {
    margin-top: 10px;
    width: 90%;
    
    a {
      width: 100%;
      height: 28px;
      font-size: 12px;
      font-weight: 700;
      line-height: 18px;

      :nth-of-type(n + 2) {
        margin-top: 10px;
      }
    }
  }
`

const EmailSection = styled(Section)`
  margin-top: 218px;
  
  @media screen and (max-width: 800px) {
    margin-top: 50px;
  }
`

const EmailTitle = styled.div`
  width: 687px;
  color: #FFFFFF;
  font-family: Inter;
  font-size: 61px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  
  @media screen and (max-width: 800px) {
    width: 500px;
    font-size: 50px;
    line-height: 58px;
  }
  
  @media screen and (max-width: 600px) {
    width: 370px;
    font-size: 28px;
    line-height: 36px;
  }
`

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 405px;
  margin-top: 30px;
  
  @media screen and (max-width: 600px) {
    width: 300px;
  }
`

const EmailInput = styled(Input)`
  width: 285px;
  height: 48px;
  
  @media screen and (max-width: 600px) {
    width: 65%;
  }
`

const PresentationSection = styled(Section)`
  margin-top: 51px;
  width: 1057px;
  height: 635px;
  background-image: url(${props => props.desktopUrl});
  background-size: 100% 100%;
  
  @media screen and (max-width: 1475px) {
    width: 830px;
    height: 500px;
  }
  
  @media screen and (max-width: 1200px) {
    width: 664px;
    height: 400px;
  }
  
  @media screen and (max-width: 1000px) {
    width: 581px;
    height: 350px;
  }
  
  @media screen and (max-width: 800px) {
    background-image: url(${props => props.mobileUrl});
    width: 355px;
    height: 555px;
  }
`

const PresentationButton = styled<any>(Button)`
  position: absolute;
  bottom: 50px;
  left: 50px;
  background: #FFA100;
  transition: transform 0.3s ease-in-out;
  
  :hover {
    transform: scale(1.1); 
  }
  
  @media screen and (max-width: 800px) {
    width: 80%;
    left: 0;
    right: 0;
    bottom: 25px;
    margin: 0 auto;
  }
`

const Planet = styled.img`
  position: absolute;
  bottom: -285px;
  left: -105px;
`

const TokenSection = styled(Section)`
  position: relative;
  margin-top: 190px;
  width: 1057px;
  display: flex;
  height: fit-content;
  
  @media screen and (max-width: 1475px) {
    margin-top: 130px;
    width: 100%;
  }
  
  @media screen and (max-width: 1200px) {
    margin-top: 70px;
  }
  
  @media screen and (max-width: 1200px) {
    margin-top: 50px;
  }
`

const TokenHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 1475px) {
    > div:nth-of-type(2) {
      max-width: 500px;
      font-size: 12px;
      line-height: 20px;
      margin-left: 20px;
    }
  }
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`

const TokenName = styled.div`
  color: #FFFFFF;
  text-transform: uppercase;
  font-family: Inter;
  font-size: 61px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
`

const TokenDescription = styled.div`
  margin-left: 46px;
  width: 353px;
  color: #FFFFFF;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`

const TokenButtons = styled.div<{ mobile?: boolean }>`
  ${({ mobile }) => mobile ? 'display: none;' : 'display: flex;'}
  justify-content: space-between;
  width: 267px;
  margin-left: auto;
  margin-right: 0;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  
  a {
    padding: 14px 24px;
  }
  
  @media screen and (max-width: 800px) {
    ${({ mobile }) => mobile ? 'display: flex;' : 'display: none;'}
    width: 100%;
    margin-top: 28px;
    justify-content: center;
    
    a {
      width: 45%;
      
      :last-of-type {
        margin-left: 10px;
      }
    }
  }
`

const TokenCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 282px;
  background-color: #252525;
  border-radius: 16px;
  
  :nth-of-type(n + 2) {
    margin-top: 16px;
  }
  
  @media screen and (max-width: 1475px) {
    width: 200px;
    height: 220px;
  }
  
  @media screen and (max-width: 1200px) {
    width: 150px;
    height: 165px;
    
    > div:first-of-type {
      width: 36px;
      height: 36px;
      
      img {
        width: 100%;
        height: 100%;
      }
    }
    
    p {
      font-size: 20px;
      line-height: 28px;
    }
  }
  
   @media screen and (max-width: 1000px) {
    width: 140px;
    height: 154px;
    
    > div:first-of-type {
      width: 24px;
      height: 24px;
    }
    
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
  
  @media screen and (max-width: 800px) {
    width: 90%;
    border-radius: 24px;
    padding: 15px;
    height: 120px;
    flex-direction: row;
    justify-content: flex-start;
    
    > div:first-of-type {
      width: 72px;
      height: 72px;
    }
    
    > div:last-of-type {
      width: 80%;
      align-items: flex-start;
      margin-left: 20px;
      
      p {
        margin: 0;
        font-size: 24px;
        line-height: 48px;
      }
      
      div {
        font-size: 18px;
        line-height: 24px;
      }
    }
    
    :nth-of-type {
      margin-top: 16px;
    }
  }
`

const TokenInfoFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TokenBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`

const AmountSection = styled(Section)`
  position: relative;
  margin: 157px 0 300px;
  
  @media screen and (max-width: 1475px) {
    margin-top: 122px;
  }
`

const AmountDollars = styled(Text)`
  font-family: Inter;
  font-size: 61px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
  
  @media screen and (max-width: 600px) {
    font-size: 37px;
    line-height: 48px;
  }
`

const AmountText = styled(Text)`
  margin-top: 15px;
  opacity: 0.7;
  text-shadow: none;
  
  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`

const AmountDescription = styled(Text)`
  width: 696px;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  text-align: center;
  
  @media screen and (max-width: 1475px) {
    font-size: 50px;
    line-height: 58px;
  }
  
  @media screen and (max-width: 1000px) {
    width: 600px;
    font-size: 40px;
    line-height: 48px;
  }
  
  @media screen and (max-width: 600px) {
    width: 354px;
    font-size: 24px;
    line-height: 32px;
  }
`

const HomeGreetings: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <GreetingsWrapper>
        <StyledAppContainer>
          <Body>
            <Section>
              <MainText>
                <p>Gamified DeFi</p>
                <p>ecosystem</p>
              </MainText>
              <MainText mobile>
                Gamified DeFi ecosystem
              </MainText>
              <DescriptionTextHeadline>
                <div>Smart NFT assets. Multichain. Cross-chain. High profit yield farming.</div>
              </DescriptionTextHeadline>
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
              <div>
                <img src={planet} alt="planet" />
              </div>
              <Star mobile style={{ 'left': '50px', 'top': '50px' }} src={special_27x48} alt="special_27x48" />
              <Star mobile style={{ 'left': '75px', 'top': '250px' }} src={orange_9x10} alt="orange_9x10" />
              <Star mobile style={{ 'right': '175px', 'top': '400px' }} src={orange_9x10} alt="orange_9x10" />
              <Star mobile style={{ 'right': '0px', 'top': '350px' }} src={grey_13x14} alt="grey_13x14" />
              <Star mobile style={{ 'left': '200px', 'top': '475px' }} src={grey_13x14} alt="grey_13x14" />
              <Star mobile style={{ 'right': '50px', 'top': '50px' }} src={grey_24x26} alt="grey_24x26" />
              <Star mobile style={{ 'right': '250px', 'top': '550px' }} src={white_18x19} alt="white_18x19" />
              <Star mobile style={{ 'left': '15px', 'top': '600px' }} src={white_13x14} alt="white_13x14" />
            </Section>
            <Section>
              <NetworksContainer>
                <Text small>{t('poweredBy')}</Text>
                <Networks mobile>
                  <NetworkItem>
                    <PolygonIcon />
                  </NetworkItem>
                  <NetworkItem>
                    <BscIcon />
                  </NetworkItem>
                  <NetworkItem>
                    <HuobiIcon />
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
                    <HuobiIcon />
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
                    <PolkadotIcon />
                  </NetworkItem>
                  <NetworkItem disabled>
                    <NearIcon />
                  </NetworkItem>
                  <NetworkItem disabled>
                    <AIcon />
                  </NetworkItem>
                  <NetworkItem disabled>
                    <SolanaIcon />
                  </NetworkItem>
                </Networks>
              </NetworksContainer>
            </Section>
            <UsedSection style={{ 'marginTop': '113px' }}>
              <Flex style={{ 'justifyContent': 'center', 'width': '100%' }}>
                <UsedText>
                  Used by millions, trusted with billions
                </UsedText>
                <Button desktop type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                  Watch detailed statistics
                </Button>
              </Flex>
            </UsedSection>
            <StatsSection>
              <Star style={{ 'left': '300px', 'top': '50px' }} src={orange_9x10} alt='orange star 9x10' />
              <Star style={{ 'right': '350px', 'top': '50px' }} src={orange_9x10} alt='orange star 9x10' />
              <Star style={{ 'left': '285px', 'top': '200px' }} src={white_13x14} alt="white star 13x14" />
              <Star style={{ 'right': '350px', 'top': '120px' }} src={white_13x14} alt="white star 13x14" />
              <Star style={{ 'right': '550px', 'top': '0' }} src={grey_13x14} alt="grey_13x14" />
              <StatsBlock>
                <Circle>
                  <CircleImg src={Users} alt="users" />
                </Circle>
                <StatsInfo>
                  <CircleText>72K users</CircleText>
                  <StyledSpan>Last month</StyledSpan>
                </StatsInfo>
              </StatsBlock>
              <StatsBlock>
                <CoinsCircle>
                  <CircleImg src={Coins} alt="coins" />
                </CoinsCircle>
                <StatsInfo>
                  <CircleText>5 605 503 $</CircleText>
                  <StyledSpan>Total Value Locked</StyledSpan>
                </StatsInfo>
              </StatsBlock>
              <StatsBlock>
                <Circle>
                  <CircleImg src={Arrows} alt="arrows" />
                </Circle>
                <StatsInfo>
                  <CircleText>3 186 824 $</CircleText>
                  <StyledSpan>Transactions for all time</StyledSpan>
                </StatsInfo>
              </StatsBlock>
              <Button mobile type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                Watch detailed statistics
              </Button>
              <Star style={{ 'right': '150px', 'top': '400px' }} src={white_13x14} alt="white star 13x14" />
              <Star style={{ 'width': '18px', 'height': '19px', 'right': '300px', 'bottom': '50px' }} src={orange_9x10}
                    alt='orange star 9x10' />
              <Star style={{ 'left': '175px', 'bottom': '-50px' }} src={orange_9x10} alt='orange star 9x10' />
            </StatsSection>
            <TradeSection>
              <Star style={{ 'left': '400px', 'top': '30px' }} src={white_18x19} alt="white_18x19" />
              <ImageBox>
                <img src={Astronaut} alt='astronaut' />
                <AbsoluteImg desktop style={{ 'top': '175px', 'left': '35px' }} src={Swap} alt='swap' />
              </ImageBox>
              <TradeContainer>
                <TradeTitle>Trade anything anywhere</TradeTitle>
                <TradeInfo>Trade any asset by only connecting your wallet</TradeInfo>
                <AbsoluteImg mobile src={Swap} alt='swap' />
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
              <Star style={{ 'left': '550px', 'bottom': '30px' }} src={white_18x19} alt="white_18x19" />
              <Star style={{ 'left': '100px', 'bottom': '-100px' }} src={grey_13x14} alt="grey_13x14" />
              <Star style={{
                'right': '0',
                'bottom': '50px',
                'opacity': '0.5',
                'transform': 'matrix(-0.92, 0.39, 0.39, 0.92, 0, 0)',
              }} src={special_27x48} alt="special_27x48" />
            </TradeSection>
            <FarmingSection>
              <Star style={{ 'left': '400px', 'top': '25px' }} src={special_27x48} alt="special_27x48" />
              <Star style={{
                'right': '-75px',
                'top': '75px',
                'opacity': '0.1',
                'transform': 'rotate(22.85deg)',
              }} src={special_27x48} alt="special_27x48" />
              <ImageBox style={{ 'position': 'relative', 'width': '35%' }}>
                <img src={UFO} alt='UFO' />
                <AbsoluteImg desktop style={{ 'top': '155px', 'left': '35px' }} src={Farming} alt='Farming' />
              </ImageBox>
              <FarmingContainer>
                <FarmingTitle>Farming</FarmingTitle>
                <FarmingInfo>
                  Higher than other projects yield is ensured by smart contract management and unique strategies
                </FarmingInfo>
                <AbsoluteImg mobile style={{ 'top': '155px', 'left': '35px' }} src={Farming} alt='Farming' />
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
              <Star style={{
                'left': '150px',
                'bottom': '0',
                'opacity': '0.3',
                'transform': 'matrix(-0.92, 0.39, 0.39, 0.92, 0, 0)',
              }} src={special_27x48} alt="special_27x48" />
              <Star style={{ 'left': '550px', 'bottom': '-25px' }} src={white_18x19} alt="white_18x19" />
            </FarmingSection>
            <CaptainsSection desktop url={Captains}>
              <Star style={{ 'right': '100px', 'top': '-75px' }} src={grey_13x14} alt="grey_13x14" />
              <UpperShip src={ship_1} alt='ship_1' />
              <CaptainsTitle>
                Revolutionary gamified yield farming
              </CaptainsTitle>
              <VideoButton type="danger">
                <img src={Video_Icon} alt="video-icon" />
                <span>Watch video</span>
              </VideoButton>
              <LowerShip src={ship_2} alt='ship_2' />
              <CaptainsButtons>
                <Button type="default" href={t('presentationLink')} target="_blank">
                  Buy captains or lootboxes
                </Button>
                <InputContainer>
                  <Button type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                    Play now
                  </Button>
                </InputContainer>
              </CaptainsButtons>
            </CaptainsSection>
            <CaptainsSection mobile url={Captains_mobile}>
              <CaptainsTitle>
                Revolutionary gamified yield farming
              </CaptainsTitle>
              <VideoButton type="danger">
                <img src={Video_Icon} alt="video-icon" />
                <span>Watch video</span>
              </VideoButton>
              <CaptainsDescription>
                Higher than other projects yield is ensured by smart contract management and unique strategies
              </CaptainsDescription>
              <CaptainsButtons>
                <Button type="default" href={t('presentationLink')} target="_blank">
                  Buy captains or lootboxes
                </Button>
                <Button type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                  Play now
                </Button>
              </CaptainsButtons>
            </CaptainsSection>
            <EmailSection>
              <EmailTitle>
                Stay tuned for public round launch
              </EmailTitle>
              <InputBox>
                <EmailInput placeholder="Your email" />
                <Button type="default" href={t('presentationLink')} target="_blank">
                  Send
                </Button>
              </InputBox>
            </EmailSection>
            <PresentationSection desktopUrl={presentation} mobileUrl={presentation_mobile}>
              <PresentationButton>Open presentation</PresentationButton>
              <Planet src={planet_2} alt="Planet_2" />
            </PresentationSection>
            <TokenSection>
              <TokenHeader>
                <TokenName>grvs</TokenName>
                <TokenDescription>Governance token with limited emission to rule any Gravis product</TokenDescription>
                <TokenButtons>
                  <Button style={{ 'fontSize': '13px' }} type="default" href={t('presentationLink')} target="_blank">
                    Buy GRVS
                  </Button>
                  <InputContainer>
                    <Button style={{ 'fontSize': '13px' }} type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                      Learn more
                    </Button>
                  </InputContainer>
                </TokenButtons>
              </TokenHeader>
              <TokenBody>
                <TokenCard>
                  <Circle>
                    <CircleImg src={stack} alt="stack" />
                  </Circle>
                  <TokenInfoFlex>
                    <CircleText>320 005</CircleText>
                    <StyledSpan>Circulating supply</StyledSpan>
                  </TokenInfoFlex>
                </TokenCard>
                <TokenCard>
                  <Circle>
                    <CircleImg src={supply} alt="supply" />
                  </Circle>
                  <TokenInfoFlex>
                    <CircleText>150M</CircleText>
                    <StyledSpan>Max total supply</StyledSpan>
                  </TokenInfoFlex>
                </TokenCard>
                <TokenCard>
                  <Circle>
                    <CircleImg src={stonks} alt="stonks" />
                  </Circle>
                  <TokenInfoFlex>
                    <CircleText>2,23 $</CircleText>
                    <StyledSpan>Current price</StyledSpan>
                  </TokenInfoFlex>
                </TokenCard>
                <TokenCard>
                  <Circle>
                    <CircleImg src={cap} alt="cap" />
                  </Circle>
                  <TokenInfoFlex>
                    <CircleText>$2 348 423</CircleText>
                    <StyledSpan>Market cap</StyledSpan>
                  </TokenInfoFlex>
                </TokenCard>
              </TokenBody>
              <TokenButtons mobile>
                <Button style={{ 'fontSize': '13px' }} type="default" href={t('presentationLink')} target="_blank">
                  Buy GRVS
                </Button>
                <Button style={{ 'fontSize': '13px' }} type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                  Learn more
                </Button>
              </TokenButtons>
            </TokenSection>
            <TokenSection>
              <Star style={{
                'left': '175px',
                'top': '-125px',
                'opacity': '0.6',
                'transform': 'rotate(-50.29deg)',
              }} src={special_27x48} alt="special_27x48" />
              <Star style={{
                'width': '18px',
                'height': '19px',
                'left': '550px',
                'top': '-75px',
              }} src={grey_13x14} alt="grey_13x14" />
              <Star style={{ 'right': '175px', 'top': '-125px' }} src={white_18x19} alt="white_18x19" />
              <TokenHeader>
                <TokenName>grvx</TokenName>
                <TokenDescription>Unlimited supply, reward for various activities. <br />
                  Farm, autofarm, mine, use it to buy loot boxes, bridge it.</TokenDescription>
                <TokenButtons>
                  <Button style={{ 'fontSize': '13px' }} type="default" href={t('presentationLink')} target="_blank">
                    Buy GRVX
                  </Button>
                  <InputContainer>
                    <Button style={{ 'fontSize': '13px' }} type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                      Learn more
                    </Button>
                  </InputContainer>
                </TokenButtons>
              </TokenHeader>
              <TokenBody>
                <TokenCard>
                  <Circle>
                    <CircleImg src={Users_orange} alt="users" />
                  </Circle>
                  <TokenInfoFlex>
                    <CircleText>320 005</CircleText>
                    <StyledSpan>Circulating supply</StyledSpan>
                  </TokenInfoFlex>
                </TokenCard>
                <TokenCard>
                  <Circle>
                    <CircleImg src={block} alt="block" />
                  </Circle>
                  <TokenInfoFlex>
                    <CircleText>1752</CircleText>
                    <StyledSpan>Current generation per block</StyledSpan>
                  </TokenInfoFlex>
                </TokenCard>
                <TokenCard>
                  <Circle>
                    <CircleImg src={stonks_orange} alt="stonks" />
                  </Circle>
                  <TokenInfoFlex>
                    <CircleText>2,14 $</CircleText>
                    <StyledSpan>Current price</StyledSpan>
                  </TokenInfoFlex>
                </TokenCard>
                <TokenCard>
                  <Circle>
                    <CircleImg src={cap_orange} alt="cap" />
                  </Circle>
                  <TokenInfoFlex>
                    <CircleText>$1 523 512</CircleText>
                    <StyledSpan>Market cap</StyledSpan>
                  </TokenInfoFlex>
                </TokenCard>
              </TokenBody>
              <TokenButtons mobile>
                <Button style={{ 'fontSize': '13px' }} type="default" href={t('presentationLink')} target="_blank">
                  Buy GRVX
                </Button>
                <Button style={{ 'fontSize': '13px' }} type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                  Learn more
                </Button>
              </TokenButtons>
            </TokenSection>
            <AmountSection>
              <Star style={{ 'left': '400px', 'top': '0' }} src={grey_13x14} alt="grey_13x14" />
              <Star style={{
                'left': '425px',
                'top': '350px',
                'opacity': '0.6',
                'transform': 'rotate(-50.29deg)',
              }} src={special_27x48} alt="special_27x48" />
              <Star style={{ 'left': '400px', 'bottom': '25px' }} src={white_18x19} alt="white_18x19" />
              <AmountDollars>
                $ 1,423,631.536
              </AmountDollars>
              <AmountText>Amount of tokens transferred</AmountText>
              <img style={{ 'marginTop': '42px' }} src={networks} alt='networks' />
              <AmountDescription>
                Easy-to-use transparent bridge
                for GRVS and GRVX tokens across 3 networks
              </AmountDescription>
              <Star style={{
                'width': '18px',
                'height': '19px',
                'right': '400px',
                'top': '250px',
              }} src={grey_13x14} alt="grey_13x14" />
              <Star style={{
                'width': '12px',
                'height': '13px',
                'right': '400px',
                'top': '500px',
              }} src={white_18x19} alt="white_18x19" />
              <Star style={{
                'width': '18px',
                'height': '19px',
                'right': '775px',
                'bottom': '-150px',
              }} src={orange_9x10} alt="orange_9x10" />
            </AmountSection>
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
