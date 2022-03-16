import React from 'react'
import styled from 'styled-components'
import DefaultText from '../../../../components/DefaultText'
import { TeamCategory, TeamMemberType } from '../../../../config/constants/team'

const Container = styled.div<{ isHidden: boolean }>`
  margin: 2.5rem 0.75rem;
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

const Image = styled.img`
  height: 24rem;
  width: 24rem;
  border-radius: 2rem;
  object-fit: cover;
`

const TeamMember: React.FC<{ member: TeamMemberType; activeCategory: TeamCategory }> = ({ member, activeCategory }) => {
  const { name, image, position, category } = member

  return (
    <Container isHidden={activeCategory === undefined ? false : category !== activeCategory}>
      <Image src={image} alt="" />
      <DefaultText fontSize="1.8rem" fontWeight={600} textAlign="center" mt="1.4rem">
        {name}
      </DefaultText>
      <DefaultText fontSize="1.3rem" fontWeight={500} textAlign="center" color="rgba(255, 255, 255, 0.5)">
        {position}
      </DefaultText>
    </Container>
  )
}

export default TeamMember
