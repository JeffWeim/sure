import { styled } from '@mui/material/styles'

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { InputProps } from '../../types/input'

const StyledTextField = styled(TextField)`
  margin-bottom: ${({ error }) => (error ? '10px' : '20px')};
`

const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.palette.error.main};
  margin-bottom: 30px;
`

const Input = (props: InputProps) => {
  const {
    testId, error, label, id, validations, formState, register,
  } = props

  return (
    <>
      <StyledTextField
        data-testid={testId}
        error={error}
        label={label}
        variant="outlined"
        {...register(id, { ...validations })}
      />

      {formState?.errors[id] && (
        <ErrorText data-testid={`${testId}-error`}>
          *
          {formState?.errors[id]?.type}
        </ErrorText>
      )}
    </>
  )
}

export default Input
