import Link from 'next/link'
import styled from 'styled-components'

const StyledAnchor = styled.a`
  font-size: 30px;
`

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: 20px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99;
`

const Header = () => (
  <StyledHeader>
    <Link href="/" passHref>
      <StyledAnchor>
        🚀
      </StyledAnchor>
    </Link>
  </StyledHeader>
)

export default Header
