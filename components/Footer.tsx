import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  position: sticky;
  text-align: center;
  top: 0;
  width: 100%;
`

const Footer = () => (
  <StyledFooter>
    &copy;
    {' '}
    {new Date().getFullYear()}
    {' '}
    Rocket Insurance, Inc. All rights reserved.
  </StyledFooter>
)

export default Footer
