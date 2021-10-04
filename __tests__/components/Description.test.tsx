import {
  screen, render,
} from '@testing-library/react'

import Description from '../../components/Description'

describe('Description', () => {
  beforeEach(() => {
    render(<Description>Description test goes here</Description>)
  })

  it('should render the correct text', async () => {
    const descriptionText = await screen.getByText('Description test goes here')

    expect(descriptionText).toBeInTheDocument()
  })
})
