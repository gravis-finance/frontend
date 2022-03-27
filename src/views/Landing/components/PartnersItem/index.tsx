import React from 'react'
import styled from 'styled-components'
import { Box } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Container = styled(Box)`
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.4rem;
  position: relative;
  padding: 2rem;
  border-radius: 10px;

  @media (min-width: ${breakpoints.md}) {
    height: 11rem;
    padding: 3rem;
  }
`

const Image = styled(Box).attrs((props) => ({
  as: 'img',
  ...props,
}))<{ src?: string; alt?: string }>`
  width: 100%;
  height: 100%;
  object-fit: contain;

  &[alt='blocksolfi'] {
    max-width: 92rem;
    max-height: 1.2rem;
  }
  &[alt='dutch crypto investors'] {
    max-width: 7.42rem;
    max-height: 3.71rem;
  }
  &[alt='OneBlock Labs'] {
    max-width: 10.3rem;
    max-height: 3.1rem;
  }
  &[alt='tccl ventures'] {
    max-width: 6.6rem;
    max-height: 3rem;
  }
  &[alt='gem mouse'] {
    max-width: 4.8rem;
    max-height: 4.8rem;
  }
  &[alt='crypto era'] {
    width: auto;
    height: 6.6rem;
  }
  &[alt='coin sixty eight'] {
    max-width: 6.83rem;
    max-height: 3.8rem;
  }
  &[alt='coin sixty eight'] {
    width: auto;
    height: 6.83rem;
  }
  &[alt='C'] {
    max-height: 4.5rem;
  }
  &[alt='polygon'] {
    max-height: 2.33rem;
  }
  &[alt='huobi'] {
    max-height: 2.33rem;
  }
  &[alt='polkadot'] {
    max-height: 1.9rem;
  }
  &[alt='near'] {
    max-height: 2.2rem;
  }
  &[alt='unknown'] {
    max-height: 3.8rem;
  }
`

type Props = {
  image: { img: string; alt?: string; soon?: boolean }
}

const PartnersItem: React.FC<Props> = ({ image }) => {
  return (
    <Container>
      <Image src={image.img} alt={image.alt} mb={image.soon ? '1rem' : ''} />
      {image.soon ? (
        <DefaultText
          letterSpacing="0"
          color="rgba(255, 255, 255, 0.5)"
          textTransform="uppercase"
          fontSize={{ _: '0.8rem', md: '0.9rem' }}
          position="absolute"
          bottom="1.2rem"
        >
          Coming soon
        </DefaultText>
      ) : (
        ''
      )}
    </Container>
  )
}

export default PartnersItem
