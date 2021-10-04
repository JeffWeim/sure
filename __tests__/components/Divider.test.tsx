import {
  screen, render,
} from '@testing-library/react'

import Divider from '../../components/Divider'

describe('Divider', () => {
  it('should use the default props', async () => {
    await render(<Divider />)

    const divider = await screen.getByTestId('divider')

    expect(divider).toHaveStyle('margin: 40px 0 30px')
  })

  it('should accept a custom margin prop', async () => {
    await render(<Divider margin="10px 10px 10px" />)

    const divider = await screen.getByTestId('divider')

    expect(divider).toHaveStyle('margin: 10px 10px 10px')
  })
})
