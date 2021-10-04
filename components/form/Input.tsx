import React from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { useController } from 'react-hook-form'

import Typography from '@mui/material/Typography'

import { InputProps } from '../../types/input'

const StyledTextField = styled(TextField)`
  margin-bottom: ${({ error }) => (error ? '10px' : '20px')};
`

const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.palette.error.main};
  margin-bottom: 20px;
`

const Input = (props: InputProps) => {
  const {
    testId, error, label,
  } = props

  const { field, fieldState } = useController(props)

  return (
    <>
      <StyledTextField
        data-testid={testId}
        error={fieldState?.invalid || error}
        label={label}
        variant="outlined"
        {...field}
      />

      {fieldState?.error && (
        <ErrorText data-testid={`${testId}-error`}>
          *
          {fieldState?.error?.type}
        </ErrorText>
      )}
    </>
  )
}

export default Input
