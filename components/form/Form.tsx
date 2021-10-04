import styled from 'styled-components'

import { FormProps } from '../../types/form'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
  margin-bottom: 50px;
`

const Form = (props: FormProps) => {
  const { children, onSubmit } = props

  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  )
}

export default Form
