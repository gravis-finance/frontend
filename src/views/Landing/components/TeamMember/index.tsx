import React from 'react'
import styled from 'styled-components'
import DefaultText from '../../../../components/DefaultText'
import { TeamMemberType } from '../../../../config/constants/team'

const Container = styled.div`
  margin: 25px 7.5px;
`

const Image = styled.img`
  height: 240px;
  width: 240px;
  border-radius: 20px;
  object-fit: cover;
`

const TeamMember: React.FC<{ member: TeamMemberType }> = ({ member }) => {
  const { name, image, position } = member

  return (
    <Container>
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
