import { useState, createContext, useContext } from 'react'

import { QuoteContextProps } from '../types/quote'

const QuoteContext = createContext<QuoteContextProps>(null)

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[]
}

export const QuoteProvider = (props: Props) => {
  const { children } = props

  const [quote, setQuote] = useState(null)

  return <QuoteContext.Provider value={[quote, setQuote]}>{children}</QuoteContext.Provider>
}

export const useQuote = () => useContext(QuoteContext)
