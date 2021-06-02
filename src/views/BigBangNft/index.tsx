import React, { useRef, useState } from 'react'
import Page from 'components/layout/Page'
import { Text, Flex, Button, useModal, CloseIcon } from '@gravis.finance/uikit'
import styled from 'styled-components'

const tableData = [
  {
    name: 'Pool «Evangelist»',
    color: '#FFA100',
    children: [
      {
        name: 'NFT Price: 2000 USDT'
      },
      {
        name: 'Available NFTs: 25'
      },
      {
        name: 'Token Price: 0.25 USDT'
      },
      {
        name: 'Gauaranteed GRVS Allocation: 8000'
      },
      {
        name: 'Gauaranteed GRVS Bonus: 1600'
      },
      {
        name: 'Gravity Farming Pool: Time + Gravity'
      },
    ]
  },
  {
    name: 'Pool «Advocate»',
    color: '#009CE1',
    children: [
      {
        name: 'NFT Price: 1000 USDT'
      },
      {
        name: 'Available NFTs: 50'
      },
      {
        name: 'Token Price: 0.25 USDT'
      },
      {
        name: 'Gauaranteed GRVS Allocation: 4000'
      },
      {
        name: 'Gauaranteed GRVS Bonus: 600'
      },
      {
        name: 'Gravity Farming Pool: Gravity'
      },
    ]
  },
  {
    name: 'Pool «Believer»',
    color: '#24BA7B',
    children: [
      {
        name: 'NFT Price: 500 USDT'
      },
      {
        name: 'Available NFTs: 100'
      },
      {
        name: 'Token Price: 0.25 USDT'
      },
      {
        name: 'Gauaranteed GRVS Allocation: 2000'
      },
      {
        name: 'Gauaranteed GRVS Bonus: 200'
      },
      {
        name: 'Gravity Farming Pool: Time'
      },
    ]
  }
]

const Card = styled.div<{ color?: string }>`
  background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
  border: 1.5px solid ${({ color })=> color || 'none'};
  box-sizing: border-box;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05), 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  color: ${({ color })=> color || 'white'};
  padding: 24px 28px;
  font-size: ${({ color })=> color? '20px' : '16px'};
  line-height: 21px;
  // width: 375px;
  // min-width: 400px;
  width: 25vw;
  @media screen and (max-width: 1340px) {
    width: 100%;
  }
  ${({ color })=> color ? '' : `
    background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
    box-shadow: inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25);
  `};
`

const StyledColumnFlex = styled(Flex)`
  justify-content: space-evenly;
  margin: 30px 0;
  flex-wrap: nowrap;
  margin-right: -10px;
  margin-right: -10px;
  > div:not(:last-child) {
    margin-right: 20px;
  }
  
  > div {
    margin-top: 20px;
  }
  
  @media screen and (max-width: 1340px) {
    flex-direction: column;
    > div {
      text-align: center;
    }
    > div:not(:last-child) {
      margin-bottom: 60px;
    }
  }
`

const StyledFlex = styled(Flex)`
  > div:not(:last-child) {
    margin-bottom: 20px;
  }
`

const InputContainer = styled.div`
    margin: 21px 0;
    display: flex;
    
    justify-content: center;
    
    margin-top: 5px;
    
    > * {
      margin-top: 20px;
    }
    
    @media screen and (max-width: 520px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        > input {
            width: 100%;
            margin-right: 0;
        }
        
        > a {
            box-sizing: border-box;
            margin-top: 16px;
            place-content: center;
            width: 100%;
        }
    }
`

const Input = styled.input<{ error?: boolean }>`
    background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
    border: 1px solid #2E2E2E;
    box-sizing: border-box;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
    border-radius: 39px;
    color: white;
    padding: 16px;
    margin-right: 20px;
    font-size: 14px;
    font-weight: 400;
    width: 285px;
    
    ${({ error }) => error ? 'border: 1px solid #FF4D00;' : ''}
    
    :focus {
        background: linear-gradient(90.28deg, #242424 0%, #1F1F1F 100%);
        box-shadow: inset 0px -1px 0px rgba(129, 129, 129, 0.15), inset 0px 4px 25px rgba(0, 0, 0, 0.25);
        outline: none;
    }
`

const ModalContainer = styled.div`
    margin: auto;
    background: #1C1C1C;
    border-radius: 6px;
    min-width: 450px;
    height: 220px;
    z-index: 10;
    
    @media screen and (max-width: 520px) {
        min-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`

const ModalHeader = styled.div`
    color: white;
    padding: 16px 24px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 520px) {
        > *:first-child {
            opacity: 0;
        }
        border-bottom: none;
    }
`

const ModalBody = styled.div`
    color: white;
    padding: 24px;
    @media screen and (max-width: 520px) {
        margin: auto;
    }
`

const CloseIconContainer = styled.div`
    background: #292929;
    border: 1px solid #2E2E2E;
    box-sizing: border-box;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.05);
    border-radius: 45px;
    width: 40px;
    height: 40px;
    display: flex;
    cursor: pointer;
    
    transition: background 200ms ease-in-out;
    
    :hover {
        background: #242424;
    }
    
    > svg {
        margin: auto;
    }
`

const StyledPage = styled(Page)`
  padding: 16px 6%;
  margin-top: -60px;
  
  @media screen and (max-width: 968px) {
    padding: 16px 8%;
  }
  
  @media screen and (max-width: 500px) {
    padding: 16px 4%;
  }
`

interface Props {
  onDismiss?: () => void
}

const SubscribeModal: React.FC<Props> = ({onDismiss}) => {
  return (
      <ModalContainer>
        <ModalHeader>
          <p>You successfully subscribed</p>
          <CloseIconContainer
            onClick={onDismiss}
          >
            <CloseIcon />
          </CloseIconContainer>
        </ModalHeader>
        <ModalBody>
          <p>You will receive an email when we go live.</p>
          <Button type="default"
                  onClick={onDismiss}
                  style={{ marginTop: '25px', width: '100%', boxSizing: 'border-box', placeContent: 'center' }}>
            Close
          </Button>
        </ModalBody>
      </ModalContainer>
  )
}

const BigBangNft: React.FC = () => {
  const inputRef = useRef(null);
  const [isValidationError, setValidationError] = useState(false);

  const [subscribedModal] = useModal(<SubscribeModal />)

  const validateEmail = (email : string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const clickHandler = () => {
    // @ts-ignore
    if(inputRef.current.value && validateEmail(inputRef.current.value)) {
      const formData = new FormData();
      // @ts-ignore
      formData.append('EMAIL', inputRef.current.value);
      fetch('https://finance.us1.list-manage.com/subscribe/post?u=b29c873bb0dd6ca7e92c4b734&id=93d219f749',
        {
          method: 'POST',
          mode: 'no-cors',// @ts-ignore
          body: formData,
        })
      subscribedModal()
    }
    else {
      setValidationError(true)
    }
  }

  return (
    <StyledPage>
      <Text style={{ textAlign: 'center' }} fontSize="38px">Coming soon</Text>
      <InputContainer>
        <Input placeholder="E-mail" ref={inputRef} error={isValidationError} onChange={()=>setValidationError(false)}/>
        <Button variant="danger" onClick={clickHandler}>Let me know</Button>
      </InputContainer>
      <Text fontSize="24px" mb="5px">Big Bang NFT distribution round</Text>
      <Text fontSize="18px" mb="30px">The point of Big Bang Round is the sale of NFTs, with which the buyer farms GRVS tokens.
        GRVS tokens can be bought or sold freely and also can be used to interact with various parts of our ecosystem.</Text>
      <Text fontSize="24px" mb="5px">NFT Card Types and GRVS Farming</Text>
      <Text fontSize="18px">
        There are three pools of NFT cards on the Big Bang Round: Believer, Advocate, and Evangelist.
        We sell NFT tokens for the Binance Smart Chain’s stablecoins — USDT, BUSD, USDC.
        The cost of the NFT: ‘Believer’ — 500, ’Advocate’ — 1000, ‘Evangelist’ — 2000.
        The number of tokens that the user will receive and bonuses are shown in the table below.
      </Text>
      <StyledColumnFlex>
        {tableData.map(table =>
            <StyledFlex flexDirection="column">
              <Card color={table.color}>{table.name}</Card>
              {table.children.map(child =>
                  <Card>{child.name}</Card>
              )}
            </StyledFlex>
        )}
      </StyledColumnFlex>

      <Text fontSize="24px" mb="5px">Big Bang Round GRVS avg. price and Bonuses</Text>
      <Text fontSize="18px">
        After buying the Big Bang Round NFT cards, the user can wait for the start of Gravity Farming or sell the NFTs on the internal marketplace or on another p2p platform. We will illustrate a detailed description of Gravity Farming in a separate article.
        The higher the cost of NFT, the higher the speed of farming, the size of the bonus, and so on. The initial farming speed and the amount of additional GRVS bonus cannot be changed. For example, a card from the ‘Believer ‘ category farms GRVS tokens at a rate of 1% per day, and the farming rate increases by 0.25% every 10 days. The farming pool for this map is called Time.
        Big Bang Round participants have the advantage of being the first to receive GRVS. Each of the bonus pools contains extra bonuses, in addition to the guaranteed ones.
        The NFTs can be sold on the internal trading post if you decide you do not want to farm.
      </Text>
    </StyledPage>
  )
}

export default BigBangNft
