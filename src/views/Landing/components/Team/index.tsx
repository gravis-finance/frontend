import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import TeamMember from '../TeamMember'
import { TeamCategory, teamMembers } from '../../../../config/constants/team'
import TeamFilters from '../TeamFilters'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 2.5rem;

  @media (min-width: ${breakpoints.md}) {
    display: block;
    height: fit-content;
  }
`

const StyledFlex = styled(Flex)`
  @media screen and (max-width: 910px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const filteredTeamMembers = useMemo(() => {
    if (activeIndex !== 0)
      return teamMembers.filter((member1) => member1.category === Object.values(TeamCategory)[activeIndex - 1])
    return teamMembers.sort((m1, m2) => (m1.id > m2.id ? 1 : -1))
  }, [activeIndex])

  return (
    <Container>
      <StyledFlex alignItems="center" justifyContent="space-between" gridGap="2rem">
        <DefaultText fontSize={{ _: '3.2rem', md: '4.4rem' }} fontWeight={700} width={{ _: '100%', md: 'auto' }}>
          Our Team
        </DefaultText>
        <TeamFilters activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </StyledFlex>
      <Flex
        flexWrap="wrap"
        justifyContent={{ md: 'center' }}
        flexDirection={{ _: 'column', md: 'row' }}
        mt={{ _: '4.5rem', md: '6rem' }}
        flex={1}
        overflow={{ _: 'auto', md: 'initial' }}
        gridGap={{ _: '1.5rem 3rem', md: '5rem 1.5rem' }}
        className="no-scroll-bar"
      >
        {filteredTeamMembers.map((member) => (
          <TeamMember member={member} activeCategory={Object.values(TeamCategory)[activeIndex - 1]} key={member.name} />
        ))}
      </Flex>
    </Container>
  )
}

export default Team
