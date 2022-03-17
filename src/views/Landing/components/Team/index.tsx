import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Button, Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import TeamMember from '../TeamMember'
import { TeamCategory, teamMembers } from '../../../../config/constants/team'
import TeamFilters from '../TeamFilters'
import useMediaQuery from '../../../../hooks/useMediaQuery'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Container = styled.div`
  padding: 3.4rem 8rem;
  height: fit-content;

  @media screen and (max-width: 665px) {
    padding: 3.4rem 1.6rem;
  }
`

const MembersContainer = styled(Flex)`
  margin: -2.5rem -0.75rem;
`

const StyledFlex = styled(Flex)`
  @media screen and (max-width: 910px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)

  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`)

  const filteredTeamMembers = useMemo(() => {
    if (activeIndex !== 0)
      return teamMembers.sort((member1) => (member1.category === Object.values(TeamCategory)[activeIndex - 1] ? -1 : 1))
    return teamMembers.sort((m1, m2) => (m1.id > m2.id ? 1 : -1))
  }, [activeIndex])

  const sortedFilteredTeamMembers = useMemo(() => {
    if (isMobile && !showAll) return filteredTeamMembers.slice(0, 2)
    return filteredTeamMembers
    // eslint-disable-next-line
  }, [filteredTeamMembers, isMobile, showAll, activeIndex])

  return (
    <Container>
      <StyledFlex alignItems="center" justifyContent="space-between" mb={60}>
        <DefaultText fontSize="4.4rem" fontWeight={700}>
          Our Team
        </DefaultText>
        <TeamFilters activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </StyledFlex>
      <MembersContainer flexWrap="wrap" justifyContent="center">
        {sortedFilteredTeamMembers.map((member) => (
          <TeamMember member={member} activeCategory={Object.values(TeamCategory)[activeIndex - 1]} key={member.name} />
        ))}
      </MembersContainer>
      <Flex justifyContent="center" mt="2.4rem">
        {!showAll && (
          <Button variant="light" onClick={() => setShowAll(!showAll)}>
            Show all
          </Button>
        )}
      </Flex>
    </Container>
  )
}

export default Team
