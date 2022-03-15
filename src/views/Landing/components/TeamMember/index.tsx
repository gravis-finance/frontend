import React from 'react'
import styled from 'styled-components'
import DefaultText from '../../../../components/DefaultText'
import { TeamCategory, TeamMemberType } from '../../../../config/constants/team'

const Container = styled.div<{ isHidden: boolean }>`
  margin: 25px 7.5px;
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
  height: 240px;
  width: 240px;
  border-radius: 20px;
  object-fit: cover;
`

const TeamMember: React.FC<{ member: TeamMemberType; activeCategory: TeamCategory }> = ({ member, activeCategory }) => {
  const { name, image, position, category } = member

  return (
    <Container isHidden={activeCategory === undefined ? false : category !== activeCategory}>
      <Image src={image} alt="" />
      <DefaultText fontSize="18px" fontWeight={600} textAlign="center" mt="14px">
        {name}
      </DefaultText>
      <DefaultText fontSize="13px" fontWeight={500} textAlign="center" color="rgba(255, 255, 255, 0.5)">
        {position}
      </DefaultText>
    </Container>
  )
}

export default TeamMember
