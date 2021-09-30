import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Button, Flex, Input, urlSearchLanguageParam } from '@gravis.finance/uikit'
import YouTube from 'react-youtube'
import {
  AIcon,
  BscIcon,
  GravisEmptyLogoIcon,
  HuobiIcon,
  NearIcon,
  PolkadotIcon,
  PolygonIcon,
  SolanaIcon,
} from '../../../components/Svg'

import special_27x48 from '../../../assets/stars/special_27x48.svg'
import orange_9x10 from '../../../assets/stars/orange_9x10.svg'
import grey_13x14 from '../../../assets/stars/grey_13x14.svg'
import grey_24x26 from '../../../assets/stars/grey_24x26.svg'
import white_18x19 from '../../../assets/stars/white_18x19.svg'
import white_13x14 from '../../../assets/stars/white_13x14.svg'
// import Users from '../../../assets/users.svg'
// import Users_orange from '../../../assets/users_orange.svg'
// import Coins from '../../../assets/coins.svg'
// import Arrows from '../../../assets/arrows.svg'
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
// import stack from '../../../assets/stack.svg'
// import supply from '../../../assets/supply.svg'
// import stonks from '../../../assets/stonks.svg'
// import stonks_orange from '../../../assets/stonks_orange.svg'
// import cap from '../../../assets/cap.svg'
// import cap_orange from '../../../assets/cap_orange.svg'
// import block from '../../../assets/block.svg'
import networks from '../../../assets/networks.png'

const GreetingsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
  }
  
  button {
    z-index: 1;
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

const StyledButton = styled.a<{ type: string, mobile?: boolean, desktop?: boolean }>`
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

const Text = styled.p<{ small?: boolean }>`
  margin-top: 77px;
  font-weight: 500;
  font-size: 23px;
  color: rgba(255, 255, 255, 1);
  // text-shadow: 1px 1px 10px;

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
`

const NetworksContainer = styled.div<{ mobile?: boolean }>`
  width: 100%;
  ${({ mobile }) => (mobile ? 'display: none;' : '')}
  @media screen and (max-width: 1000px) {
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
  
  @media screen and (max-width: 385px) {
    flex-wrap: wrap;
    
    > div {
      height: 77px;
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
    width: 100%;
    
    div:first-of-type {
      width: 100%;
    }
    font-size: 19px;
  }
  
  @media screen and (max-width: 386px) {
    margin-top: 25px;
    font-size: 14px;
  }
`

const Section = styled.section<{ desktop?: boolean, mobile?: boolean, url?: string, desktopUrl?: string, mobileUrl?: string }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

const GamifiedSection = styled(Section)`
  :first-child::after{
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
  transition: all 0.3s ease-in-out;
  
  @media screen and (max-width: 825px) {
    ${({ mobile }) => (mobile ? 'display: none;' : '')}
  }
  
  :hover {
    transform: scale(1.3);
    transition: all 0.3s ease-in-out;
    filter: brightness(150%) drop-shadow(0 0 .3em #FFFFFF);;
  }
`

/* const UsedSection = styled(Section)``

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
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

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
` */

/* const Circle = styled.div`
  position: relative;
  width: 92px;
  height: 92px;
  background: #282828;
  border-radius: 46px;
` */

/* const CoinsCircle = styled(Circle)`
  background: transparent;
  border: 1.5px solid Gainsboro;
` */

/* const CircleImg = styled.img`
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
` */

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
    ${({ mobile }) => mobile ? 'position: static; display: block; width: 345px; height: 315px; margin: 50px auto 0;' : ''}
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
  
  @media screen and (max-width: 1585px) {
    width: 90%;
  }
  
  @media screen and (max-width: 800px) {
    width: 90%;
    flex-direction: column-reverse;
  }
  
  @media screen and (max-width: 480px) {
    margin-top: 297px;
  }
  
  @media screen and (max-width: 340px) {
    margin-top: 397px;
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
  
  @media screen and (max-width: 330px) {
    margin-top: 340px;
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
  margin-bottom: 0;
  
  @media screen and (max-width: 1400px) {
    margin-top: 260px;
    width: 916.5px;
    height: 650px;
    margin-bottom: 80px;
  }
  
  @media screen and (max-width: 1250px) {
    margin-top: 210px;
    width: 705px;
    height: 500px;
  }
  
  @media screen and (max-width: 800px) {
    ${({ desktop }) => desktop ? 'display: none;' : ''}
    ${({ mobile }) => mobile ? 'display: flex;' : ''}
    margin-top: 160px;
    padding-bottom: 45px;
    width: 100%;
    height: 695px;
    justify-content: flex-end;
    background-size: cover;
    
    > a, > div {
      position: static;
    }
  }
  
  @media screen and (max-width: 500px) {
    margin-top: 130px;
    height: 625px;
    margin-bottom: 20px;
  }
`

const VideoButton = styled.a<{ showVideo?: boolean }>`
  box-sizing: border-box;
  position: absolute;
  top: 25px;
  right: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 48px;
  padding: 5px;
  background-color: #FA9D00;
  border-radius: 39px;
  transition: all 0.3s ease-in-out;
  width: 180px;
  
  > img {
    background-color: white;
    border-radius: 100%;
  }
  
  span {
    color: #FFFFFF;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;
  }
  
  :hover {
    background: #FFFFFF;
    
    span {
      color: #FA9D00;
    } 
  }
  
  ${({ showVideo }) => showVideo ? `
    width: 100% !important;
    height: 100% !important;
    right: 0 !important;
    top: 0 !important;
    background: #292929;
  ` : ''}
  
  @media screen and (max-width: 1400px) {
    width: 160px;
    top: 20px;
    right: 22px;
    
    span {
      font-size: 12px;    
      line-height: 18px;
    }
  }
  
  @media screen and (max-width: 800px) {
    margin-top: 6px;
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

const UpperShip = styled(StyledShip)<{ showVideo?: boolean }>`
  top: -160px;
  left: 0px;
  z-index: 2;
  width: 417px;
  
  transition: opacity 400ms ease-in-out;
  
  ${({ showVideo }) => showVideo ? 'opacity: 0;' : ''}
  
  @media screen and (max-width: 1400px) {
    top: -85px;
    left: -85px;
  }
`

const LowerShip = styled(StyledShip)<{ showVideo?: boolean }>`
  bottom: -172px;
  right: -61px;
  z-index: 2;
  width: 461px;
  
  transition: opacity 400ms ease-in-out;
  
  ${({ showVideo }) => showVideo ? 'opacity: 0' : ''};
  
  @media screen and (max-width: 1400px) {
    bottom: -105px;
    right: -175px;
  }
`

const InfoText = styled.div`
  position: absolute;
  bottom: 200px;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CaptainsTitle = styled.div`
  // position: absolute;
  width: 680px;
  margin: 0 auto;
  color: #FFFFFF;
  font-family: Inter;
  font-size: 61px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  
  @media screen and (max-width: 1400px) {
    width: 450px;
    bottom: 175px;
    font-size: 40px;
    line-height: 48px;
  }
  
  // @media screen and (max-width: 1200px) {
  //   width: 360px;
  //   font-size: 32px;
  //   line-height: 40px;
  // }
  
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 144px;
    font-size: 37px;
    line-height: 48px;
  }
  
  @media screen and (max-width: 500px) {
    font-size: 27px;
    line-height: 38px;
    height: 130px;
  }
  
  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
`

const CaptainsDescription = styled.div`
  height: 66px;
  color: #FFFFFF;
  font-size: 23px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  opacity: 0.7;
  padding: 0 20%;
  margin-top: 24px;
  
  @media screen and (max-width: 1250px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 800px) {
    margin-top: 24px;
    font-size: 18px;
    padding: 0;
  }
  
  @media screen and (max-width: 500px) {
    width: 82%;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 20px;
  }
`

const CaptainsButtons = styled(Flex)`
  position: absolute;
  bottom: 40px;
  
  @media screen and (max-width: 1250px) {
    bottom: 30px;
  }
  
  @media screen and (max-width: 800px) {
    margin-top: 100px;
    display: block;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    a {
      width: 60%;
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
  
  @media screen and (max-width: 450px) {
    margin-top: 40px;
  }
  
  @media screen and (max-width: 380px) {
    margin-top: 80px;
  }
`

 const EmailSection = styled(Section)`
  margin-top: 218px;

  @media screen and (max-width: 800px) {
    margin-top: 119px;
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
    width: 100%;
    font-size: 28px;
    line-height: 36px;
  }
`

const InputBox = styled.div`
  // display: flex;
  // justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  // align-items: center;
  
  > form {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 426px) {
      flex-direction: column;
      > input {
        margin: 0;
      }
      > input:last-child {
        margin-top: 20px;
      }
    }
  }
`

const EmailInput = styled(Input)`
  width: 285px;
  height: 48px;
  
  margin-right: 40px;
  @media screen and (max-width: 426px) {
    width: 100%;
  }
`

const SubmitInput = styled(Input)<{ disabled?: boolean }>`
  width: 285px;
  height: 48px;
  background: #242424;
  ${({ disabled }) => disabled ? '' : 'border: 2px solid #009CE1;'}
  box-sizing: border-box;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05), 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  color: white;
  cursor: pointer;
  width: 150px;
  transition: all 200ms ease-in-out;
  
  :hover {
    ${({ disabled }) => disabled ? 'background: #303030;' : 'border: 2px solid #009CE1;background: #009CE1;'}
  }
`

const PresentationSection = styled(Section)`
  margin-top: 51px;
  width: 1057px;
  height: 635px;
  background-image: url(${props => props.desktopUrl});
  background-size: 100% 100%;

  @media screen and (max-width: 1400px) {
    width: 916.5px;
    height: 650px;
  }
  //
  @media screen and (max-width: 1250px) {
    width: 705px;
    height: 500px;
  }

  @media screen and (max-width: 800px) {
    background-image: url(${props => props.mobileUrl});
    width: 100%;
    height: 695px;
  }
  
  @media screen and (max-width: 410px) {
    width: 100%;
    height: 555px;
  }
`

const PresentationButton = styled.a`
  position: absolute;
  bottom: 50px;
  left: 50px;
  background: #FFA100;
  transition: transform 0.3s ease-in-out;
  border: 1px solid #FFA100;
  border-radius: 41px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  height: 48px;
  line-height: 1;
  justify-content: center;
  outline: 0;
  padding: 0 24px;
  opacity: 1;
  box-shadow: 4px 4px 12px rgb(0 0 0 / 40%), -4px -4px 12px rgb(255, 255, 255, 0.05), 4px 4px 12px rgb(0, 0, 0, 0.4), -4px -4px 12px rgb(255, 255, 255, 0.05);
  text-align: center;
  align-items: center;
  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 800px) {
    width: 50%;
    left: 0;
    right: 0;
    bottom: 25px;
    margin: 0 auto;
  }
`

const PlanetBox = styled.div`

  @media screen and (max-width: 500px) {
    margin-top: -125px;
  }
  
  svg {
    width: 100%;
  }
  svg path {
    transition: all 0.3s ease-in-out;
  }
  
  :hover {
    svg path {
      opacity: 1;
      fill: white;
    }
  }
`

 const Planet = styled(PlanetBox)`
  position: absolute;
  bottom: -285px;
  left: -105px;
`
//
// const Tokens = styled.div`
//   section:first-child {
//     div:first-child {
//       div:first-child + div {
//         width: 356px;
//
//         @media screen and (max-width: 1475px) {
//           width: 225px;
//         }
//       }
//     }
//   }
// `
//
// const TokenSection = styled(Section)`
//   position: relative;
//   margin-top: 190px;
//   width: 1057px;
//   display: flex;
//   height: fit-content;
//
//   @media screen and (max-width: 1475px) {
//     margin-top: 130px;
//     width: 100%;
//   }
//
//   @media screen and (max-width: 1200px) {
//     margin-top: 70px;
//   }
//
//   @media screen and (max-width: 1000px) {
//     margin-top: 50px;
//   }
//
//   @media screen and (max-width: 800px) {
//     margin-top: 100px;
//   }
// `
//
// const TokenHeader = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//
//   @media screen and (max-width: 1475px) {
//     > div:nth-of-type(2) {
//       max-width: 500px;
//       font-size: 12px;
//       line-height: 20px;
//       margin-left: 20px;
//     }
//   }
//
//   @media screen and (max-width: 800px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `
//
// const TokenName = styled.div`
//   color: #FFFFFF;
//   text-transform: uppercase;
//   font-family: Inter;
//   font-size: 61px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 72px;
// `
//
// const TokenDescription = styled.div`
//   margin-left: 46px;
//   // width: 353px;
//   color: #FFFFFF;
//   font-family: Inter;
//   font-size: 19px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 28px;
//
//   // :first-child {
//   //   width: 356px;
//   // }
// `
//
// const TokenButtons = styled.div<{ mobile?: boolean }>`
//   ${({ mobile }) => mobile ? 'display: none;' : 'display: flex;'}
//   justify-content: space-between;
//   width: 267px;
//   margin-left: auto;
//   margin-right: 0;
//   font-family: Inter;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 20px;
//
//   a {
//     padding: 14px 24px;
//   }
//
//   @media screen and (max-width: 800px) {
//     ${({ mobile }) => mobile ? 'display: flex;' : 'display: none;'}
//     width: 100%;
//     margin-top: 28px;
//     justify-content: center;
//
//     a {
//       width: 45%;
//
//       :last-of-type {
//         margin-left: 10px;
//       }
//     }
//   }
// `
//
// const TokenCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 256px;
//   height: 282px;
//   background-color: #252525;
//   border-radius: 16px;
//   transition: transform 0.2s linear;
//
//   :hover {
//     transform: translateY(-25px);
//   }
//
//   @media screen and (max-width: 1475px) {
//     width: 200px;
//     height: 220px;
//   }
//
//   @media screen and (max-width: 1200px) {
//     width: 150px;
//     height: 165px;
//
//     > div:first-of-type {
//       width: 36px;
//       height: 36px;
//
//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }
//
//     p {
//       font-size: 20px;
//       line-height: 28px;
//     }
//   }
//
//    @media screen and (max-width: 1000px) {
//     width: 140px;
//     height: 154px;
//
//     > div:first-of-type {
//       width: 24px;
//       height: 24px;
//     }
//
//     p {
//       font-size: 14px;
//       line-height: 22px;
//     }
//   }
//
//   @media screen and (max-width: 800px) {
//     width: 90%;
//     border-radius: 24px;
//     padding: 15px;
//     height: 120px;
//     flex-direction: row;
//     justify-content: flex-start;
//
//     > div:first-of-type {
//       width: 72px;
//       height: 72px;
//     }
//
//     > div:last-of-type {
//       width: 80%;
//       align-items: flex-start;
//       margin-left: 20px;
//
//       p {
//         margin: 0;
//         font-size: 24px;
//         line-height: 48px;
//       }
//
//       div {
//         font-size: 18px;
//         line-height: 24px;
//       }
//     }
//
//     :nth-child(n + 2) {
//       margin-top: 16px;
//     }
//   }
// `
//
// const TokenInfoFlex = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `
//
// const TokenBody = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 45px;
//
//   @media screen and (max-width: 800px) {
//     flex-direction: column;
//     width: 100%;
//   }
// `

const AmountSection = styled(Section)`
  position: relative;
  margin: 157px 0 100px;

  @media screen and (max-width: 1475px) {
    margin: 0 0 100px;
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 200px;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 66px;
  }
`

// const AmountDollars = styled(Text)`
//   font-family: Inter;
//   font-size: 61px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 72px;
//
//   @media screen and (max-width: 600px) {
//     margin: 0;
//     font-size: 37px;
//     line-height: 48px;
//   }
// `
//
// const AmountText = styled(Text)`
//   margin-top: 15px;
//   opacity: 0.7;
//   text-shadow: none;
//
//   @media screen and (max-width: 600px) {
//     font-size: 16px;
//     line-height: 24px;
//   }
// `

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
    width: 100%;
    font-size: 24px;
    line-height: 32px;
  }
`

const StyledYouTube = styled(YouTube)<{ showVideo?: boolean }>`
  width: 100%;
  height: 750px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  ${({ showVideo }) => showVideo ? 'animation: show-video 400ms ease-in-out forwards; pointer-events: auto' : 'animation: hide-video 400ms ease-in-out forwards;'};
  
  @keyframes show-video {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes hide-video {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

const ComingSoonButton = styled(Button)`
  animation: shine-text 6s ease-in-out infinite;
  
  @keyframes shine-text {
    0% {
      box-shadow: 0 0 6px rgba(255,255,255,0);
    }
    50% {
    box-shadow: 0 0 16px rgba(255,255,255,0.5);
    }
    100% {
    box-shadow: 0 0 6px rgba(255,255,255,0);
    }
  }
`

const ComingSoonContainer = styled.div`
  margin: 100px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 80px;
  font-weight: 600;
  flex-direction: column;
  align-items: center;
  
  > h1 {
    margin-bottom: 40px;
    text-align: center;
    
    @media screen and (max-width: 625px) {
      font-size: 60px;
    }
    
    @media screen and (max-width: 465px) {
      font-size: 40px;
    }
    
    @media screen and (max-width: 330px) {
      font-size: 30px;
    }
  }
  
  > svg {
    width: 84px;
    height: 84px;
  }
`

const StyledFlex = styled(Flex)`
  margin-top: 60px;
  z-index: 1;
  
  @media screen and (max-width: 415px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    > div:last-child {
      margin-top: 20px;
      width: 100%;
    }
  }
`

const TradeNowFlex = styled(Flex)`
  margin-top: 48px;
  
  @media screen and (max-width: 420px) {
    flex-direction: column;
    
    > *:last-child {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`

const HomeGreetings: React.FC = () => {
  const { t } = useTranslation()

  const [showVideo, setShowVideo] = useState(false)

  const videoRef = useRef(null)

  const onClickHandler = (e) => {
    if (!e.target.closest(StyledYouTube) && !e.target.closest(VideoButton)) {
      setShowVideo(false)
      videoRef.current.internalPlayer.pauseVideo()
    }
  }

  // const emailInputRef = useRef(null);
  //
  const validateEmailString = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  //
  const [validEmail, setValidEmail] = useState(null)

  const validateEmail = (e) => {
    if(validateEmailString(e.target.value))
      setValidEmail(true)
    else
      setValidEmail(false)
  }
  //
  // const sendEmail = () => {
  //   if(validateEmailString(emailInputRef.current.value)) {
  //     const formData = new FormData();
  //     formData.append("EMAIL", emailInputRef.current.value)
  //     formData.append("subscribe", "Subscribe")
  //     fetch('https://gmail.us5.list-manage.com/subscribe/post?u=c026fa072d55de036c533ca41&id=f5865b85b1',
  //       {
  //         method: 'POST',
  //         mode: 'no-cors',
  //         body: formData,
  //       })
  //       .then(result => console.log('res', result))
  //   }
  // }

  useEffect(() => {
    if (showVideo) {
      videoRef.current.internalPlayer.playVideo()
      document.addEventListener('click', onClickHandler)
    }
    else
      document.removeEventListener('click', onClickHandler)
  }, [showVideo])

  return (
    <>
      <GreetingsWrapper>
        <StyledAppContainer>
          <Body>
            <GamifiedSection>
              <MainText>
                <p>{t('Gamified DeFi')}</p>
                <p>{t('ecosystem')}</p>
              </MainText>
              <MainText mobile>
                Gamified DeFi ecosystem
              </MainText>
              <DescriptionTextHeadline>
                <div>{t('Smart NFT assets')}</div>
              </DescriptionTextHeadline>
              <StyledFlex alignItems="center" >
                <StyledButton type="default"
                        href={`${process.env.REACT_APP_EXCHANGE_URL}?${urlSearchLanguageParam}=${t('language')}`}
                        target="_blank">
                  {t('tradeNow')}
                </StyledButton>
                <InputContainer>
                  <StyledButton type="danger"
                          href={`${process.env.REACT_APP_ASTEROID_MINING_URL}/hangar?${urlSearchLanguageParam}=${t('language')}`}>
                    {t('playNow')}
                  </StyledButton>
                </InputContainer>
              </StyledFlex>
              <PlanetBox>
                <svg width="722" height="397" viewBox="0 0 722 397" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.1"
                        d="M650.554 391.046C613.608 367.482 573.876 348.209 532.577 331.727C528.601 311.079 521.181 290.83 510.085 271.611C456.626 179.016 337.789 147.111 245.121 200.613C229.031 209.902 214.795 221.2 202.497 233.962C154.245 222.985 102.779 216.247 57.105 228.314C36.9213 233.61 22.1044 246.138 17.5016 261.906C13.2136 276.499 17.8495 292.098 30.5859 305.901C62.0415 340.084 117.119 357.55 148.285 365.082C147.637 399.226 155.921 433.875 174.2 465.534C227.659 558.129 346.452 589.96 439.046 536.501C465.342 521.319 486.664 500.963 502.627 477.346C544.455 490.443 601.635 508.283 651.18 502.92C668.37 501.041 681.829 497.343 691.438 491.794C700.601 486.504 706.235 479.577 708.224 470.979C714.297 445.026 683.572 412.109 650.554 391.046ZM473.739 241.344C483.89 251.872 492.969 263.813 500.624 277.073C509.828 293.014 516.347 309.811 520.382 326.949C485.231 313.374 449 301.714 412.517 290.993C420.462 287.896 425.224 283.756 427.024 278.446C429.847 270.261 424.83 262.43 420.016 254.781C414.913 246.802 411.761 241.172 414.004 236.798C415.241 234.296 419.642 233.145 426.365 233.436C435.83 233.831 445.09 235.934 454.862 238.238C460.213 239.42 465.724 240.707 471.212 241.611C471.991 241.757 472.908 241.625 473.739 241.344ZM250.701 210.105C318.861 170.752 402.102 180.4 459.372 227.986C458.667 227.797 457.888 227.651 457.226 227.537C447.379 225.276 437.222 222.995 426.829 222.54C415.314 222.037 407.753 225.111 404.262 231.795C398.984 242.093 405.538 252.413 410.77 260.615C414.22 266.073 417.755 271.68 416.713 274.864C415.997 277.065 412.55 279.353 407.192 281.255C403.986 282.411 400.522 283.119 396.599 283.894C395.991 284.047 395.427 284.273 394.906 284.574C394.459 284.832 394.055 285.165 393.694 285.572C367.499 278.049 341.179 270.997 315.126 263.889C301.848 260.332 288.645 256.731 275.634 253.119L264.311 250.022C248.715 245.717 232.136 241.085 215.047 236.947C225.531 226.722 237.441 217.76 250.701 210.105ZM261.317 260.491L272.683 263.662C285.694 267.274 298.929 270.758 312.175 274.433C382.804 293.547 454.918 312.997 522.765 339.677C524.312 349.411 525.092 359.191 525.018 368.868C512.855 363.972 499.869 358.855 485.633 353.467C379.509 313.129 283.493 283.245 193.021 262.278C197.04 256.68 201.411 251.176 206.071 246.002C225.382 250.547 243.958 255.713 261.317 260.491ZM535.342 384.858C553.524 392.438 569.72 399.674 585.116 407.074C587.341 408.174 589.639 409.231 591.938 410.287C608.756 418.257 626.161 426.384 637.37 439.777C643.302 446.782 645.347 453.249 643.362 458.07C641.135 463.329 634.066 466.913 624.435 467.607C591.479 470.047 555.182 457.929 523.773 446.364C522.395 445.869 520.933 445.918 519.656 446.457C528.157 426.948 533.495 406.088 535.342 384.858ZM38.6187 298.482C28.5626 287.602 24.8822 275.722 27.9707 264.9C30.335 256.781 36.5024 249.744 45.2925 244.669C49.613 242.175 54.5012 240.147 59.8938 238.821C101.551 227.882 149.01 233.357 194.153 243.249C189.652 248.529 185.548 253.978 181.689 259.682C177.78 258.76 173.84 257.956 169.974 257.109C155.023 253.922 141.752 251.751 129.286 250.804C119.723 250.067 111.88 249.729 104.529 249.9C86.9375 250.224 74.8636 255.804 70.6285 265.5C67.639 272.192 67.3275 283.695 82.2857 300.486C97.9521 318.159 122.341 325.135 143.909 331.355C146.185 332.028 148.417 332.626 150.575 333.267C150.928 333.361 151.163 333.424 151.473 333.444C150.222 340.225 149.25 347.143 148.78 354.069C118.648 346.436 67.5115 329.774 38.6187 298.482ZM175.535 269.493C165.665 286.117 158.415 304.009 153.911 322.7L153.793 322.669C151.561 322.071 149.285 321.398 147.009 320.725C126.894 314.957 104.033 308.391 90.479 293.173C81.965 283.587 78.449 275.089 80.6767 269.83C81.49 267.97 83.1257 266.33 85.5095 264.954C89.83 262.459 96.5236 260.978 104.802 260.867C111.769 260.719 119.303 261.037 128.481 261.796C140.371 262.778 153.247 264.78 167.771 267.916C170.301 268.343 172.918 268.918 175.535 269.493ZM471.352 498.183C462.614 495.779 453.885 492.873 445.39 490.03C439.609 488.103 433.594 486.113 427.547 484.241C424.641 483.337 421.618 484.982 420.713 487.888C419.809 490.795 421.455 493.817 424.361 494.722C430.247 496.488 436.188 498.521 441.926 500.373C448.454 502.563 455.218 504.816 462.045 506.834C453.361 514.331 443.864 521.105 433.584 527.04C372.351 562.393 299.036 558.238 243.248 522.51C243.323 522.467 243.354 522.349 243.429 522.306C255.411 508.138 268.453 511.633 284.903 516.04C295.008 518.748 305.423 521.476 316.407 520.2C329.107 518.628 333.165 512.412 334.37 507.445C337.638 493.838 321.877 476.517 313.092 470.763C310.567 469.142 307.177 469.808 305.513 472.258C303.892 474.784 304.558 478.173 307.009 479.838C315.355 485.348 325.103 498.791 323.657 504.889C322.945 507.784 318.618 508.891 314.982 509.302C306.067 510.377 296.667 507.858 287.619 505.434C270.699 500.9 251.472 495.811 234.99 515.26C234.703 515.624 234.385 516.105 234.216 516.501C214.072 501.909 196.672 482.953 183.468 460.084C148.631 399.745 152.236 327.541 186.513 271.994C233.324 282.711 281.511 295.812 331.939 311.591C331.567 311.806 331.163 312.139 330.759 312.471C324.142 319.073 312.441 317.386 301.049 315.719C295.412 314.901 290.01 314.146 285.05 314.328C271.247 314.849 263.221 319.184 261.155 327.131C258.301 338.016 266.855 346.982 275.732 351.691C285.325 356.78 295.776 358.195 305.8 359.559C315.472 360.828 324.568 362.132 332.493 366.396C336.835 368.756 341.852 374.004 342.727 378.962C343.089 381.137 342.617 382.899 341.216 384.602C339.231 386.84 339.482 390.371 341.795 392.313C344.033 394.298 347.564 394.048 349.506 391.735C353.147 387.547 354.575 382.451 353.559 377.078C351.983 368.155 344.512 360.549 337.817 356.866C328.17 351.511 317.526 350.107 307.31 348.755C297.756 347.517 288.777 346.245 280.821 342.098C279.709 341.548 270.061 336.192 271.73 329.965C272.423 327.38 277.557 325.607 285.515 325.284C289.398 325.128 294.298 325.874 299.508 326.64C312.224 328.536 327.928 330.792 338.476 320.332C340.186 318.65 340.538 316.162 339.526 314.065C384.976 328.447 432.25 344.956 481.742 363.758C497.282 369.685 511.485 375.192 524.526 380.575C523.958 389.742 522.655 398.838 520.689 407.82C520.368 407.608 520.047 407.396 519.694 407.301C509.337 402.952 498.222 398.84 486.716 395.253C486.555 395.147 468.062 389.436 463.757 388.346C459.453 387.255 452.598 386.048 448.116 385.855C443.015 385.621 427.712 384.921 422.818 395.196C419.024 403.247 423.469 414.387 435.982 428.318C436.315 428.722 437.086 429.37 437.986 430.241C440.921 432.916 442.893 434.956 443.902 436.36C439.037 438.771 432.492 437.584 426.138 436.385L425.594 436.303C420.372 435.344 415.097 434.119 409.542 432.757C396.288 429.583 382.638 426.241 368.602 427.391C357.137 428.349 353.271 434.555 351.911 438.22C349.265 445.508 352.283 454.692 359.742 462.106C363.878 466.173 368.983 469.682 371.669 471.409C378.281 475.637 385.306 479.03 392.127 482.244C394.629 483.481 397.088 484.643 399.59 485.881C402.253 487.224 405.577 486.099 406.92 483.437C408.263 480.774 407.138 477.45 404.476 476.107C401.974 474.87 399.397 473.676 396.852 472.364C390.031 469.151 383.562 466.033 377.549 462.154C373.622 459.654 369.864 456.758 367.442 454.283C362.523 449.376 361.263 444.441 362.191 441.919C363.15 439.28 366.689 438.528 369.526 438.28C381.833 437.233 394.661 440.356 407.018 443.352C412.455 444.683 418.083 446.002 423.657 447.055L424.127 447.181C432.659 448.711 443.219 450.66 451.929 444.241C454.109 442.684 455.358 440.374 455.474 437.823C455.748 432.103 450.625 427.016 445.291 422.249C444.723 421.782 444.273 421.347 444.069 421.166C434.409 410.455 431.397 402.658 432.666 400.039C433.522 398.253 437.889 396.527 447.546 396.91C451.1 397.044 457.336 398.211 461.053 399.144C464.417 399.983 479.417 404.632 483.424 405.894C494.578 409.387 505.414 413.361 515.494 417.573C516.402 417.942 517.374 418.077 518.291 417.945C510.016 447.652 494.115 475.506 471.352 498.183ZM697.598 468.572C693.986 484.165 669.708 489.939 650.108 492.117C603.933 497.124 549.446 480.509 508.762 467.844C511.631 463.009 514.266 458.111 516.666 453.149C517.185 454.737 518.343 456.055 520 456.687C552.509 468.61 590.067 481.192 625.21 478.582C639.214 477.549 649.494 471.614 653.411 462.399C655.533 457.301 657.363 446.709 645.779 432.837C633.036 417.647 613.684 408.558 596.631 400.525C594.333 399.469 592.109 398.369 589.928 397.344C573.419 389.394 555.919 381.619 536.081 373.407C536.347 363.718 535.845 354.076 534.65 344.436C573.246 360.193 610.296 378.433 644.716 400.376C674.482 419.245 702.151 448.761 697.598 468.572Z"
                        fill="white" />
                </svg>
              </PlanetBox>
              <Star mobile style={{ 'left': '50px', 'top': '50px' }} src={special_27x48} alt="special_27x48" />
              <Star mobile style={{ 'left': '75px', 'top': '250px' }} src={orange_9x10} alt="orange_9x10" />
              <Star mobile style={{ 'right': '175px', 'top': '400px' }} src={orange_9x10} alt="orange_9x10" />
              <Star mobile style={{ 'right': '0px', 'top': '350px' }} src={grey_13x14} alt="grey_13x14" />
              <Star mobile style={{ 'left': '200px', 'top': '475px' }} src={grey_13x14} alt="grey_13x14" />
              <Star mobile style={{ 'right': '50px', 'top': '50px' }} src={grey_24x26} alt="grey_24x26" />
              <Star mobile style={{ 'right': '250px', 'top': '550px' }} src={white_18x19} alt="white_18x19" />
              <Star mobile style={{ 'left': '15px', 'top': '600px' }} src={white_13x14} alt="white_13x14" />
            </GamifiedSection>
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
            </Section>
            {/* <UsedSection style={{ 'marginTop': '113px' }}>
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
            </StatsSection> */}
            <TradeSection>
              <Star style={{ 'left': '400px', 'top': '30px' }} src={white_18x19} alt="white_18x19" />
              <ImageBox>
                <img src={Astronaut} alt='astronaut' />
                <AbsoluteImg desktop style={{ 'top': '175px', 'left': '35px' }} src={Swap} alt='swap' />
              </ImageBox>
              <TradeContainer>
                <TradeTitle>{t('Trade anything anywhere')}</TradeTitle>
                <TradeInfo>{t('Trade any asset by only connecting your wallet')}</TradeInfo>
                <AbsoluteImg mobile src={Swap} alt='swap' />
                <TradeNowFlex alignItems="center">
                  <StyledButton type="default"
                          href={`${process.env.REACT_APP_EXCHANGE_URL}?${urlSearchLanguageParam}=${t('language')}`}
                          target="_blank">
                    {t('tradeNow')}
                  </StyledButton>
                  <InputContainer>
                    <StyledButton type="danger"
                            href={`${process.env.REACT_APP_LIQUIDITY_URL}?${urlSearchLanguageParam}=${t('language')}`}>
                      {t('addLiquidity')}
                    </StyledButton>
                  </InputContainer>
                </TradeNowFlex>
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
                <FarmingTitle>{t('Farming')}</FarmingTitle>
                <FarmingInfo>
                  {t('Higher than other projects yield is ensured by smart contract management and unique strategies')}
                </FarmingInfo>
                <AbsoluteImg mobile style={{ 'top': '155px', 'left': '35px' }} src={Farming} alt='Farming' />
                <Flex alignItems="center" style={{ marginTop: '48px' }}>
                  <ComingSoonButton disabled style={{ zIndex: 1 }}>
                    {t('comingSoon')}
                  </ComingSoonButton>
                  {/* <Button type="default" href={t('presentationLink')} target="_blank">
                    Start Farming
                  </Button>
                  <InputContainer>
                    <Button type="danger" href={process.env.REACT_APP_EXCHANGE_URL}>
                      Start Auto-farming
                    </Button>
                  </InputContainer> */}
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
              <StyledYouTube videoId="kUpv-AYXyew" showVideo={showVideo} ref={videoRef} id="videoPlayer"/>
              <Star style={{ 'right': '100px', 'top': '-75px' }} src={grey_13x14} alt="grey_13x14" />
              <UpperShip src={ship_1} alt='ship_1' showVideo={showVideo} />
              <InfoText>
                <CaptainsTitle>
                  {t('Revolutionary gamified yield farming')}
                </CaptainsTitle>
                <CaptainsDescription>
                  {t('asteroidMiningDescription')}
                </CaptainsDescription>
              </InfoText>
              <VideoButton type="danger"
                // href="https://www.youtube.com/watch?v=kUpv-AYXyew"
                           showVideo={showVideo}
                           onClick={() => setShowVideo(true)}
                           target="_blank">
                <img src={Video_Icon} alt="video-icon" />
                <span>{t('watchVideo')}</span>
              </VideoButton>
              <LowerShip src={ship_2} alt='ship_2' showVideo={showVideo} />
              <CaptainsButtons>
                <StyledButton type="default"
                              href={`${process.env.REACT_APP_ASTEROID_MINING_URL}?${urlSearchLanguageParam}=${t('language')}`}>
                  {t('buyLootBoxes')}
                </StyledButton>
                <InputContainer>
                  <StyledButton type="danger"
                                href={`${process.env.REACT_APP_ASTEROID_MINING_URL}/hangar?${urlSearchLanguageParam}=${t('language')}`}>
                    {t('playNow')}
                  </StyledButton>
                </InputContainer>
              </CaptainsButtons>
            </CaptainsSection>
            <CaptainsSection mobile url={Captains_mobile}>
              <CaptainsTitle>
                {t('Revolutionary gamified yield farming')}
              </CaptainsTitle>
              <VideoButton type="danger" href="https://www.youtube.com/watch?v=kUpv-AYXyew" target="_blank">
                <img src={Video_Icon} alt="video-icon" />
                <span>{t('watchVideo')}</span>
              </VideoButton>
              <CaptainsDescription>
                {t('asteroidMiningDescription')}
              </CaptainsDescription>
              <CaptainsButtons>
                <StyledButton type="default"
                              href={`${process.env.REACT_APP_ASTEROID_MINING_URL}?${urlSearchLanguageParam}=${t('language')}`}>
                  {t('buyLootBoxes')}
                </StyledButton>
                <StyledButton type="danger"
                              href={`${process.env.REACT_APP_ASTEROID_MINING_URL}/hangar?${urlSearchLanguageParam}=${t('language')}`}>
                  {t('playNow')}
                </StyledButton>
              </CaptainsButtons>
            </CaptainsSection>
             <EmailSection>
              <EmailTitle>
                {t('Stay tuned for public round launch')}
              </EmailTitle>
               {/* <form
                 action="https://gmail.us5.list-manage.com/subscribe/post?u=c026fa072d55de036c533ca41&amp;id=f5865b85b1"
                 method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                 target="_blank" noValidate>
                 <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address"
                        required />
                 <input type="submit" value="Subscribe" name="subscribe"
                        id="mc-embedded-subscribe" className="button" />
               </form> */}
              <InputBox>
                {/* <EmailInput placeholder="Your email" ref={emailInputRef} onChange={validateEmail}/>
                <Button type="default" href={t('presentationLink')} target="_blank" onClick={sendEmail} disabled={!validEmail}>
                  Send
                </Button> */}
                <form
                  action="https://finance.us1.list-manage.com/subscribe/post?u=b29c873bb0dd6ca7e92c4b734&amp;id=93d219f749"
                  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                  target="_blank" noValidate>
                  <EmailInput type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder={t('Your email')} onChange={validateEmail} />
                  <SubmitInput type="submit" value={t('Subscribe')} name="subscribe" id="mc-embedded-subscribe" className="button" disabled={!validEmail}/>
                </form>
              </InputBox>
            </EmailSection>
            <PresentationSection desktopUrl={presentation} mobileUrl={presentation_mobile}>
              <PresentationButton href="https://gateway.pinata.cloud/ipfs/QmPyzebkCrP7C8R2WhHxnWcoGXoAb6T1dREZHAZkzCUt7F" target="_blank">{t('Open presentation')}</PresentationButton>
              <Planet>
                <svg width="302" height="321" viewBox="0 0 302 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M290.52 257.869C278.679 235.094 264.168 213.68 248.045 193.224C252.076 181.585 254.242 169.139 254.242 156.14C254.242 93.5106 203.302 42.5203 140.623 42.5203C129.739 42.5203 119.209 44.0823 109.232 46.9543C87.9696 27.2535 63.8349 8.76194 37.1305 1.50641C25.3403 -1.71827 14.1547 0.297177 7.20146 6.94808C0.752097 13.0951 -1.46485 22.3661 0.953657 33.0982C6.89916 59.6514 29.7238 84.6427 43.328 97.5919C32.9989 114.723 27.0534 134.726 27.0534 156.14C27.0534 218.769 77.9933 269.709 140.623 269.709C158.409 269.709 175.187 265.628 190.202 258.322C207.585 277.217 231.367 303.014 258.072 314.804C267.342 318.886 275.253 320.951 281.753 320.951C287.95 320.951 292.838 319.087 296.365 315.308C307.046 303.921 301.101 278.224 290.52 257.869ZM244.669 130.141C246.735 138.455 247.843 147.171 247.843 156.14C247.843 166.922 246.231 177.352 243.258 187.228C229.402 170.046 214.438 153.52 199.07 137.396C204.008 138.152 207.636 137.447 210.104 135.28C213.934 131.955 213.682 126.513 213.48 121.223C213.228 115.68 213.279 111.901 215.697 110.339C217.058 109.432 219.627 110.138 222.953 112.254C227.639 115.227 231.72 119.006 236.003 123.037C238.371 125.203 240.789 127.47 243.309 129.536C243.661 129.839 244.165 130.04 244.669 130.141ZM140.673 48.9697C186.776 48.9697 226.177 78.2437 241.293 119.157C240.991 118.855 240.638 118.552 240.336 118.3C236.003 114.269 231.518 110.138 226.379 106.863C220.685 103.235 215.949 102.58 212.221 104.948C206.527 108.626 206.829 115.781 207.081 121.475C207.232 125.254 207.384 129.133 205.922 130.443C204.915 131.35 202.496 131.501 199.221 130.897C197.256 130.544 195.291 129.889 193.074 129.133C192.721 129.032 192.369 128.982 192.016 128.982C191.714 128.982 191.411 129.032 191.109 129.133C180.024 117.645 168.738 106.359 157.603 95.1229C151.909 89.4294 146.266 83.7358 140.723 78.0926L135.886 73.2052C129.235 66.4535 122.181 59.2483 114.724 52.144C123.038 50.0278 131.704 48.9697 140.673 48.9697ZM131.301 77.6391L136.138 82.5769C141.681 88.2201 147.374 93.8633 153.018 99.6073C183.249 129.99 214.135 160.977 240.739 194.383C238.673 199.774 236.204 204.964 233.332 209.851C228.596 203.805 223.507 197.406 217.864 190.503C175.842 138.958 135.886 95.6772 96.1321 58.543C99.8103 56.8802 103.64 55.3687 107.519 54.109C115.984 62.07 123.895 70.1316 131.301 77.6391ZM233.886 220.986C240.89 230.156 246.987 238.571 252.63 246.834C253.436 248.043 254.293 249.253 255.149 250.462C261.347 259.43 267.796 268.651 269.559 278.728C270.517 284.019 269.66 287.898 267.242 289.763C264.571 291.778 259.936 291.526 254.847 289.057C237.413 280.643 222.55 263.864 210.004 248.799C209.449 248.144 208.694 247.741 207.887 247.64C217.914 240.234 226.732 231.215 233.886 220.986ZM7.20146 31.6874C5.2868 23.2226 6.89917 16.1183 11.6354 11.5332C15.2128 8.10694 20.4025 6.34345 26.348 6.34345C29.2704 6.34345 32.3439 6.74652 35.4678 7.65346C59.8041 14.3044 82.2761 30.982 102.279 49.2216C98.4499 50.582 94.7717 52.144 91.1439 53.9075C89.4308 52.2951 87.6673 50.7332 85.9542 49.1712C79.3033 43.1753 73.2066 38.1872 67.1604 34.0555C62.5249 30.8813 58.6452 28.4124 54.8663 26.3466C45.8473 21.3584 38.0879 20.653 33.0997 24.3311C29.6231 26.8504 26.0961 32.5944 28.7665 45.4931C31.5377 59.0468 41.8668 69.7286 50.9866 79.2011C51.9439 80.2088 52.9012 81.1661 53.8082 82.1234C53.9593 82.2746 54.0601 82.3754 54.2113 82.4762C51.5912 85.5497 49.0719 88.7743 46.8046 92.1502C33.7547 79.453 12.6935 56.0237 7.20146 31.6874ZM85.1481 57.0818C75.2725 62.6242 66.3542 69.5774 58.5948 77.7399L58.5444 77.6895C57.5871 76.7322 56.6298 75.7245 55.6724 74.7168C47.1573 65.8993 37.4832 55.8725 35.0647 44.183C33.5532 36.8267 34.2585 31.4859 36.929 29.4704C37.8863 28.765 39.1963 28.4123 40.8087 28.4123C43.731 28.4123 47.5604 29.6216 51.7927 31.9897C55.3701 33.9548 59.0987 36.3229 63.5326 39.3964C69.2766 43.3769 75.2221 48.1635 81.6715 54.0082C82.8303 54.9656 83.9892 56.0237 85.1481 57.0818ZM168.234 259.733C164.505 255.954 160.928 251.923 157.451 247.993C155.083 245.323 152.614 242.551 150.095 239.83C148.886 238.52 146.87 238.47 145.56 239.679C144.25 240.889 144.2 242.904 145.409 244.214C147.878 246.834 150.297 249.605 152.665 252.225C155.335 255.248 158.106 258.372 160.978 261.396C154.378 262.655 147.576 263.31 140.623 263.31C99.2057 263.31 63.2303 239.73 45.3938 205.266C45.4442 205.266 45.4946 205.216 45.5449 205.216C55.7732 201.537 61.366 207.13 68.42 214.184C72.7532 218.517 77.2375 222.951 83.183 225.521C90.0859 228.443 93.9655 226.478 96.0314 224.312C101.675 218.366 98.7522 204.964 95.981 199.472C95.1748 197.91 93.2602 197.255 91.6982 198.01C90.1363 198.817 89.4812 200.731 90.237 202.293C92.8571 207.533 93.8648 217.207 91.3455 219.878C90.1362 221.137 87.617 220.432 85.6519 219.575C80.8149 217.51 76.784 213.479 72.9043 209.599C65.6488 202.344 57.3856 194.131 43.328 199.169C43.076 199.27 42.7737 199.421 42.5722 199.572C36.6267 186.271 33.3516 171.558 33.3516 156.09C33.3516 115.277 56.3275 79.7049 89.9851 61.5661C110.593 80.7126 131.201 101.471 152.161 124.246C151.909 124.246 151.607 124.296 151.304 124.347C146.014 125.757 140.572 121.475 135.282 117.293C132.662 115.227 130.142 113.262 127.573 111.901C120.418 108.122 115.077 107.971 111.701 111.397C107.066 116.083 108.779 123.137 111.903 128.126C115.279 133.517 120.166 137.296 124.852 140.923C129.387 144.4 133.619 147.726 136.39 152.21C137.902 154.679 138.91 158.81 137.902 161.582C137.448 162.791 136.693 163.547 135.483 164C133.821 164.554 132.914 166.419 133.518 168.081C134.073 169.744 135.937 170.651 137.6 170.046C140.673 168.988 142.89 166.822 143.948 163.799C145.762 158.81 144.2 152.764 141.882 148.935C138.557 143.392 133.569 139.563 128.782 135.885C124.298 132.459 120.116 129.184 117.294 124.75C116.891 124.145 113.566 118.603 116.236 115.932C117.344 114.824 120.468 115.428 124.6 117.595C126.615 118.653 128.883 120.467 131.301 122.382C137.196 127.067 144.502 132.811 152.917 130.594C154.277 130.242 155.184 129.083 155.285 127.722C174.129 148.33 193.276 170.55 212.876 194.584C219.023 202.142 224.615 209.095 229.654 215.645C226.681 220.13 223.356 224.362 219.728 228.343C219.627 228.141 219.527 227.939 219.375 227.788C215.395 222.548 210.961 217.207 206.174 212.018C206.124 211.917 198.415 203.603 196.551 201.789C194.686 199.975 191.562 197.355 189.346 195.945C186.826 194.332 179.268 189.495 173.776 193.274C169.494 196.247 168.486 203.2 170.753 213.932C170.804 214.235 171.005 214.789 171.207 215.494C171.912 217.711 172.315 219.324 172.416 220.331C169.242 220.13 166.269 217.61 163.397 215.141L163.145 214.94C160.777 212.925 158.459 210.758 156.041 208.44C150.246 202.948 144.301 197.255 136.844 193.728C130.747 190.856 126.968 192.871 125.205 194.332C121.728 197.255 120.569 202.797 122.182 208.743C123.088 212.018 124.65 215.293 125.507 216.955C127.623 221.037 130.193 224.816 132.712 228.443C133.619 229.804 134.526 231.114 135.433 232.474C136.39 233.935 138.406 234.338 139.867 233.381C141.328 232.424 141.731 230.408 140.774 228.947C139.867 227.587 138.91 226.226 138.003 224.816C135.483 221.188 133.115 217.711 131.201 213.983C129.941 211.564 128.883 208.994 128.379 207.029C127.321 203.099 128.127 200.227 129.336 199.22C130.596 198.162 132.611 198.817 134.123 199.522C140.673 202.595 146.266 207.936 151.657 213.076C154.025 215.343 156.494 217.661 159.013 219.827L159.215 220.029C163.095 223.304 167.881 227.385 174.179 226.68C175.741 226.529 177.051 225.722 177.858 224.463C179.672 221.641 178.563 217.56 177.253 213.58C177.102 213.176 177.001 212.824 176.951 212.673C175.187 204.409 175.943 199.572 177.354 198.615C178.311 197.96 181.032 198.363 185.819 201.386C187.582 202.495 190.404 204.913 192.016 206.475C193.477 207.886 199.725 214.638 201.388 216.452C206.023 221.49 210.356 226.68 214.236 231.769C214.589 232.222 215.042 232.575 215.546 232.776C202.647 245.423 186.423 254.896 168.234 259.733ZM291.679 310.975C285.28 317.827 271.273 313.645 260.692 309.01C235.801 298.026 213.027 273.639 196.097 255.299C198.969 253.687 201.74 251.973 204.411 250.16C204.209 251.117 204.411 252.125 205.066 252.931C218.065 268.5 233.433 285.883 252.025 294.852C259.432 298.429 266.385 298.429 271.071 294.902C273.641 292.937 277.672 288.1 275.858 277.67C273.842 266.233 266.687 255.954 260.389 246.884C259.533 245.675 258.727 244.466 257.92 243.307C251.874 234.439 245.274 225.37 237.615 215.393C240.588 210.556 243.157 205.518 245.374 200.278C260.339 219.575 273.792 239.679 284.826 260.892C294.4 279.182 299.791 302.258 291.679 310.975Z"
                    fill="#232323" />
                </svg>
              </Planet>
            </PresentationSection>
            {/* <Tokens>
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
                    Farm, autofarm, mine, use it to buy lootboxes, bridge it.</TokenDescription>
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
            </Tokens> */}
             <AmountSection>
              <Star style={{ 'left': '400px', 'top': '0' }} src={grey_13x14} alt="grey_13x14" />
              <Star style={{
                'left': '425px',
                'top': '350px',
                'opacity': '0.6',
                'transform': 'rotate(-50.29deg)',
              }} src={special_27x48} alt="special_27x48" />
              <Star style={{ 'left': '400px', 'bottom': '25px' }} src={white_18x19} alt="white_18x19" />
             {/* <AmountDollars>
                $ 1,423,631.536
              </AmountDollars>
              <AmountText>Amount of tokens transferred</AmountText> */}
              <img style={{ 'marginTop': '42px', zIndex: 1 }} src={networks} alt='networks' />
              <AmountDescription>
                {t('Easy-to-use transparent bridge for GRVS and GRVX tokens across 3 networks')}
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
            <ComingSoonContainer>
              <h1>
                {t('moreComingSoon')}
              </h1>
              <GravisEmptyLogoIcon />
            </ComingSoonContainer>
          </Body>
        </StyledAppContainer>
      </GreetingsWrapper>
    </>
  )
}

export default HomeGreetings
