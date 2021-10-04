import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
  margin-bottom: 50px;
`

const FormForm = (props) => {
  const { children, onSubmit } = props

  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  )
}

export default FormForm
