import {
  render,
} from '@testing-library/react'

import Footer from '../../components/Footer'

describe('Footer', () => {
  it('should render the correct text', async () => {
    const { getByText } = await render(<Footer />)

    expect(getByText(/Rocket Insurance, Inc. All rights reserved./i)).toBeInTheDocument()
  })
})
