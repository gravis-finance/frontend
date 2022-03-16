import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import TeamMember from '../TeamMember'
import { TeamCategory, teamMembers } from '../../../../config/constants/team'
import TeamFilters from '../TeamFilters'

const Container = styled.div`
  padding: 34px 80px;
  height: fit-content;
`

const MembersContainer = styled(Flex)`
  margin: -25px -7.5px;
`

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const filteredTeamMembers = useMemo(() => {
    if (activeIndex !== 0)
      return teamMembers.sort((member1) => (member1.category === Object.values(TeamCategory)[activeIndex - 1] ? -1 : 1))
    return teamMembers.sort((m1, m2) => (m1.id > m2.id ? 1 : -1))
  }, [activeIndex])

  return (
    <Container id="team">
      <Flex alignItems="center" justifyContent="space-between" mb={60}>
        <DefaultText fontSize="44px" fontWeight={700}>
          Our Team
        </DefaultText>
        <TeamFilters activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </Flex>
      <MembersContainer flexWrap="wrap">
        {filteredTeamMembers.map((member) => (
          <TeamMember member={member} activeCategory={Object.values(TeamCategory)[activeIndex - 1]} />
        ))}
      </MembersContainer>
    </Container>
  )
}

export default Team
