import React from 'react'
import styled from 'styled-components'
import { Box } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import { TeamCategory, TeamMemberType } from '../../../../config/constants/team'

const Container = styled(Box)<{ isHidden: boolean }>`
  ${({ isHidden }) =>
    isHidden
      ? `
      opacity: 0.5;
    > img {
        filter: grayscale(100%);
    }
  `
      : ''};
  transition: all 200ms ease-in-out;
`

const Image = styled(Box).attrs((props) => ({
  as: 'img',
  size: { _: '6rem', md: '24rem' },
  borderRadius: { _: '0.8rem', md: '2rem' },
  ...props,
}))<{ src?: string }>`
  object-fit: cover;
`

const TeamMember: React.FC<{ member: TeamMemberType; activeCategory: TeamCategory }> = ({ member, activeCategory }) => {
  const { name, image, position, category } = member

  return (
    <Container
      isHidden={activeCategory === undefined ? false : category !== activeCategory}
      display={{ _: 'flex', md: 'block' }}
      alignItems="center"
    >
      <Image src={image} />
      <Box mt={{ md: '1.4rem' }} ml={{ _: '1.5rem', md: 0 }}>
        <DefaultText fontSize={{ _: '1.6rem', md: '1.8rem' }} fontWeight={600} textAlign={{ md: 'center' }}>
          {name}
        </DefaultText>
        <DefaultText
          fontSize="1.3rem"
          fontWeight={500}
          textAlign={{ md: 'center' }}
          color="rgba(255, 255, 255, 0.5)"
          mt="1rem"
        >
          {position}
        </DefaultText>
      </Box>
    </Container>
  )
}

export default TeamMember
