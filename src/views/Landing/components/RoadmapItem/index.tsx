import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@gravis.finance/uikit'
import { useInView } from 'react-intersection-observer'
import { RoadmapType } from '../../../../config/constants/roadmap'
import DefaultText from '../../../../components/DefaultText'
import { RoadmapCheckMarkIcon } from '../../../../components/Svg'
import useMediaQuery from '../../../../hooks/useMediaQuery'
import { breakpoints } from '../../../../contexts/ThemeContext'

const Wrapper = styled(Box)<{ inView: boolean }>`
  background: radial-gradient(100% 174.41% at 0% 0%, #272a2f 0%, #202327 100%)
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(250px);
  border-radius: 1.5rem;
  width: 31.25rem;
  height: 51.6rem;
  min-width: 31.25rem;
  min-height: 51.6rem;
  padding: 2.5rem;
  transition: opacity 200ms ease-in-out;
  opacity: ${({ inView }) => (inView ? '1' : '0.3')};
`

const Container = styled(Box)`
  overflow: auto;
  height: 100%;

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.6rem;
  }
`

const Hint = styled(Box)<{ color: string }>`
  border-radius: 100%;
  width: 0.5rem;
  height: 0.5rem;
  min-width: 0.5rem;
  min-height: 0.5rem;

  background: ${({ color }) => color};
`

const ProjectsContainer = styled(Box)`
  > div:not(:last-child) {
    margin-bottom: 3.5rem;
  }
`

const ProjectContainer = styled(Box)`
  > div:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`

const CheckmarkBox = styled(Box)<{ color: string }>`
  margin-right: -0.4rem;

  > svg {
    margin-bottom: 0.2rem;
    * {
      stroke: ${({ color }) => color};
    }
  }
`

const RoadmapItem: React.FC<{ item: RoadmapType }> = ({ item }) => {
  const { period, projects } = item
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`)
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.5 : 1,
    rootMargin: '4000px 0px 4000px 0px',
  })

  return (
    <Wrapper ref={ref} inView={inView} className="roadmap-item">
      <Container>
        <DefaultText fontSize="2.4rem" fontWeight={800} lineHeight="100%" mb={35}>
          {period}
        </DefaultText>
        <ProjectsContainer>
          {projects.map((project) => {
            const { items: projectItems, title } = project
            return (
              <Box key={title}>
                <DefaultText fontSize="1.8rem" fontWeight={800} lineHeight="100%" mb="2rem">
                  {title}
                </DefaultText>
                <ProjectContainer pr="0.8rem">
                  {projectItems.map((projectItem) => (
                    <Flex key={projectItem.text}>
                      {projectItem.done ? (
                        <CheckmarkBox color={project.color}>
                          <RoadmapCheckMarkIcon />
                        </CheckmarkBox>
                      ) : (
                        <Hint color={project.color} mt="0.6rem" />
                      )}
                      <DefaultText ml="1.2rem" fontSize="1.3rem" lineHeight="1.95rem">
                        {projectItem.text.split('\n').map((str, index) => (
                          <p key={index}>{str}</p>
                        ))}
                      </DefaultText>
                    </Flex>
                  ))}
                </ProjectContainer>
              </Box>
            )
          })}
        </ProjectsContainer>
      </Container>
    </Wrapper>
  )
}

export default RoadmapItem
