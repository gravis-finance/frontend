import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@gravis.finance/uikit'
import { useInView } from 'react-intersection-observer'
import { RoadmapType } from '../../../../config/constants/roadmap'
import DefaultText from '../../../../components/DefaultText'

const Wrapper = styled(Box)<{ inView: boolean }>`
  background: radial-gradient(100% 174.41% at 0% 0%, #272a2f 0%, #202327 100%)
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(250px);
  border-radius: 15px;
  width: 312.5px;
  height: 516px;
  min-width: 312.5px;
  min-height: 516px;
  padding: 25px;
  transition: opacity 200ms ease-in-out;
  opacity: ${({ inView }) => (inView ? '1' : '0.3')};
`

const Container = styled(Box)`
  overflow: auto;
  height: 100%;

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }
`

const Hint = styled(Box)<{ color: string }>`
  border-radius: 100%;
  width: 5px;
  height: 5px;

  background: ${({ color }) => color};
`

const ProjectsContainer = styled(Box)`
  > div:not(:last-child) {
    margin-bottom: 35px;
  }
`

const ProjectContainer = styled(Box)`
  > div:not(:last-child) {
    margin-bottom: 12px;
  }
`

const RoadmapItem: React.FC<{ item: RoadmapType }> = ({ item }) => {
  const { period, projects } = item
  const { ref, inView } = useInView({
    threshold: 1,
  })
  return (
    <Wrapper ref={ref} inView={inView}>
      <Container>
        <DefaultText fontSize="24px" fontWeight={800} lineHeight="100%" mb={35}>
          {period}
        </DefaultText>
        <ProjectsContainer>
          {projects.map((project) => {
            const { items: projectItems, title } = project
            return (
              <Box>
                <DefaultText fontSize="18px" fontWeight={800} lineHeight="100%" mb="20px">
                  {title}
                </DefaultText>
                <ProjectContainer pr="8px">
                  {projectItems.map((projectItem) => (
                    <Flex>
                      <Hint color={project.color} mt="6px" />
                      <DefaultText ml={12} fontSize="13px">
                        {projectItem.text.split('\n').map((str) => (
                          <p>{str}</p>
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
