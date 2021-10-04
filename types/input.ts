import { UseControllerProps, Control, FieldValues } from 'react-hook-form'
import { TextFieldProps } from '@mui/material/TextField'

export type InputProps = UseControllerProps & {
  inputProps?: TextFieldProps,
  testId: string,
  error?: boolean,
  label: string,
  control: Control<FieldValues>;
}
