import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'

type DividerProps = {
  margin?: string
}

const StyledDivider = styled(Divider)<DividerProps>`
  && {
    margin: ${({ margin }) => `${margin}`};
  }
`

const CustomDivider = (props: DividerProps) => {
  const { margin = '40px 0 30px' } = props

  return (
    <StyledDivider data-testid="divider" margin={margin} />
  )
}

export default CustomDivider
