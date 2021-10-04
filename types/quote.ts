type VariableOption = {
  title: string,
  description: string,
  values: Array<Number>,
}

type Address = {
  line_1: string,
  line_2: string,
  city: string,
  region: string,
  postal: string,
}

type PolicyHolder = {
  first_name: string,
  last_name: string,
}

type Quote = {
  quoteId: string,
  rating_address: Address,
  policy_holder: PolicyHolder,
  variable_options: {
      deductible: VariableOption,
      asteroid_collision: VariableOption
  },
  variable_selections: {
      deductible: number,
      asteroid_collision: number
  },
  premium: number,
}

export type QuoteContextProps = [
  quote: Quote,
  setQuote: ({ type }:{ type: string }) => void, // eslint-disable-line
]
