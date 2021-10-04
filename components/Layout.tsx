import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import styled from 'styled-components'
import Head from 'next/head'

import { QuoteProvider } from '../context/QuoteContext'

import theme from '../theme'

import { LayoutProps } from '../types/layout'

import Footer from './Footer'
import Header from './Header'

const StyledMain = styled.main`
  min-height: calc(100vh - 175px);
  padding: 0 20px;
`

const StyledGrid = styled(Grid)`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`

const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <QuoteProvider>
        <CssBaseline />

        <Head>
          <link rel="icon" href="/favicon.png" type="image/png" />
        </Head>

        <Header />

        <StyledMain>
          <StyledGrid container>
            {children}
          </StyledGrid>
        </StyledMain>

        <Footer />
      </QuoteProvider>
    </ThemeProvider>
  )
}

export default Layout
