import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

type DescriptionProps = {
  margin?: string;
  children:
  | JSX.Element
  | JSX.Element[]
  | string
  | string[];
}

const StyledTypography = styled(Typography)`
  margin: ${({ margin }) => `${margin}`};
  max-width: 400px;
  width: 100%;
`

const CustomDescription = (props: DescriptionProps) => {
  const { children, margin = '10px 0 0' } = props

  return (
    <StyledTypography margin={margin} variant="caption">
      {children}
    </StyledTypography>
  )
}

export default CustomDescription
