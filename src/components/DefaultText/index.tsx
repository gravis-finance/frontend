import styled from 'styled-components'
import { Text } from '@gravis.finance/uikit'
import { TypographyProps, typography, position, PositionProps } from 'styled-system'

const DefaultText = styled(Text)<TypographyProps & PositionProps>`
  letter-spacing: -0.02em;
  ${typography}
  ${position}
`

export default DefaultText
