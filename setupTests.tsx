import '@testing-library/jest-dom'
import 'jest-styled-components'
import { ThemeProvider } from '@mui/material/styles'
import { render } from '@testing-library/react'
import 'ts-node/register'

import { QuoteProvider } from './context/QuoteContext'

import theme from './theme'

// @ts-ignore
global.setupWithTheme = function setupWithTheme(component, props = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <QuoteProvider>
        {children}
      </QuoteProvider>
    </ThemeProvider>
  )

  return render(component, {
    wrapper: Wrapper,
    ...props,
  })
}
